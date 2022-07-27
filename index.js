require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const blog = require("./model/model")


// connect to DB

// mongoose.connect(process.env.URL, {useNewUrlParser: true})


// check status

// app.get("/", (req, res) => {
//     const connection = mongoose.connection

//     try {

//         connection.on('connection', () => {
//             console.log("connected to DB")
//         }) 
//         connection.once('error', (err) => {
//             res.send(err.message)
//         })
        
//     } catch (dberr) {

//         res.send("app error")
        
//     }




    
// })

// app.listen(4000)



const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, {polling: true})

bot.on("message", async (message) => {

    const chatid = message.chat.id

    // async function save(){

    //     try {

            
    //         const newblog = new blog({
    //             username: message.chat.username,
    //             blogpost: message.text
    //         })

    //         const saveblog = await newblog.save()
            
            
    //     } catch (error) {

    //         console.log("save error", error.message)
            
    //     }


        

    // }

    async function post(){

        newmessage = `Blog By : ${message.chat.username} \n\n ${message.text} \n\n @MyBlog_Post`

        if(message.text){
            bot.sendMessage(chatid, "Blog Posted! \n @MyBlog_Post")
            bot.sendPhoto(process.env.CID, "./Image/blog.png", {caption: newmessage})
            
        }
        
    }



    


    if(message.text == "/start"){
        bot.sendMessage(chatid, "Insert the blog you want to post", {
            "reply_markup": {
                "keyboard": [["/help"]]
            }
        });
        
    } else if (message.text == "/help"){

        bot.sendMessage(chatid, "to post you just have to type the blog and \n automatically it will be posted on @MyBlog_Post \n if there is anything you don't understand or you don't like contact me here @noahark \n you can also contact me if you want to delete/edit your post")

    } else {
        post()
    }



    


    
    


        
        
})
