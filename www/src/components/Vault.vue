<template>
  <div class="vault">
    <navbar></navbar>
    <div class="row">
      <div class="col-6 offset-4">
        <h1>{{getVault.title}}</h1>
      </div>
    </div>
     <div class="row" id="keep">
      <div class="card-columns">
        <div class="keep-loop" v-for="keep in activeKeep">
          <div class="card text-center">
            <img id="keep-img" class="card-img-top img-fluid" alt="Card image cap" :src="keep.imgUrl" width="100%">
            <div class="card-block">
              <p class="countBar"> K {{keep.keepCount || 0}} <i class="fa fa-share" aria-hidden="true"> {{keep.shareCount || 0}}</i> <i class="fa fa-eye"
                  aria-hidden="true"> {{keep.viewCount || 0}}</i></p>
              <h4 class="card-title">{{keep.title}}</h4>
              <div id="keep-buttons" class="btn-group" role="group" aria-label="Basic example">
                <!--<button id="keep-button" type="button" data-toggle="modal" data-target="#keepModal" class="btn btn-secondary">K</button>-->
                <button id="share-button" type="button" class="btn btn-secondary"><i class="fa fa-share" aria-hidden="true"></i></button>
                <button id="view-button"  type="button" class="btn btn-secondary"><i class="fa fa-eye"
                  aria-hidden="true"></i></button>
                  <button id="delete-button" @click="deleteKeep(keep._id)"  type="button" class="btn btn-danger"><i class="fa fa-trash"
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
  name: 'vault',
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('getVaultById', this.$route.params.vaultId)
    this.$store.dispatch('getKeepsByVaultId', this.$route.params.vaultId)
  },
  computed: {
    getVault() {
      return this.$store.state.activeVault
    },
    activeKeep(){
      return this.$store.state.activeKeep
    }
  },
  methods: {},
  components: {
    Navbar
  }
}
</script>


<style scoped>
 #share-button{
    background-color: black;
    color: white;
    margin: 4px;
  }
  #view-button{
    background-color: purple;
    color: white;
    margin: 4px;
  }
  #delete-button{
    color: white;
    margin: 4px;
  }
  .card:hover {
    background-color: #eee;
  }

</style>