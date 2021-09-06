const StoreDetail = require('../database/models/store')

exports.get_stores = (req,res) => {
   StoreDetail.find({},'-_id').then((result) => {
       res.json(result)
   })
}
