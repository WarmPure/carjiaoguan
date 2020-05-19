import request from '@/utils/request'

export const getOrganization = (data: any) =>
    request({
        url: `api-user/sysorganization/get-by-id`,
        method: 'GET',
    })

//修改机构资料
export const putOrganization = (data: any) =>
    request({
        url: `api-user/sysorganization/update`,
        method: 'PUT',
        data: data
    })


/**
 * @author
 * @date 2019/12/15
 * @Description: 认证接口
 */
export const postPersonEl = (data: any) =>
    request({
        url: `api-user/sysorganizationca/person/el`,
        method: 'POST',
        data
    })

export const postPersonCa = (data: any) =>
    request({
        url: `api-user/sysorganizationca/person/ca`,
        method: 'POST',
        data
    })

export const postCompanyCa = (data: any) =>
    request({
        url: `api-user/sysorganizationca/company/ca`,
        method: 'POST',
        data
    })

export const postCompanyEl = (data: any) =>
    request({
        url: `api-user/sysorganizationca/company/el`,
        method: 'POST',
        data
    })

export const getCompanyEl = (data: any) =>
    request({
        url: `api-user/sysorganizationca/ca/pass/${data}`,
        method: 'GET',
    })

//获取用户是否认证完毕
export const getCompanyStatus = () =>
    request({
        url: `api-user/sysorganizationca/ca/completed`,
        method: 'GET',
    })

/**
 *  开户
 * @param data
 */
export const postCreateAccount = (data: any) =>
    request({
        url: `api-elecontract/elecontract/account`,
        method: 'POST',
        data
    })

/**
 *  查询开户状态
 * @param data
 */
export const getAccountStatus = (data: any) =>
    request({
        url: `api-user/sysorganizationca/ca/${data.orgId}/${data.type}/${data.sysType}`,
        method: 'GET',
    })
