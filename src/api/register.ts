import request from '@/utils/request'

export const register = (data: any) =>
    request({
        url: `api-uaa/oauth2/register/token?validCode=${data.validCode}&deviceId=${data.deviceId}`,
        method: 'POST',
        data,
        headers:{
            "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        }
    })

export const organization = (data: any) =>
    request({
        url: `api-user/users/info`,
        method: 'POST',
        data,
        headers:{
            "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        }
    })
