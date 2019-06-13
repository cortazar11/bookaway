const mongoose=require('mongoose');

const Hoster=mongoose.model('hosters');

module.exports= app=>{
    app.post('/api/hosters',(req,res)=>{
        console.log('req.body: '+JSON.stringify(req.body))
            const {hostname,country,dates:{startDate,endDate}}=req.body;

            const hoster1= new Hoster({
                country,
                dates:{
                    startDate,
                    endDate
                },
                hostname,
                dateSent: Date.now()
            })

            hoster1.save(function(err){
                    if(err) throw err
                    console.log('saved to hosters collection')
            })

            res.send('O.K. Well Done!. Your data is saved')
    })
}