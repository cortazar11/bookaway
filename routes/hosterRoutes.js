const mongoose=require('mongoose');
const moment= require('moment');

const Hoster=mongoose.model('hosters');

module.exports= app=>{
    app.post('/api/hosters',(req,res)=>{
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

            hoster1.save()

            res.send('O.K. Well Done!. Your data is saved')
    })

    

    app.post('/api/hostersList',async (req,res)=>{
           const hosters= await Hoster.find({country:req.body.country})
                .where('dates.startDate').gte(moment(req.body.dates.startDate))
                .where('dates.endDate').lte(moment(req.body.dates.endDate)).select('-country -dates')
        
            res.send(hosters)
    })
}