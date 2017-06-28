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
        <div class="keep-loop">
          <div class="card text-center">
            <img id="keep-img" class="card-img-top img-fluid" alt="Card image cap" width="100%">
            <div class="card-block">
              <p class="countBar"> K
                <i class="fa fa-share" aria-hidden="true"> </i>
                <i class="fa fa-eye" aria-hidden="true"> </i>
              </p>
              <h4 class="card-title"></h4>
              <div id="keep-buttons" class="btn-group" role="group" aria-label="Basic example">
                <button id="keep-button" type="button" class="btn btn-secondary">K</button>
                <button id="share-button" type="button" class="btn btn-secondary">
                  <i class="fa fa-share" aria-hidden="true"></i>
                </button>
                <button id="view-button" type="button" class="btn btn-secondary">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button  id="delete-button" type="button" class="btn btn-danger">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
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
    // this.$store.dispatch('getVaultById', this.$route.params.vaultId)
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

</style>