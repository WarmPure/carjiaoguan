<template>
    <div class="index-container">
        <!--<div v-if="userStatus">-->
        <!--<div style="margin-left: 20px;margin-top: 20px">补全审核信息</div>-->
            <!--<CompletionForm :formInfo="formInfo" :username="username" ref="CompletionForm"></CompletionForm>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button type="primary" style="margin-left: 20px" @click="submitForm">提交信息</el-button>-->
            <!--</div>-->
        <!--</div>-->
        <div>index</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { UserModule } from '@/store/modules/login'
    import { getInfo } from '@/api/login'
    import CompletionForm from '@/components/CompletionForm/index.vue'
    import { organization } from "@/api/register";
    import { putOrganization } from "@/api/system/organization";

    @Component({
        name: 'IndexVue',
        components: {
            CompletionForm
        }
    })
    export default class IndexVue extends Vue {
        $refs: any = {
            CompletionForm: HTMLFormElement
        }
        async created(){
            if(this.userStatus){
                this.formInfo = Object.assign({},this.formInfo,UserModule.userInfo.organization)
                console.log(this.formInfo)
                if(UserModule.userInfo.organization){
                    this.$nextTick(() => {
                        if(this.$refs.CompletionForm) this.$refs.CompletionForm.setForm(this.formInfo)
                    })
                }else{
                    if(this.$refs.CompletionForm) this.$refs.CompletionForm.setForm(this.formInfo)
                }
            }

        }

        private formInfo: any = {
            email: UserModule.userInfo.email
        }
        private formData: any = {}

        private async submitForm(){
            this.$refs.CompletionForm.getSaveForm()
            const validate = this.$refs.CompletionForm.validate
            if(validate) {
                this.formData = this.$refs.CompletionForm.saveForm
                this.formData.userId = UserModule.userInfo.id
                this.formData.organizationId = UserModule.userInfo.organizationId
                if(!this.formInfo.organizationId){
                    await organization(this.formData)
                }else{
                    await putOrganization(this.formData)
                }
                this.$alert('审核信息已修改，将重新登录获取最新信息', {
                    confirmButtonText: '确定',
                    callback: action => {
                        UserModule.Logout()
                        window.location.reload()
                    }
                });

            }
        }

        private logout(){
            this.$router.push('/home')
        }

        get userStatus(): boolean{
            return UserModule.userInfo.organizationStatus == 1 ? true : false
        }

        get username(): string {
            return UserModule.name
        }

    }
</script>

<style lang="scss" scoped>

</style>

