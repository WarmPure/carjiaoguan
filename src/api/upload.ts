import request from '@/utils/request'

export const upload = (data: any) =>
    request({
        url: `api-file/files/upload`,
        method: 'POST',
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        },
        data,
    })

export const uploadShowImg = (url: any) =>
    request({
        url: `api-file/files/showFile/${url}`,
        method: 'get',
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": "Basic d2ViQXBwOndlYkFwcA=="
        },
    })

export const uploadFile = (url: string) =>
    request({
        url: `api-file/files/downLoad?fileUrl=${url}`,
        method: 'get',
        responseType: 'blob',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // 'Content-Type': 'form-data application/x-www-form-urlencoded'
        },
        // params: { fileUrl: url }
    })
