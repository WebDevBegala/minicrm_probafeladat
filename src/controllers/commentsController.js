const Comment = require('../database/models/comment')

exports.create_new_comments = (req, res) => {
    Comment.create(req.body).then(() => {
        res.send('Sikeres dokumentum hozzáfűzésas')
    })
}
exports.get_comments = (req, res) => {
    const { id } = req.query;
    Comment.find({'storeId': Number(id)}, ['-_id','-__v']).then((result) => {
        res.json(result)
    })
}