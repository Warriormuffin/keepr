let Keep = require('../models/keep')
let Vault = require('../models/vault')

export default {
  getKeepsByCreatorId:{
    path: '/mykeeps',
    reqType: 'get',
    method(req, res, next){
      let action = "Get all keeps associated with a certain user"
      Keep.find({creatorId: req.session.uid})
        .then(keeps => {
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
 getAllPublicKeeps:{
    path: '/publickeeps',
    reqType: 'get',
    method(req, res, next){
      let action = "Get all public keeps"
      Keep.find({private: false})
        .then(keeps => {
          res.send(handleREsponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
   updateKeepViews:{
    path: '/addview',
    reqType: 'put',
    method(req, res, next){
      let action = "Update keep view count"
      Keep.findOne({_id: req.body._id})
        .then(keep => {
          keep.viewCount += 1;
          keep.save();
          res.send(handleResponse(action, keep))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  updateVaultKeepIds: {
    path: '/updatevaultkeepids',
    reqType: "put",
    method(req, res, next){
      debugger
      let action = "Update vault to have added keep id"
      Vault.findOne({_id: req.body.vaultId})
        .then(vault => {
          debugger
          vault.keepIds.push(req.body.keepId)
          vault.save();
          res.send(handleResponse(action, vault))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}





function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }