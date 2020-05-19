import request from '@/utils/request'

// export const getBusiness = (data: any) =>
//     request({
//         url: `api-user/sysbusinesscircle`,
//         method: 'GET',
//         params: data
//     })

export const getBusiness = (id: number) =>
    request({
        url: `api-user/sysbusinesscircle/get-by-orgid`,
        method: 'GET'
    })

export const getBusinessSupply = (data: any) =>
    request({
        url: `api-user/sysbusinesscircle/find-supply`,
        method: 'GET',
        params: data
    })

export const postBusiness = (data: any) =>
    request({
        url: `api-user/sysbusinesscircle/save`,
        method: 'POST',
        data
    })

export const putBusiness = (data: any) =>
    request({
        url: `api-user/sysbusinesscircle/save`,
        method: 'POST',
        data
    })

export const delBusiness = (id: any) =>
    request({
        url: `api-user/sysbusinesscircle/${id}`,
        method: 'DELETE'
    })

export const getTypeOrgs = () =>
    request({
        url: `api-user/sysorganization/get-orgs-by-type`,
        method: 'GET'
    })

export const postOrgs = (id: number, data: any) =>
    request({
        url: `api-user/sysbusinesscircle/${id}/join-buseiness-circle`,
        method: 'POST',
        data: data
    })

