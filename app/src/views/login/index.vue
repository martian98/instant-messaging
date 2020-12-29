<template>
  <div class="user">
    <div class="user-head">
      <div class="user-head__link">
        登录
      </div>
      <div class="user-head__link">
        注册
      </div>
    </div>
    <div class="user-content">
      <h3>在线聊天系统</h3>
      <span>文字描述</span>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
        <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
import { Vue,Component } from 'vue-property-decorator';

@Component({
  name: 'login'
})
export default class extends Vue {
  // 登录状态
  loginForm = {
    username: '',
    password: ''
  }
  

}
</script>

<style lang="scss">
.user {
  
}
</style>
