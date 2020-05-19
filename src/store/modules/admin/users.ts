import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
// import { getUsers } from '@/api/admin/users'
import { UserModule } from '@/store/modules/login'
import store from '@/store'

export interface IUserState {
    users: any[]
}

@Module({ dynamic: true, namespaced: true, store, name: 'users' })
class User extends VuexModule implements IUserState {
    public users: any[] = []

    @Mutation
    private SET_USERS(users: any) {
        this.users = users
    }

    @Action
    public async GetUsers(listQuery: {page: number, limit: number}) {
        let { page, limit } = listQuery
        // const { content }:any = await getUsers({page, limit})
        // this.SET_USERS(content)
    }

}

export const AdminUsersModule: any = getModule(User)
