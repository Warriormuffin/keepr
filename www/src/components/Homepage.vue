<template>
  <div class="homepage">
    <navbar></navbar>
    <br>
    <div class="col-lg-12">
      <div class="animated bounceInRight input-group">
        <form id="search-form" @submit.prevent="searchByTag">
        <input type="text" v-model="userSearch" class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
          <button id="searchButton" class="btn btn-secondary" type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </span>
        </form>
      </div>
    </div>
    <div class="row" id="keep">
      <br>
      <div class="card-columns animated bounceInUp">
        <div class=" keep-loop" v-for="keep in allKeeps">
          <div class="card text-center">
            <img id="keep-img" class="card-img-top img-fluid" alt="Card image cap" :src="keep.imgUrl" width="100%">
            <div class="card-block">
              <p class="countBar"> K {{keep.keepCount || 0}}
                <i class="fa fa-share" aria-hidden="true"> {{keep.shareCount || 0}}</i>
                <i class="fa fa-eye" aria-hidden="true"> {{keep.viewCount || 0}}</i>
              </p>
              <h4 class="card-title">{{keep.title}}</h4>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button id="keep-button" type="button" @click="setActiveKeep(keep)" data-toggle="modal" data-target="#keepModal" class="btn btn-secondary">K</button>
                <button id="share-button" type="button" class="btn btn-secondary">
                  <i class="fa fa-share" aria-hidden="true"></i>
                </button>
                <button id="view-button" type="button" @click="viewKeepSource(keep)" class="btn btn-secondary">
                  <a :href="keep.articleLink" target="_blank">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <keep-modal></keep-modal>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import KeepModal from "@/components/KeepModal"
export default {
  name: 'hello',
  data() {
    return {
      userSearch: ""
    }
  },
  mounted() {
    this.$store.dispatch('getKeeps')
  },
  computed: {
    allKeeps() {
      return this.$store.state.keeps
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    viewKeepSource(keep) {
      this.$store.dispatch('addView', keep)
    },
    setActiveKeep(keep) {
      this.$store.dispatch('getActiveKeep', keep)
    },
    searchByTag() {
      debugger
      let userSearch = this.userSearch
      this.$store.dispatch('searchByTag', userSearch)
    }
  },
  components: {
    Navbar,
    KeepModal
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

.card {
  border: none;
}

.card:hover {
  background-color: #ddd;
}

.countbar {
  font-weight: bold;
}

#searchButton {
  background-color: #fc0095;
  color: white;
}

#search-form{
  width: 100%;
}

.form-control{
  width: 100%;
}


#keep-button {
  background-color: #fc0095;
  color: white;
  margin: 4px;
}

#share-button {
  background-color: black;
  color: white;
  margin: 4px;
}

#view-button {
  background-color: purple;
  color: white;
  margin: 4px;
}

#view-button a {
  color: white;
}



/*.card-columns {
    media-breakpoint-only(sm) {
    column-count: 1;
  }*/
</style>