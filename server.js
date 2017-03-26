let express=require('express');
let Movie=require('./model');
let path=require('path');
let app=express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.join('node_modules')));
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
});
app.listen(9090)