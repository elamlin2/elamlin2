var express = require('express'),
  router = express.Router(),
  logger = require('../../config/logger'),
moongoose = require('mongoose'),
Todo = mongoose.model('Todo');

module.exports = function (app, config) {
	app.use('/api', router);
    
    router.get('/todo').get(function(req, res, next){
        logger.log('Get all users', 'verbose');
        router.post('/todo', function (req, res, next) {
      logger.log('Create todo', 'verbose');
     
      var todo = new Todo(req.body);
      user.save()
      .then(result => {
          res.status(201).json(result);
      })
      .catch( err => {
         return next(err);
      });
    })

    });
    router.get('/todo/:todoid').get(function(req, res, next){
        logger.log('Get todo', 'verbose');
        var query = User.find()
          .sort(req.query.order)
          .exec()
          .then(result => {
               if(result && result.length) {
              res.status(200).json(result);
          } else {
              res.status(404).json({message: 'No todo'});
          }
          })
          .catch(err => {
            return next(err);
          });
      })
      router.route('/todo/:todoId').get(function(req, res, next){
                logger.log('Get todo ' + req.params.userId, 'verbose');
                User.findById(req.params.userId)
                    .then(user => {
                        if(user){
                            res.status(200).json(user);
                        } else {
                            res.status(404).json({message: "No todo found"});
                        }
                    })
                    .catch(error => {
                        return next(error);
                    });
            }); 
        router.route('/todo/:todoId').put(function(req, res, next){
                logger.log('Update todo ' + req.params.userId, 'verbose');
                User.findOneAndUpdate({_id: req.params.userId}, 		req.body, {new:true, multi:false})
                    .then(user => {
                        res.status(200).json(user);
                    })
                    .catch(error => {
                        return next(error);
                    });
            }); 
            router.route('/todo/:todoId').delete(function(req, res, next)
                logger.log('Delete todo ' + req.params.todoId, 'verbose');
                User.remove({ _id: req.params.userId })
                    .then(user => {
                        res.status(200).json({msg: “Todo Deleted"});
                    })
                    .catch(error => {
                        return next(error);
                    });
            });