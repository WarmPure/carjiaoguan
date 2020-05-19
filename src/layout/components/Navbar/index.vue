<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"/>
    <breadcrumb
      id="breadcrumb-container"
      class="breadcrumb-container"/>
    <div class="right-menu">

      <div class="right-menu-item">
        <div class="item">东方大众物业有限公司管理控制台</div>
        <div class="item">
          <div class="img" style="float:right;">
            <el-divider direction="vertical"></el-divider>
            <img :src="logoutImg" @click="logout()" title="退出" class="user-logout">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/login'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger
  }
})

export default class extends Vue {
  $common: any
  private userImg:any =  require('@/assets/user.png')
  private logoutImg:any =  require('@/assets/login/logout.png')
  get sidebar() {
    return AppModule.sidebar
  }

  get device() {
    return AppModule.device.toString()
  }

  get avatar() {
    return UserModule.userInfo.headImgUrl
  }

  get userAvatar() {
    return this.avatar ? this.avatar : this.userImg
  }

  get username() {
    return UserModule.userInfo.nickname || ""
  }

  get userId() {
    return UserModule.name
  }

  get organization() {
    return UserModule.userInfo.organization
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar(false)
  }

  private async logout() {
    await UserModule.Logout()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      font-size: 16px;
      color: #5a5e66;
      padding-right: 20px;
      height: 50px;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 5px;
      }
      .user-logout {
        cursor: pointer;
        margin-top: 5px;
        float: right;
        margin-top: 17px;
      }
      .item {
        display: inline-block;
        height: 50px;
        margin-left: 5px;
        overflow: hidden;
        .img {
          display: inline-block;
        }
      }
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 0px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
