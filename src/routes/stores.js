const router = require('express').Router();
const StoreController = require('../controllers/storeController')
router.get('',(req,res)=>{
    StoreController.get_stores(req,res);
})

module.exports = router