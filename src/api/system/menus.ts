import request from '@/utils/request'

export const getMenus = (data: any) =>
    request({
        url: `api-user/menus/current`,
        method: 'GET',
        params: data
    })

//获取所有菜单
export const getAllMenus = (data: any) =>
    request({
        url: `api-user/menus/findAlls`,
        method: 'GET',
        params: data
    })

//获取菜单级顶级菜单
export const getOnesMenus = (data: any) =>
    request({
        url: `api-user/menus/findOnes`,
        method: 'GET',
        params: data
    })

//增加菜单
export const postAddMenu = (data: any) =>
    request({
        url: `api-user/menus/saveOrUpdate`,
        method: 'POST',
        data: data
    })

//删除菜单
export const deleteMenu = (id: number) =>
    request({
        url: `api-user/menus/${id}`,
        method: 'DELETE'
    })

