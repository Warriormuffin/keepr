<template>
  <div class="hello">
    <navbar></navbar>
    <h1>Welcome to Keepr</h1>
    <p>Get Started</p>
    <ul>
      <li><router-link to="login">Login</router-link></li>
      <li><router-link to="register">Register</router-link></li>
    </ul>
    <hr>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
