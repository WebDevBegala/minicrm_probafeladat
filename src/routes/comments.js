const router = require('express').Router();
const CommentsController = require('../controllers/commentsController')
router.get('',(req,res)=>{
    CommentsController.get_comments(req,res);
})
router.post('',(req,res)=>{
    const { author,rating } = req.body;
    if(author && rating && rating > 0) {
            CommentsController.create_new_comments(req,res);
    }
    else {
        res.status(400).send();
    }
})
module.exports = router