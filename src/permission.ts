import router, { constantRoutes } from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/login'
import { PermissionModule } from '@/store/modules/permission'
import settings from './settings'
//暂时写死，之后清除
import Layout from '@/layout/Index.vue'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']
// const whiteList = ['/login', '/area', '/house', '/account', '/service']

const getPageTitle = (key: string) => {
  const hasKey = key
  if (hasKey) {
    const pageName = key
    return `${pageName} - ${settings.title}`
  }
  return `${settings.title}`
}

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()
  // PermissionModule.SetButtonsRole(to.meta.buttons)
  // Determine whether the user has logged in

  if (UserModule.token) {
      next()
      // next(`/login`)
  //   if (to.path === '/login') {
  //     // If is logged in, redirect to the home page
  //     next({ path: '/area' })
  //     NProgress.done()
  //   }
    // else {
      // Check whether the user has obtained his permission roles
      // if (UserModule.menus.length === 0 && !router.options.isNew) {
      //   try {
      //     // await UserModule.GetMenus()
      //     // await UserModule.GetUserInfo()
      //     // const menus = UserModule.menus
      //
      //     // await PermissionModule.GenerateRoutes(defaultMenus.concat(menus));
      //     //动态菜单添加
      //     // await PermissionModule.GenerateRoutes(menus)
      //     router.options.routers = constantRoutes
      //     if(PermissionModule.dynamicRoutes.length > 0){
      //       PermissionModule.dynamicRoutes.map((item) => {
      //          router.options.routes.push(item)
      //       })
      //       router.addRoutes(PermissionModule.dynamicRoutes)
      //     }
      //       router.options.isNew = true
      //     next({ ...to, replace: true })
      //     next({ to })
      //   } catch (err) {
      //     // Remove token and redirect to login page
      //     // UserModule.ResetToken()
      //     Message.error(err || 'Has Error')
      //     next(`/login`)
      //     // next(`/login?redirect=${to.path}`)
      //     NProgress.done()
      //   }
      // } else {
      //   next()
      // }
    // }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
      // next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
