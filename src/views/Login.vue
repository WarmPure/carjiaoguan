<template>
    <div style="width: 100%; text-align: center">
        <!--<Header :status="headerStatus"></Header>-->
        <div style="text-align: center; margin-top: 30px; font-size: 27px; font-weight: bold">机动车违法自助查询系统</div>

        <el-form ref="entity" label-width="180px" :model="entity" :rules="rules" style="width: 90%; margin-top: 30px; text-align: center">
            <el-form-item label='识别号后4位：' prop="bookNumber" >
                <el-input v-model.trim="entity.bookNumber" placeholder="请输入识别号后4位" autofocus="true" maxlength="4" clearable></el-input>
            </el-form-item>

            <el-form-item label='号牌号码：' prop="carNumber">
                <el-input id="id_carNumber" v-model.trim="entity.carNumber" placeholder="请输入号牌号码" maxlength="8" clearable>
<!--                    v-if="licenseKeyboardShow"-->
                    <template slot="prepend">
                        <LicenseKeyboard v-model="entity.carNumber" title="软键盘" />
                    </template>
                </el-input>
            </el-form-item>
        </el-form>

        <el-button type="primary" style="width: 120px" @click="onSelect()">查询</el-button>

<!--        <Footer></Footer>-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Header from '@/components/Header/index.vue'
    import Footer from '@/components/Footer/index.vue'

    @Component({
        name: 'Login',
        components: {
            Header,
            Footer
        }
    })

    export default class Login extends Vue {

        private entity: any = {}

        private licenseKeyboardShow: boolean = false

        private loading = false

        private rules: any = {
            bookNumber: [{required: true, message: '请输入识别号', trigger: 'change'}],
            carNumber: [{required: true, message: '请输入号牌号码', trigger: 'change'}]
        }

        created() {

        }

        mounted() {

        }

        private onSelect() {

        }

        private onCarNumber(e) {
            this.licenseKeyboardShow = true
        }


       // private handleInput(value){
       //      console.log('您输入的车牌为:',value);
       //  }
    }
</script>

<style lang="scss" scoped>

    .customClass {
            width: 1px;
    }

</style>
