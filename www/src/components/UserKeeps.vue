<template>
  <div class="userkeeps">
    <div class="row" id="keep">
      <br>
      <div class="card-columns">
        <div class="keep-loop" v-for="keep in myKeeps">
          <div class="card text-center">
            <img id="keep-img" class="card-img-top img-fluid" alt="Card image cap" :src="keep.imgUrl" width="100%">
            <div class="card-block">
              <p class="countBar"> K {{keep.keepCount || 0}} <i class="fa fa-share" aria-hidden="true"> {{keep.shareCount || 0}}</i> <i class="fa fa-eye"
                  aria-hidden="true"> {{keep.viewCount || 0}}</i></p>
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
export default {
  name: 'userkeeps',
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch("getMyKeeps")
  },
  computed:{
    myKeeps(){
      return this.$store.state.myKeeps
    }
  },
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>