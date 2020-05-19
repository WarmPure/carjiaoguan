interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  showTagsView: boolean // Controls tagsview display
  showSidebarLogo: boolean // Controls siderbar logo display
  fixedHeader: boolean // If true, will fix the header component
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
  devServerPort: number // Port number for webpack-dev-server
  mockServerPort: number // Port number for mock server
  VUE_APP_BASE_API: string
}

// You can customize below settings :)
const settings: ISettings = {
  title: '交管所车辆信息查询',
  showSettings: true,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: false,
  errorLog: ['production'],
  sidebarTextTheme: true,
  devServerPort: 9527,
  mockServerPort: 9528,
  // VUE_APP_BASE_API: 'http://localhost:8080/'
  VUE_APP_BASE_API: 'http://192.168.0.103:8080'
    // VUE_APP_BASE_API: 'http://47.95.229.186:8080'
  // VUE_APP_BASE_API: 'http://192.168.0.151:9900/'
  // VUE_APP_BASE_API: 'http://58.42.231.231:9900/'
  // VUE_APP_BASE_API: 'http://192.168.0.10:9900/'
  // VUE_APP_BASE_API: 'http://10.53.1.87:9900/'
  // VUE_APP_BASE_API: 'http://172.31.10.46:9900/'
}

export default settings
