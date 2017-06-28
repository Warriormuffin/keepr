<template>
  <div class="keepmodal">
  <div class="modal fade" id="keepModal" tabindex="-1" role="dialog" aria-labelledby="keepModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Choose Vault</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="row">
      <div  @mouseover="showButton(vault)" @mouseout="hideButton(vault)" v-for="vault in myVaults" class="modal-body col-6">
            <h5 class="vaultId">{{vault.title}} <button @click="addKeepToVault(vault._id)"  id="keep-button" type="button" class="btn btn-secondary">K</button></h5>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<script>
export default {
  name: 'keepmodal',
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch("getMyVaults")
  },
  computed:{
    myVaults() {
      return this.$store.state.myVaults
    },
    getActiveKeep(){
      return this.$store.state.activeKeep
    }
  },
  methods:{
    showButton(vault){
      vault.activeButton = true;
    },
    hideButton(vault){
      vault.activeButton = false;
    },
    addKeepToVault(id){
      debugger
      this.$store.dispatch('addKeepToVault', {vaultId: id, keepId: this.getActiveKeep._id})
    }
  },
  components:{}
}
</script>


<style scoped>
  .vaultId:hover{
    background-color: #eee;
  }
  .vaultId{
    padding: 15px;
  }
   #keep-button{
    background-color: #fc0095;
    color: white;
    float: right;
    margin-top: -8px;
  }
  .col-6{
    padding-top: 0px;
    padding-bottom: 0px;
  }

</style>