<template>
    <div class="app-wrapper">
        <div>东方大众物业有限公司欢迎您</div>
        <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
            <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>活动管理</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->

        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
            <!--<el-radio-button :label="false">展开</el-radio-button>-->
            <!--<el-radio-button :label="true">收起</el-radio-button>-->
        <!--</el-radio-group>-->
        <!--<el-menu default-active="1-4-1" class="el-menu-vertical-demo"-->
                 <!--@open="handleOpen" @close="handleClose" :collapse="isCollapse"-->
                 <!--:collapse-transition="false"-->
                 <!--mode="vertical">-->
            <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span slot="title" style="color: white">小区管理</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                    <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="2">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">住户管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="3">-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span slot="title">账单管理</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span slot="title">服务记录</span>-->
            <!--</el-menu-item>-->
        <!--</el-menu>-->


    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'Home',
        components: {}
    })
    export default class Home extends Vue {


        private handleOpen(key, keyPath) {
            console.log(key, keyPath);
        }

        private handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
</script>

<style lang="scss" scoped>

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 300px;
    }

</style>
