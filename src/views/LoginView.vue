<template>
    <div class="login-body">
         <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="80px"
            class="demo-ruleForm"
        >
            <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
            <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
            />
            </el-form-item>
            <el-form-item>
            <el-button class="loginbtn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button class="loginbtn" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs ,ref} from 'vue'
import {LoginData} from '../type/index'
import type { FormInstance } from 'element-plus'
import {useRouter} from 'vue-router'
export default defineComponent({
    setup () {
        const data = reactive(new LoginData())
        const rules = {
            password:[
                {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur',
                },
                {
                    min:3,
                    max:10,
                    message: '密码的位置大于3小于10',
                    trigger: ['blur', 'change'],
                },
            ],
            username:[
                {
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur',
                },
            ]
        }
        //登录
        const ruleFormRef = ref<FormInstance>()
        const router = useRouter()
        const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                console.log(data.ruleForm.username,data.ruleForm.password)
                if(data.ruleForm.username == 'admin' && data.ruleForm.password == '123456'){
                    router.push('/home')
                }else {
                    console.log('账号密码错误')
                }
            } else {
                console.log('error submit!')
                return false
            }
        })
        }
        //重置
        const resetForm=()=>{
            data.ruleForm.username = ''
            data.ruleForm.password = ''
        }
        return {...toRefs(data),rules,resetForm,ruleFormRef,submitForm}
    }
})
</script>

<style lang='scss' scoped>
    .login-body{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url(../assets/login.jpg) no-repeat center center;
        background-size: 100% 100%;
        .demo-ruleForm{
            width: 500px;
            margin:90px auto;
            background-color:#fff;
            padding:30px;
            border-radius: 15px;
        }
        .loginbtn{
            width:48%
        }
    }
</style>