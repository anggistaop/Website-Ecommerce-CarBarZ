module.exports ={
    home(req,res){
        res.render("home",{
            url: 'http://localhost:5051/',
            userName: req.session.username,
        });
    }
}