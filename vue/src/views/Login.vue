<template>
    <el-form ref="form" :model="form" label-width="80px"  :rules="rules" class="login-lo">
        <h1 class="login-title">欢迎登录</h1>
    <el-form-item label="用户名" prop="name" >
        <el-input v-model="form.name"  ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.pass"    autocomplete="off"></el-input>
     </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>   
    </el-form-item>
    </el-form>
</template>
<script>
 
export default {
    name:"Login",
     data() {
         var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '', 
          pass:'' ,
          checkPass:''      
        },
        
        rules:{
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
             pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
        }
      }
    },
    methods: {
      submitForm(formName) {
          var vm=this
            vm.$router.push('/Home')
         /*this.$refs[formName].validate((valid) => {
          if (valid) {
            //发送axios请求
            this.axios(
                {
                    method:'post',
                    url:"",
                    data:{
                        name:'xx',
                       // pass:this.data.pass 注意这里不能直接用this.
                       pass:vm.form.pass
                    }
                }
            ).then(function(resp){
                console.log(resp);
            });
            //跳转。 js。
            vm.$router.push('/Home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });*/
      }
    }
}
</script>
<style scoped>
    .login-lo{
        width: 500px;
        margin:100px auto;
        border: 1px solid blue;
        padding: 20px 50px  20px 30px;
        box-shadow:  0px 0px 20px;

    }
    .login-title{
        text-align: center;
        margin: 40px;
    }

</style>