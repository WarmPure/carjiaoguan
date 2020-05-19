import request from '@/utils/request'

export const getRoles = (data: any) =>
    request({
        url: `api-user/roles`,
        method: 'GET',
        params: data
    })

export const putRoles = (data: any) =>
    request({
        url: `api-user/roles/saveOrUpdate`,
        method: 'POST',
        data
    })

export const delRoles = (id: any) =>
    request({
        url: `api-user/roles/${id}`,
        method: 'DELETE'
    })

//根据角色id菜单
export const getRoleMenus = (id: number) =>
    request({
        url: `api-user/menus/${id}/menus`,
        method: 'GET'
    })

export const postRoleMenus = (data: any) =>
    request({
        url: `api-user/menus/granted`,
        method: 'POST',
        data
    })
