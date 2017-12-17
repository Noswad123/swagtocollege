const express=require('express');
const app =express();
app.user(express.static(_dirname+'/public'));
app.listen(process.env.PORT||8080);

app.get('/*', function(req,res){

res.sendFile(path.join(_dirname+'/dist/index.html'));

})