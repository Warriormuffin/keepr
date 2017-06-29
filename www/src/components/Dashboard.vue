<template>
  <div class="dashboard">
    <navbar></navbar>
    <div class="row animated bounceInRight">
      <div id="dashboard-info" class="col-12">
        <p class="dashboard-info">Welcome {{user.username}}, Here you can post your own keeps, manage your vaults, and share with the world!</p>
      </div>
    </div>
    <div id="dashboard-top" class="row animated bounceInUp">
      <div class="col-12">
        <h1 class="dashboard-heading">My Dashboard <button id="dashboard-buttons" @click="toggleVault" type="button" class="btn btn-secondary">V</button> <button id="dashboard-buttons"
            @click="toggleKeep" type="button" class="btn btn-secondary">K</button> <button @click="toggleForm" id="dashboard-buttons" type="button" class="btn btn-secondary"><i v-if="toggle" class="fa fa-chevron-up" aria-hidden="true"></i><i v-if="!toggle" class="fa fa-chevron-down" aria-hidden="true"></i></button></h1>
      </div>
    </div>
    <div v-if="toggle" id="thing" class="row animated bounceInUp">
      <div class="col-8 offset-2">
        <br>
        <form v-if="this.showKeep" id="keep-form" @submit.prevent="createKeep" role="form" style="display: block;">
          <div class="form-group">
            <div class="input-group margin-bottom-sm">
              <span class="input-group-addon"><i class="fa fa-file-o" aria-hidden="true"></i></span>
              <input type="text" name="title" v-model="title" id="title" tabindex="1" class="form-control" placeholder="Title" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-picture-o" aria-hidden="true"></i></span>
              <input type="text" name="imgurl" v-model="imgUrl" id="imgurl" tabindex="2" class="form-control" placeholder="ImgUrl"
                required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-external-link" aria-hidden="true"></i></span>
              <input type="text" name="article-link" v-model="articleLink" id="article-link" tabindex="2" class="form-control" placeholder="Link to Article"
                required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-tags" aria-hidden="true"></i></span>
              <input type="text" name="tags" v-model="tags" id="tags" tabindex="2" class="form-control" placeholder="Tags"
                required>
            </div>
            <input type="checkbox" v-model="this.isPublic" tabindex="3" class="" name="private" id="private" checked>
            <label for="remember">Mark as Public?</label>
          </div>
          <div class="form-group">
            <div id="button-row" class="row">
              <div class="col-sm-4 .offset-sm-2">
                <button type="submit" id="keep-button" class="btn btn-primary btn-sm btn-block">Keep</button>
              </div>
              <div class="col-sm-4 .offset-sm-2">
                <button type="button" id="reset-button" class="btn btn-primary btn-sm btn-block">Reset</button>
              </div>
            </div>
          </div>
        </form>
        <form v-if="this.showVault" id="keep-form" @submit.prevent="createVault" role="form" style="display: block;">
          <div class="form-group">
            <div class="input-group margin-bottom-sm">
              <span class="input-group-addon">
                          <i class="fa fa-envelope-o fa-fw"></i>
                        </span>
              <input type="text" name="title" v-model="title" id="title" tabindex="1" class="form-control" placeholder="Title" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
              <input type="text" name="description" v-model="description" id="description" tabindex="2" class="form-control" placeholder="Description"
                required>
            </div>
          </div>
           <div class="form-group">
            <div id="button-row" class="row">
              <div class="col-sm-4 .offset-sm-2">
                <button type="submit" id="keep-button" class="btn btn-primary btn-sm btn-block">Keep</button>
              </div>
              <div class="col-sm-4 .offset-sm-2">
                <button type="button" id="reset-button" class="btn btn-primary btn-sm btn-block">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <keep-modal></keep-modal>
    <user-keeps v-if="showKeep"></user-keeps>
    <user-vaults v-if="showVault"></user-vaults>
  </div>




</template>


<script>
  import Navbar from "@/components/Navbar"
  import UserKeeps from '@/components/UserKeeps'
  import UserVaults from "@/components/UserVaults"
  import KeepModal from "@/components/KeepModal"
  export default {
    name: 'dashboard',
    data() {
      return {
        title: "",
        imgUrl: "",
        articleLink: "",
        tags: "",
        description: "",
        showKeep: true,
        showVault: false,
        isPublic: true,
        toggle: true

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      toggleKeep(){
        this.showKeep = true;
        this.showVault = false;
      },
      toggleVault(){
        this.showKeep = false;
        this.showVault = true;
      },
      toggleForm(){

        this.toggle = !this.toggle
      },
      createKeep(){
        //
        // let tagsArr = [];
        // let splitTags = this.tags.split(' ')
        // tagsArr.push(splitTags)
        let newKeep ={
          title: this.title,
          imgUrl: this.imgUrl,
          articleLink: this.articleLink,
          tags: this.tags,
          author: this.user.username,
          keepCount: 0,
          shareCount: 0,
          viewCount: 0,
          isPublic: this.isPublic
        }
          this.title = ""
          this.imgUrl = ""
          this.articleLink = ""
          this.tags = ""

        this.$store.dispatch('createKeep', newKeep)
      },
      createVault(){
        let newVault = {
          title: this.title,
          description: this.description,

        }
        this.$store.dispatch('createVault', newVault)
      }
    },
    components: {
      Navbar,
      UserKeeps,
      UserVaults,
      KeepModal
    }
  }

</script>


<style scoped>
  #dashboard-info {
    margin-top: 30px;
    background-color: #9854bb
  }

  #dashboard-top {
    background-color: #eceeef;
    margin-top: 20px;
  }

  .dashboard-info {
    color: white;
    margin-top: 15px;
    margin-left: 10px;
    font-weight: bolder;
  }

  .dashboard-heading {
    margin-left: 10px;
  }

  #dashboard-buttons {
    margin-bottom: 10px;
    margin-right: 10px;
    float: right;
    background-color: #fc0095;
    color: white;
  }

  h1.dashboard-heading {
    margin-top: 9px;
  }

  div.col-12 {
    border: 1px solid black;
  }
  #thing{
    border: 1px solid black;
  }

</style>