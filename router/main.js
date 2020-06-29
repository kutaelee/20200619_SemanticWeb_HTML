module.exports = function(app)
{
 
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/page/:name',function(req,res){
        console.log(req.params.name);
        res.render('/views/'+req.params.name);
    }); 
}