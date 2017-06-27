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
    getVaultByCreatorId:{
    path: '/myvaults',
    reqType: 'get',
    method(req, res, next){
      let action = "Get all vaults associated with a certain user"
      Vault.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
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
      Keep.vault({public: true})
        .then(keeps => {
          res.send(handleREsponse(action, keeps))
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