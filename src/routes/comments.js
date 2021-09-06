const router = require('express').Router();
const CommentsController = require('../controllers/commentsController')
router.get('',(req,res)=>{
    console.log('RUNNED');
    CommentsController.get_comments(req,res)
})
router.post('',(req,res)=>{
    CommentsController.create_new_comments(req,res)
})
module.exports = router