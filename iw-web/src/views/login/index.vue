<template>
  <div class="user">
    <div class="user-head">
      <div :class="['user-head__link', `${showType==='login'&& 'active'}`]">
        <el-link class="user-head__btn" :underline="false" @click="toTab('login')"> 登陆 </el-link>
      </div>
      <div :class="['user-head__link', `${showType==='register'&& 'active'}`]">
        <el-link class="user-head__btn" :underline="false" @click="toTab('register')"> 注册 </el-link>
      </div>
    </div>
    <div class="user-content">
      <h2>在线聊天系统</h2>
      <div class="user-content__describe">文字描述</div>
      <template v-if="showType==='login'">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.email" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="user-content__select">
          <el-checkbox v-model="isSaveLoginStatus">记住密码</el-checkbox>
          <el-link :underline="false" style="float:right;">忘记密码?</el-link>
        </div>
        <el-button type="primary" class="user-btn" @click="login">登录</el-button>
      </template>
      <!-- 注册 -->
      <template v-if="showType==='register'">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password_confirmation" placeholder="确认密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="user-content__select">
          <el-checkbox v-model="userRules">同意用户协议</el-checkbox>
        </div>
        <el-button type="primary" class="user-btn">注册</el-button>
      </template>
    </div>
  </div>
</template>

<script>
import { Vue,Component } from 'vue-property-decorator';
import { login } from '@/api/user';
@Component({
  name: 'login'
})
export default class extends Vue {
  //* ======================= 登录状态 =======================
  loginForm = {
    email: '',
    password: ''
  }
  isSaveLoginStatus = false; // 是否记住密码
  login() {
    login(this.loginForm).then((data)=> {
      this.$store.commit('setIsLogin', true);
      this.$router.push({path: '/'})
    });
  }
  //* ======================= 注册状态 =======================
  register = {
    email: '',
    name: '',
    password: '',
    password_confirmation: ''
  }
  userRules = false;

  //* ======================= 类型切换 =======================
  showType = 'login'; //显示类型 
  toTab(showType) {
    this.showType = showType;
  }

}
</script>

<style lang="scss" scoped>
.user {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0 2px 15px rgba(0,0, 0,.15);
  &-head { // Tab切换
    display:flex;
    &__link {
      text-align: center;
      height: 52px;
      width: 300px;
      line-height: 52px;
      box-sizing: border-box;
      border-bottom: 1px solid #d8d8d8;
        &:hover, &.active {
          background: #66B1ff;
          color: #ffffff;
          .user-head__btn {
            color: #ffffff;
          }
        }
      &:first-child {
        border-right: 1px solid #d8d8d8;
      }
    }
    // 连接
    &__btn {
      &.el-link {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }
  &-content {
    width: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    h2 { // 标题
      margin: 0;
      margin-bottom: 10px;
      text-align: center;
    }
    &__describe {
      font-size: 12px;
      color: #AAAAAA;
      text-align: center;
      margin-bottom: 36px;
    }
  }
  // 按钮
  &-btn {
    margin-top: 22px;
    width: 100%;
  }
}
</style>
