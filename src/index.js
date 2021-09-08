const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const comments_router = require('./routes/comments');
const store_router = require('./routes/stores')
app.use(cors())
app.use(bodyParser.json());
app.use('/comments',comments_router);
app.use('/store',store_router);

app.listen(PORT,()=>{
    console.log('Server application started',PORT);
})