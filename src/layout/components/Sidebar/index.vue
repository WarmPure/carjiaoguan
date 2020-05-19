<template>
    <div :class="{'has-logo': showLogo}">
        <sidebar-logo
                @click="goHome"
                v-if="showLogo"
                :collapse="isCollapse"
        />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                    class="wh-menu"
                    :default-active="activeMenu"
                    :collapse="isCollapse"
                    :unique-opened="false"
                    :collapse-transition="false"
                    mode="vertical">

                <sidebar-item-link :to="resolvePath('/area')">
                    <el-menu-item index="1">
                        <i class="el-icon-office-building"></i>
                        <span slot="title">小区管理</span>
                    </el-menu-item>
                </sidebar-item-link>

                <sidebar-item-link :to="resolvePath('/house')">
                    <el-menu-item index="2">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">房屋管理</span>
                    </el-menu-item>
                </sidebar-item-link>

                <sidebar-item-link :to="resolvePath('/account')">
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">账单管理</span>
                    </el-menu-item>
                </sidebar-item-link>

                <sidebar-item-link :to="resolvePath('/service')">
                <el-menu-item index="4">
                    <i class="el-icon-s-cooperation"></i>
                    <span slot="title">出工服务记录</span>
                </el-menu-item>
                </sidebar-item-link>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {AppModule} from '@/store/modules/app'
    import {PermissionModule} from '@/store/modules/permission'
    import SidebarItem from './SidebarItem.vue'
    import SidebarLogo from './SidebarLogo.vue'
    import tree from "element-ui/packages/table/src/store/tree";
    // import variables from '@/styles/_variables.scss'
    import Layout from '@/layout/index.vue'
    import SidebarItemLink from './SidebarItemLink.vue'
    import {isExternal} from '@/utils/validate'
    // import * as path from "path";
    import path from 'path'

    @Component({
        name: 'SideBar',
        components: {
            SidebarItem,
            SidebarLogo,
            SidebarItemLink
        }
    })
    export default class extends Vue {

        private basePath: string = ''

        created() {
        }

        private showLogo = true

        get sidebar() {
            return AppModule.sidebar
        }

        // get routes() {
        //     // return this.$router.options.routes
        //     // return PermissionModule.routes
        //     let menus: any = this.$router.options.routes
        //     return menus
        // }

        private formatRouterPath(path: string) {
            if (path) return path
            return ""
        }

        // get variables() {
        //   return variables
        // }

        get activeMenu() {
           let childrenRoutes = this.$router['options'].routes[3].children
            const route: any = this.$route
            const {meta, path} = route
            // if set path, the sidebar will highlight the path you set
            // if (meta.activeMenu) {
            //     return meta.activeMenu
            // }
            // return path
           for (let i in childrenRoutes) {
               if (childrenRoutes[i].path == path) {
                   return Number(i)+1 + ''
               }
           }
            return 1
        }

        // get menuActiveTextColor() {
        //   return variables.menuActiveText
        // }

        get isCollapse() {
            return !this.sidebar.opened
        }

        private goHome() {
            this.$router.push('/home')
        }

        private resolvePath(routePath: string) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    }
</script>

<style lang="scss">
    .sidebar-container {
        // reset element-ui css
        border-right: 1px solid #ccc;
        .horizontal-collapse-transition {
            transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
        }

        .scrollbar-wrapper {
            overflow-x: hidden !important;
        }

        .el-scrollbar__view {
            height: 100%
        }

        .el-scrollbar__bar {
            &.is-vertical {
                right: 0px;
            }

            &.is-horizontal {
                display: none;
            }
        }

    }
    .wh-menu.el-menu {
        .menu-wrapper.full-mode.first-level {
            color: $subMenuHover;
        }
        .el-menu-item.is-active {
            position: relative;
            background: $subMenuHover !important;

            color: #5CA7DB !important;
        }
        .nest-menu.menu-wrapper.full-mode {
            .el-menu-item {
                svg {
                }
                color: #FFFFFF;
            }
            .el-menu-item:hover:after {
                display: inline-block;
                position: absolute;
                left: 2px;
                top: 0;
                content: ' ';
                background: #41C0FF;
                width: 5px;
                height: 50px;
            }
        }
        .el-menu-item.is-active:after {
            display: block;
            position: absolute;
            left: 2px;
            top: 0;
            content: ' ';
            background: #41C0FF;
            width: 5px;
            height: 100%;
        }
    }
</style>

<style lang="scss" scoped>
    .el-scrollbar {
        height: 100%
    }

    .has-logo {
        .el-scrollbar {
            height: calc(100% - 50px);
        }
    }

    .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
        background-color: $subMenuBg;
    }
</style>
