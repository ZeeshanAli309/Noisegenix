const nodemailer=require('nodemailer')

//create transporter
module.exports=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:2419,
    secure:true,
    service:'gmail',
    auth:{
        user:"zeeshanalihj@gmail.com",
        pass:"sijbmxatrmmvlfod"
    }
})
