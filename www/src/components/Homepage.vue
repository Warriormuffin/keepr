<template>
  <div class="homepage">
    <navbar></navbar>
    <img id="logo" src="./../assets/logo.jpg">
    <div class="row" id="keep">
      <div class="card-columns">
        <div class="keep-loop" v-for="keep in allKeeps">
          <div class="card">
            <img id="keep-img" class="card-img-top img-fluid" alt="Card image cap" :src="keep.imgUrl" width="100%">
            <div class="card-block">
              <p> K {{keep.keepCount}} <i class="fa fa-share" aria-hidden="true"> {{keep.shareCount}}</i> <i class="fa fa-eye"
                  aria-hidden="true"> {{keep.viewCount}}</i></p>
              <h4 class="card-title">{{keep.title}}</h4>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button id="keep-button" type="button" class="btn btn-secondary">K</button>
                <button id="share-button" type="button" class="btn btn-secondary"><i class="fa fa-share" aria-hidden="true"></i></button>
                <button id="view-button"  type="button" class="btn btn-secondary"><i class="fa fa-eye"
                  aria-hidden="true"></i></button>
              </div>
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
      allKeeps() {
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

  #logo {
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

  .card {
    border: none;
  }

  .card:hover {
    background-color: #eee;
  }
</style>