<template>
  <div class="homepage">
    <navbar></navbar>
    <img src="./../assets/logo.jpg">
    <div class="row" id="keep">
      <div class="keep-loop">
        <div class="card-columns">
          <div class="card">
            <img class="card-img-top img-fluid" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Card title that wraps to a new line</h4>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  name: 'hello',
  data() {
    return {

    }
  },
  computed: {
    allKeeps(){
      return this.$store.state.keeps
    }
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

img {
  width: 60px;
  text-align: center;
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
