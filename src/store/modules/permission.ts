import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { constantRoutes } from '@/router'
import handleRouter  from '@/router/handelRouter'
import store from '@/store'

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[],
  buttonsRole: any []
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []
  public buttonsRole: any = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Mutation
  private SET_BUTTONSROLE(roles: any[]) {
    this.buttonsRole = roles
  }

  @Action
  public GenerateRoutes(roles: string[]) {
    const routerList: any[] = []
    handleRouter(roles,routerList)
    this.SET_ROUTES(routerList)
  }

  @Action
  public SetButtonsRole(roles: any[]){
    this.SET_BUTTONSROLE(roles)
  }

}

export const PermissionModule = getModule(Permission)
