import Layout from '@/layout/index.vue'

export default function handleRouter(menus: any[],routerList: any[]) {
    if(!menus) return routerList;
    for (let i = 0; i < menus.length; i++) {
        if(menus[i].subMenus && menus[i].subMenus.length > 0) {
            const routerItem:any = {
                path: formatRouterPath(menus[i].path),
                component: Layout,
                redirect: formatRouterPath(menus[i].redirect),
                meta: {
                    icon: menus[i].css ? menus[i].css : "eye",
                    title: menus[i].name,
                    permission: menus[i].buttonMenus ? menus[i].buttonMenus : [],
                    buttons: menus[i].buttonMenus ? buttonsPermission(menus[i].buttonMenus) : []
                },
                children: []
            }
            routerList.push(routerItem)
            handleRouter(menus[i].subMenus,routerItem.children)
        }else{
            const topChild = {
                path: formatRouterPath(menus[i].path),
                name: '',
                meta: {
                    icon: menus[i].css ? menus[i].css : "eye",
                    title: menus[i].name,
                    address: menus[i].path,
                    permission: menus[i].buttonMenus ? menus[i].buttonMenus : [],
                    buttons: menus[i].buttonMenus ? buttonsPermission(menus[i].buttonMenus) : []
                },
                component: () => import(`@/${menus[i].showUrl}`)
            }
            routerList.push(topChild)
        }
    }
    return routerList
}

function formatRouterPath(path: string){
    if(path) return path
    return ""
}

function buttonsPermission(buttons: any) {
    const permission: any = []
    buttons.forEach((item: any) => {
        permission.push(item.buttonStatus)
    })
    return permission
}
