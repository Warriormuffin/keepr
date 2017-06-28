let Keep = require('../models/keep')

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
      Keep.find({public: true})
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
      debugger
      let action = "Update keep view count"
      Keep.findOne({_id: req.body._id})
        .then(keep => {
          debugger
          keep.viewCount += 1;
          keep.save();
          res.send(handleResponse(action, keep))
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