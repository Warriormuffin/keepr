<template>
  <div class="navbar">
    <div class="row">
      <nav class="navbar fixed-top navbar-toggleable-sm navbar-light bg-inverse animated bounceInDown">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img class="logo" src="./../assets/logo.jpg" width="50" height="50">
        </a>
        <div class="navbar-collapse collapse" id="collapsingNavbar">
          <ul class="navbar-nav ml-auto">
            <li v-if="this.user == null" class="nav-item">
              <button type="button" data-toggle="modal" data-target="#login-modal" id="login" class="btn btn-secondary btn-sm" @click="toggleLogin">Login</button>
            </li>
            <li v-if="this.user == null" class="nav-item">
              <button type="button" data-toggle="modal" data-target="#login-modal" id="register" class="btn btn-secondary btn-sm" @click="toggleRegister">Register</button>
            </li>
            <li v-if="this.user" class="nav-item">
              <button type="button" id="login" @click="logout" class="btn btn-secondary btn-sm">Logout</button>
            </li>
            <li v-if="this.user" class="nav-item">
                <router-link :to="'/dashboard/' + this.user.username" ><button type="button" id="register" class="btn btn-secondary btn-sm">Dashboard</button></router-link>
            </li>
            <li v-if="this.user" class="nav-item">
              <h1 class="user-username"> Hi, {{user.username}}</h1>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Modal -->
      <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <!--<h5 class="modal-title">Sign In</h5>
                    <h5 class="modal-title">New Account</h5>-->
              <button type="button" id="register" class="btn btn-secondary btn-sm" @click="toggleLogin">Sign In</button>
              <button type="button" id="register" class="btn btn-secondary btn-sm" @click="toggleRegister">New Account</button>
            </div>
            <div class="modal-body">
              <div v-if="loginShowing" class="row">
                <div class="col-lg-12">
                  <form id="login-form" @submit.prevent="login" role="form" style="display: block;">
                    <div class="form-group">
                      <div class="input-group margin-bottom-sm">
                        <span class="input-group-addon">
                          <i class="fa fa-envelope-o fa-fw"></i>
                        </span>
                        <input type="text" name="username" v-model="email" id="email" tabindex="1" class="form-control" placeholder="Email" required>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-key fa-fw"></i>
                        </span>
                        <input type="password" name="password" v-model="password" id="password" tabindex="2" class="form-control" placeholder="Password" required>
                      </div>
                    </div>
                    <div class="form-group text-left">
                      <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                      <label for="remember"> Remember Me</label>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-12 col-sm-offset-3">
                          <button type="submit" id="signin-button" class="btn btn-primary btn-lg btn-block">Sign In</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div v-if="registerShowing" class="row">
                <div class="col-lg-12">
                  <form id="register-form" @submit.prevent="createAccount" role="form" style="display: block;">
                    <div class="form-group">
                      <div class="input-group margin-bottom-sm">
                        <span class="input-group-addon">
                          <i class="fa fa-user-o fa-fw"></i>
                        </span>
                        <input type="text" name="username" v-model="username" id="username" tabindex="1" class="form-control" placeholder="Username" required>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-envelope-o fa-fw"></i>
                        </span>
                        <input type="email" name="email" v-model="email" id="email" tabindex="2" class="form-control" placeholder="Email">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa fa-key fa-fw"></i>
                        </span>
                        <input type="password" name="password" v-model="password" id="password" tabindex="2" class="form-control" placeholder="Password">
                      </div>
                    </div>
                    <div class="form-group text-left">
                      <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                      <label for="remember"> Remember Me</label>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-12 col-sm-offset-3">
                          <button type="submit" id="register-button" class="btn btn-primary btn-lg btn-block">Create Account</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'navbar',
  data() {
    return {
      username: "",
      password: "",
      email: "",
      loginShowing: false,
      registerShowing: false,
      loggedIn: false,
      loggedOut: true
    }

  },
  mounted() {
    this.$store.dispatch('getAuth')
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    toggleLogin() {
      this.loginShowing = true;
      this.registerShowing = false;
    },
    toggleRegister() {
      this.loginShowing = false;
      this.registerShowing = true;
    },
    login() {

      let user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      $('#login-modal').modal('hide')

    },
    createAccount() {

      let newUser = {
        username: this.username.toLowerCase(),
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', newUser)
    },
    logout() {
      this.$store.dispatch('logout')
    }
  },
  components: {}
}

</script>


<style scoped>
li {
  margin-left: 10px;
}

ul {
  text-align: right;
}

#login {
  background-color: black;
  color: white;
}

#register {
  background-color: #fc0095;
  color: white;
  outline: none;
  border-color: #fc0095;
}

#register-button,
#signin-button {
  background-color: #fc0095;
  color: white;
  outline: none;
  border-color: #fc0095;
  height: 50px;
}

.logo {
  margin-left: 10px;
  float: left;
}
.user-username{
  color: whitesmoke;
}
</style>