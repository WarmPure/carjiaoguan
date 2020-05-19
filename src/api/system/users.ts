/**
 * author:hz
 * createTime:2019/11/22
 */

import request from '@/utils/request'

/**
 * 获取用户列表
 * @param data
 */
export const getUsers = (data: any) =>
    request({
        url: `api-user/users`,
        method: 'GET',
        params: data
    })
/**
 * 增加用户
 * @param data
 */
export const postAddUsers = (data: any) =>
    request({
        url: `api-user/users/saveOrUpdate`,
        method: 'POST',
        data: data
    })
/**
 * 更新用户
 * @param data
 */
export const putUsers = (data: any) =>
    request({
        url: `api-user/users`,
        method: 'PUT',
        data: data
    })
/**
 * 删除用户
 * @param data
 */
export const delUsers = (id: any) =>
    request({
        url: `api-user/users/${id}`,
        method: 'DELETE'
    })

/**
 * 更新用户Enabled状态
 * @param data
 */
export const updateUsersEnabled = (data: any) =>
    request({
        url: `api-user/users/updateEnabled`,
        method: 'GET',
        params: data
    })

/**
 * 更新用户角色信息
 * @param data{
 *     roleIds:[roleIds]
 * }
 */
export const updateUsersRoles = (data: any) =>
    request({
        url: `api-user/users/${data.id}/roles`,
        method: 'POST',
        data: data.roleIds,
    })

/**
 * 管理员重置用户密码
 * @param id 用户id
 *
 */
export const resetUsersPassword = (id: any) =>
    request({
        url: `api-user/users/${id}/password`,
        method: 'PUT',
    })

/**
 * 用户修改密码
 * @param data{
 *     id,
 *     oldPassword,
 *     newPassword
 * }
 */
export const updateUsersPassword = (data: any) =>
    request({
        url: `api-user/users/password`,
        method: 'POST',
        data,
    })
