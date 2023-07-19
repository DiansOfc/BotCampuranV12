const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62895328298685','62895322695343']// no own
global.thumb = fs.readFileSync('./rzlmodz.jpg')
global.creAtor = "62895328298685@s.whatsapp.net" //Jangan Ganti Tar Error
global.ttname = 'ZiroyHost'
global.packname = 'META-BOTZ⚡'
global.author = 'BY DiansHost'
global.sessionName = 'session' // nama session
global.delayy = 500;
global.domain = 'https://panel.arapanel.cfd' // Isi Domain Lu
global.apikey = 'ptla_28ru0Jkzkox0eQTussnfqzxKJMJ6bYGOX6JkBUHCwrR' // Isi Apikey Plta Lu
global.capikey = 'ptlc_rvtf4WHW2HqZvrEODCWKgRfpGmKP47K6edGuLwn5Vx7' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})