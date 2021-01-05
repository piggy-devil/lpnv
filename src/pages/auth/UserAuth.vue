<template>
  <div class="login-box">
    <div class="login-box-body">
      <div class="login-logo">
        <img src="/" width="30%" alt="logo" />
      </div>
      <p class="login-box-msg">
        <b>Sistem Informasi Manajemen Organisasi</b>
      </p>
      <fieldset>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input
              type="text"
              name="email"
              placeholder="email"
              class="form-control"
              autofocus="true"
              required="true"
              v-model="email"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
            <input
              type="password"
              name="password"
              placeholder="password"
              class="form-control"
              required="true"
              v-model="password"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button
              type="button"
              class="btn btn-primary btn-block btn-flat"
              @click.prevent="login"
            >
              <i class="fa fa-sign-in"></i> Login
            </button>
            <button
              type="button"
              class="btn btn-primary btn-block btn-flat"
              @click="test"
            >
              <i class="fa fa-sign-in"></i> test
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from '../../components/plugins/axios'
export default {
  methods: {
    login() {
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
            console.log(response, 'login');
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    test() {
        axios.get('/api/users').then(res => {
            console.log(res, 'res');
        }).catch(() => {
            console.log('error');
        });
    }
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
