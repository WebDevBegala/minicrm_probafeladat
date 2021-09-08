const StoreDetail = require('../database/models/store')

exports.get_stores = (req, res) => {
    const { id } = req.query
    StoreDetail.findOne({'id':Number(id)}, '-_id').then((result) => {
        res.json(result)
    })
}
