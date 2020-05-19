import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/login'
import settings from '@/settings'

const service = axios.create({
    baseURL: settings.VUE_APP_BASE_API, // url = base url + request url
    // baseURL: 'http://192.168.0.150:9900/',
    timeout: 300000,
    // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
    (config) => {
        // Add X-Access-Token header to every request, you can add other custom headers here
        if (UserModule.token) {
            config.headers['Authorization'] = "bearer " + UserModule.token
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// Response interceptors
service.interceptors.response.use(
    (response) => {

        // You can change this part for your own usage.
        const res = response.data
        // if(Object.prototype.toString.call(res) === '[object Blob]'){
        //     let fileReader = new FileReader();
        //     fileReader.onload = function() {
        //         var content = fileReader.result;//内容就在这里
        //     };
        //     fileReader.readAsText(res)
        // }
        if(res.status == 401 && res.msg && res.msg.search('token') != -1){
            MessageBox.alert('当前登录信息已过期,请重新登录！',
                {
                    confirmButtonText: '确定',
                    callback: async action => {
                        await UserModule.LogOut()
                    }
                })
        }
        //没有返回retCode,下载文件
        if(!res.status){
            // apiDownloadFiles(res)
            return response.data
        }

        if (res.status !== 200 && res.status !== 0) {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(res.msg || 'Error')
        } else {
            return response.data
        }
    },
    (error) => {
        if(Object.prototype.toString.call(error.response.data) == '[object Blob]'){
            let data = error.response.data;
            let fileReader = new FileReader();
            fileReader.onload = function() {
                let content: any = fileReader.result;
                try {
                    let jsonContent = JSON.parse(content);//内容就在这里
                    console.log(jsonContent)
                    if (jsonContent.status == 500) {
                        Message.error('服务器异常，下载文件出错')
                    }
                    if(jsonContent.status == 9001 || jsonContent.status == 500){
                        Message.error(jsonContent.msg)
                    }
                } catch (err) {
                    Message.error('下载文件出错')
                }
            }
            fileReader.readAsText(data)
        }else{
            let res = error.response.data
            if(res.status === 401 && res.msg && res.msg.test('token')){
                MessageBox.alert('当前登录信息已过期,请重新登录！',
                    {
                        confirmButtonText: '确定',
                        callback: async action => {
                            await UserModule.LogOut()
                        }
                    })
            }
            let message = error.response.data ? error.response.data.msg: '连接服务器失败'
            Message({
                message: message,
                type: 'error',
                duration: 5 * 1000
            })
        }
        return Promise.reject(error)
    }
)

export default service
