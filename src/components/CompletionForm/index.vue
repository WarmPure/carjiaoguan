<template>
    <el-form :model="saveForm" ref="saveForm" :rules="rules" label-width="140px" class="demo-saveForm">
        <el-form-item label="机构属性：" prop="organizationProperty">
            <el-radio-group v-model="saveForm.organizationProperty" :disabled="statusDisabled || typeDisabled">
                <el-radio :label="0">企业</el-radio>
                <el-radio :label="2">个人</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="机构类型：" prop="type">
            <el-radio-group v-model="saveForm.type" :disabled="statusDisabled">
                <el-radio-button v-for="item in typeArray" :key="item.value" :label="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="机构类型：" prop="status" v-if="false">
            <el-radio-group v-model="saveForm.status" :disabled="statusDisabled">
                <el-radio :label="1">未认证</el-radio>
                <el-radio v-if="saveForm.status == 2" :label="2">已认证</el-radio>
                <el-radio :label="3">测试</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="关联企业" prop="coreCompanyId" v-if="saveForm.type == 10">
            <el-select v-model="saveForm.coreCompanyId" @change="changeCore" placeholder="请选择">
                <el-option
                        v-for="item in coreCompanys"
                        :key="item.id"
                        :label="item.organizationName"
                        :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="用户名：" prop="username">
            <el-input disabled="disabled" type="text" v-model="username"></el-input>
        </el-form-item>
<!--        <el-form-item label="机构ID：" prop="organizationId">-->
<!--            <el-input type="text" v-model="saveForm.organizationId"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item label="机构名称：" prop="organizationName">
            <el-input type="text" v-model="saveForm.organizationName"></el-input>
        </el-form-item>
        <el-form-item label="联系人名称：" prop="organizationContract">
            <el-input type="text" v-model="saveForm.organizationContract"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：" prop="email">
            <el-input type="text" v-model="saveForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="organizationContractPhone">
            <el-input type="text" v-model.number="saveForm.organizationContractPhone"></el-input>
        </el-form-item>
        <div v-if="isPersonal">
            <el-form-item label="社会信用代码：" prop="socialCreditCode">
                <el-input type="text" v-model="saveForm.socialCreditCode"></el-input>
            </el-form-item>
            <el-form-item label="机构地址：" prop="location">
                <el-input type="text" v-model="saveForm.location"></el-input>
            </el-form-item>
    <!--        <el-form-item label="质押率：" prop="pledgeRate">-->
    <!--            <el-input type="number" v-model="saveForm.pledgeRate"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="关联银行ID：" prop="bankId">-->
    <!--            <el-input type="text" v-model="saveForm.bankId"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="关联银行名称：" prop="bankName">-->
    <!--            <el-input type="text" v-model="saveForm.bankName"></el-input>-->
    <!--        </el-form-item>-->
            <el-form-item label="是否三证合一：" prop="threeinone">
                <el-radio-group v-model="saveForm.threeinone">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item v-if="saveForm.threeinone == 0" label="企业登记号：" prop="enterpriseRegistNo">
                <el-input type="text" v-model="saveForm.enterpriseRegistNo"></el-input>
            </el-form-item>
        </div>
    </el-form>
</template>

<script lang="ts">

    import { Component, Vue, Prop } from 'vue-property-decorator'
    // import UploadUrlComponent from "@/components/UploadInputUrl/Index.vue"
    import { validateMobile } from '@/utils/validate'
    // import { getOrganizationByType } from "@/api/transaction/contract";
    import publicData from '@/utils/public'

    @Component({
        name: 'CompletionForm',
        components: {

        }
    })
    export default class CompletionForm extends Vue {
        @Prop({ default: '', required: true }) private username!: string
        @Prop({ default: {} }) private formInfo!: any

        $refs: any = {
            saveForm: HTMLFormElement,
            idCardFont: HTMLInputElement,
            idCardBack: HTMLInputElement,
            businessLicense: HTMLInputElement,
            accountLicense: HTMLInputElement,
            bankFinancing: HTMLInputElement,
            creditReport: HTMLInputElement
        }

        private saveForm: any = {
            type: 1,
            organizationProperty: 0,
            coreCompanyId: '',
            coreCompanyName: '',
            status: 1,
            organizationName: '',
            organizationContract: '',
            email: '',
            organizationContractPhone: '',
            socialCreditCode: '',
            location: '',
            threeinone: 1,
            idCardFont: '',
            idCardBack: '',
            businessLicense: '',
            accountLicense: '',
            bankFinancing: '',
            creditReport: ''
        }

        private coreCompanys: any = []  //关联企业列表

        get statusDisabled():boolean {
            return  this.saveForm.organizationId ? true : false
        }

        get isPersonal(): boolean {
            return this.saveForm.organizationProperty === 0 ? true : false
        }

        get typeArray(): any[] {
            return this.saveForm.organizationProperty == 0 ? publicData.organizationTypes : publicData.personalTypes
        }

        private setForm(data: any) {
            this.saveForm = data
        }

        private typeDisabled: boolean = false

        private validate: boolean = false

        private rules:any = {
            type: [
                { required: true, message: '请选择机构类型', trigger: 'change' }
            ],
            organizationProperty: [
                { required: true, message: '请选择机构属性', trigger: 'change' }
            ],
            status: [
                { required: true, message: '请选择机构类型', trigger: 'change' }
            ],
            organizationId: [
                { required: true, message: '请输入机构ID', trigger: 'blur'}
            ],
            organizationName: [
                { required: true, message: '请输入机构名称', trigger: 'blur'}
            ],
            organizationContract: [
                { required: true, message: '请输入机构联系人名称', trigger: 'blur'}
            ],
            organizationContractPhone: [
                {required: true, message: '请输入手机号', trigger: 'blur'},
                {validator: validateMobile, trigger: 'blur'}
            ],
            coreCompanyId: [
                { required: true, message: '请选择关联企业', trigger: 'change' }
            ],
            email: [
                { required: true, message: '请输入邮箱', trigger: 'blur'},
                { type: 'email', message: '请输入正确邮箱', trigger: 'blur'}
            ],
            socialCreditCode: [
                { required: true, message: '请输入社会信用代码', trigger: 'blur'}
            ],
            location: [
                { required: true, message: '请输入机构地址', trigger: 'blur' }
            ],
            threeinone: [
            { required: true, message: '请选择是否三证合一', trigger: 'blur' }
            ],
            enterpriseRegistNo: [
                { required: true, message: '请输入企业登记号', trigger: 'blur' }
            ],
            idCardFont: [
                { required: true, message: '请选择文件' }
            ],
            idCardBack: [
                { required: true, message: '请选择文件' }
            ],
            businessLicense: [
                { required: true, message: '请选择文件' }
            ]
        }

        private changeCore(val: any){
            this.saveForm.coreCompanyName = this.coreCompanys.filter(item => item.id === val)[0].organizationName
        }

        private getSaveForm (){
            //机构属性为0时才需要上传凭证校验
            if(this.saveForm.organizationProperty === 0){
                //设置身份证正面文件file
                if(this.$refs.idCardFont.getFile().hasOwnProperty('url')){
                    //清除校验
                    this.$refs.idCardFontItem.clearValidate()
                    this.rules.idCardFont = []
                    this.saveForm.idCardFont = this.$refs.idCardFont.getFileUrl()
                }
                //设置身份证反面文件file
                if(this.$refs.idCardBack.getFile().hasOwnProperty('url')){
                    //清除校验
                    this.$refs.idCardBackItem.clearValidate()
                    this.rules.idCardBack = []
                    this.saveForm.idCardBack = this.$refs.idCardBack.getFileUrl()
                }
                //设置营业执照文件file
                if(this.$refs.businessLicense.getFile().hasOwnProperty('url')){
                    //清除校验
                    this.$refs.businessLicenseItem.clearValidate()
                    this.rules.businessLicense = []
                    this.saveForm.businessLicense = this.$refs.businessLicense.getFileUrl()
                }
                //开户许可证
                this.saveForm.accountLicense = this.$refs.accountLicense.getFileUrl()
                this.saveForm.bankFinancing = this.$refs.bankFinancing.getFileUrl()
                this.saveForm.creditReport = this.$refs.creditReport.getFileUrl()
            }
            this.$refs.saveForm.validate((valid: boolean) => {
                this.validate = valid
            })
        }
        private clearForm(){
            this.$refs.saveForm.resetFields()
        }

    }
</script>

<style scoped>
    .demo-saveForm{
        width: 90%;
        margin: 0 auto;
    }
</style>
