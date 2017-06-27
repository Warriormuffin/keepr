<template>
  <div class="uservaults">
    <div class="row">
      <div v-for="vault in myVaults" class="col-sm-3">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">{{vault.title}}</h3>
            <p class="card-text">{{vault.description}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
    myVaults(){
      return this.$store.state.myVaults
    }
  },
  methods: {},
  components: {}
}
</script>


<style scoped>

</style>