const Comment = require('../database/models/comment')

exports.create_new_comments = (req, res) => {
    Comment.create(req.body).then(() => {
        res.send('Sikeres dokumentum hozzáfűzés')
    })
}
exports.get_comments = (req, res) => {
    const { storeId } = req.body;
    console.log('RUNNED',storeId)
    Comment.find({ 'storeId': storeId }, '-id').then((result) => {
        res.json(result)
    })
}