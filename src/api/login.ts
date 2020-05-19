import request from '@/utils/request'

export const login = (data: any) =>
    request({
        url: `user/userLogin`,
        method: 'POST',
        data,
        headers:{
            "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        }
    })

export const register = (data: any) =>
    request({
        url: `api-uaa/oauth2/register/token?validCode=${data.validCode}&deviceId=${data.deviceId}`,
        method: 'POST',
        data,
        // headers:{
        //     "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        // }
    })

export const getInfo = (data: any) =>
    request({
        url: `api-user/users/getInfo`,
        method: 'GET',
        params: data,
    })

export const logout = (token: any) =>
    request({
        url: `api-uaa/oauth2/remove/token?access_token=${token}`,
        method: 'post',
    })

export const putUser = (data: any) =>
    request({
        url: `api-user/users`,
        method: 'PUT',
        data,
    })


export const putPassword = (data: any) =>
    request({
        url: `api-user/users/password`,
        method: 'PUT',
        data,
    })

export const getMessage = (orgId: string) =>
    request({
        url: `api-message/messageInfo/get-box-list/${orgId}`,
        method: 'GET',
    })

export const getMessageDetail = (data: any) =>
    request({
        url: `api-message/messageInfo?page=${data.page}&limit=${data.limit}&organizationId=${data.organizationId}`,
        method: 'GET',
    })

export const updateMessage = (data: any) =>
    request({
        url: `api-message/messageInfo`,
        method: 'post',
        data,
    })
