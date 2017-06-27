<template>
  <div class="uservaults">
    <div class="row">
      <div class="card-columns">
        <div v-for="vault in myVaults">
          <div class="card text-center">
            <div class="card-block">
              <h4 class="card-title">{{vault.title}}</h4>
              <p class="card-text">{{vault.description}}</p>
              <div id="keep-buttons" class="btn-group" role="group" aria-label="Basic example">
                <button id="view-button" type="button" class="btn btn-secondary">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button id="delete-button" type="button" class="btn btn-danger">
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
  computed: {
    myVaults() {
      return this.$store.state.myVaults
    }
  },
  methods: {},
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
</style>