const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"ersini sever",
"!yardım",
"Wirax Gelişmiş Kayıt ve Moderasyon sistemleri."
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity("!yardım", { type: "PLAYING"});
}, 5000);
  console.log(`Bot Hazır | youtube.com/asreaper`);
}