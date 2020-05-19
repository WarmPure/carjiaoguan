<template>
  <div
    class="sidebar-logo-container"
    :class="{'collapse': collapse}"
  >
    <transition name="sidebarLogoFade">
      <router-link
              v-if="collapse"
              key="expand"
              class="sidebar-logo-link"
              to="/home"
      >
        <el-image
                :src="whLogo1"
                class="sidebar-logo"
        />
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/home"
      >
        <el-image
          :src="whLogo"
          class="sidebar-logo"
        />
        <!--<h1 class="sidebar-title">-->
          <!--{{ title }}-->
        <!--</h1>-->
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import settings from '@/settings'


@Component({
  name: 'SidebarLogo',
})
export default class extends Vue {
  @Prop({ required: true }) private collapse!: boolean
  private title = settings.title
  private whLogo = require('@/assets/image_login/whLogo.png')
  private whLogo1 = require('@/assets/image_login/whLogo1.png')
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #333B48;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    & .sidebar-logo {
      width: 90%;
      vertical-align: middle;
      padding-top: 7px;
    }
  }

  &.collapse {
    .sidebar-logo {
      padding: 4px;
    }
  }
}
</style>
