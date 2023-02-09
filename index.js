const { Telegraf } = require('telegraf');
const express = require("express");
const app = express();
const { LocalStorage } = require('node-localstorage');
const bot = new Telegraf("xx975xxxxx:xxxxxxxgdvxxxxxddxxxxxxxx");
const GAME_SHORT_NAME = "mygame001";


bot.command("start", (ctx) => {
  bot.telegram.sendGame(ctx.message.from.id,GAME_SHORT_NAME)
});



bot.on("callback_query", (query) => {
 
  let cq = query.update.callback_query;

  let gameUrlWithParams = 'https://gameurl.com/';

  if(cq.game_short_name &&  cq.game_short_name === GAME_SHORT_NAME){
    bot.telegram.answerCbQuery(cq.id,false,{url:gameUrlWithParams})
  }else{
    bot.telegram.answerCbQuery(cq.id,"Sorry invalid game");
  }

  
});

bot.launch();

app.listen(5000,function(){
  console.log("runnn");
})






