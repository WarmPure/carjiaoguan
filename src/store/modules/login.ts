import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import {login, getInfo, logout} from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import { removeUserInfo,getUserInfo,setUserInfo } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import store from '@/store'

export interface IUserState {
    token: string
    userName: string
    userInfo: any
    users: object
}

@Module({ dynamic: true, store, name: 'login' })
class Login extends VuexModule implements IUserState {
    public token = getToken() || ''
    public userName = ''
    public userInfo = {}
    public users: any[] = []
    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_NAME(name: string) {
        this.userName = name
    }

    @Mutation
    private SET_USERINFO(userinfo: any) {
        this.userInfo = userinfo
    }

    @Mutation
    private SET_USERS(users: any) {
        this.users = users
    }

    @Action
    public async Login(userInfo: { username: string, password: string, validCode: string, deviceId: number}) {
        let { username, password, validCode, deviceId } = userInfo
        username = username.trim()
        const data: any = await login({ username, password,validCode,deviceId })

        setToken(data.data.token)
        this.SET_TOKEN(data.data.token)
    }

    @Action
    public ResetToken() {
        removeToken()
        this.SET_TOKEN('')
    }

    @Action
    public async Logout() {
        let token = getToken()
        this.LogOut()
        // await logout(token)
    }

    @Action
    public async GetUserInfo() {
        const { content }: any = await getInfo({})

        this.SET_USERINFO(content)
        this.SET_NAME(content.userName)
        setUserInfo(content)
    }

    @Action
    public async LogOut() {
        // if (this.token === '') {
        //     throw Error('LogOut: token is undefined!')
        // }
        removeToken()
        resetRouter()
        removeUserInfo()

        this.SET_TOKEN('')

        location.reload();
    }
}

export const UserModule:any = getModule(Login)
