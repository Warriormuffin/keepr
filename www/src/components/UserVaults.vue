<template>
  <div class="uservaults">
    <div class="row">
          <div class="card-deck animated bounceInUp">
          <div v-for="vault in myVaults">
            <div class="card text-center">
              <div class="card-block">
                <h4 class="card-title">{{vault.title}}</h4>
                <p class="card-text">{{vault.description}}</p>
                <div id="keep-buttons" class="btn-group" role="group" aria-label="Basic example">
                  <router-link :to="'/vault/' + vault._id">
                    <button id="view-button" type="button" class="btn btn-secondary">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </button>
                  </router-link>
                  <button @click="deleteVault(vault._id)" id="delete-button" type="button" class="btn btn-danger">
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
export default {
  name: 'uservaults',
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch("getMyVaults")
  },
  computed: {
    myVaults() {
      return this.$store.state.myVaults
    }
  },
  methods: {
    deleteVault(id) {
      this.$store.dispatch('deleteVault', id)
    }

    // goToVault(vault){
    //   this.$store.dispatch('goToVault', vault)
    // }
  },
  components: {}
}
</script>


<style scoped>
#view-button {
  background-color: purple;
  color: white;
  margin: 4px;
}

#delete-button {
  color: white;
  margin: 4px;
}

.card:hover {
  background-color: #eee;
}
</style>