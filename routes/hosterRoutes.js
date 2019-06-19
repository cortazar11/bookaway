const mongoose=require('mongoose');
const moment= require('moment');

const Hoster=mongoose.model('hosters');

module.exports= app=>{
    app.post('/api/hosters',(req,res)=>{
            const {hostname,hostdirection,description,typehelp,
                culturalexchange, help, language, accommodation, hoursexpected,country,dates:{startDate,endDate}}=req.body;

            const hoster1= new Hoster({
                country,
                dates:{
                    startDate,
                    endDate
                },
                hostname,
                hostdirection,
                description,
                typehelp,
                culturalexchange,
                help,
                language,
                accommodation,
                hoursexpected,
                dateSent: Date.now()
            })

            hoster1.save()

            res.send('O.K. Well Done!. Your data is saved')
    })

    

    app.post('/api/hostersList',async (req,res)=>{
        
           const hosters= await Hoster.find({country:req.body.country})
                .where('dates.startDate').lte(moment(req.body.dates.startDate))
                .where('dates.endDate').gte(moment(req.body.dates.endDate)).select()
                
            res.send(hosters)
    })

    app.get('/api/hosters/:id',async (req,res)=>{
            const hoster= await Hoster.findById(req.params.id)
            console.log(hoster)
            res.send(hoster)
    })
}