const fs = require('fs')

exports.groupResponse_Remove = async (rzlmodz, update) => {
try {
ppuser = await rzlmodz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await rzlmodz.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await rzlmodz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await rzlmodz.sendMessage(
update.id, 
{
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Leave To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Sayonara👋 @${num.split("@")[0]}\n││ \n└────────────┾•ิ.•┽`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (rzlmodz, update) => {
try {
ppuser = await rzlmodz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await rzlmodz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await rzlmodz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await rzlmodz.sendMessage(
update.id, 
{ 
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Welcome To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Haii👋 @${num.split("@")[0]}\n││ \n││——[ *ɪɴᴛʀᴏ* ]——\n││ 📛 : _@${num.split("@")[0]}_\n││ 🔢 : _${num.split("@")[0]}_\n││ 🗿🗿ADMIN: ᭖͜͡𝐂𝐑𝐀𝐙𝐘 𝐇𝐎𝐒𝐓𝐈𝐍𝐆🌾\n││ 🏅 : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_\n|| 📄 *Deskripsi :*
${metadata.desc ? metadata.desc : 'Tidak ada deskripsi'} ||└────────────┾•ิ.•┽`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (rzlmodz, update) => {  
const metadata = await rzlmodz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await rzlmodz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await rzlmodz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (rzlmodz, update) => {  
const metadata = await rzlmodz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await rzlmodz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await rzlmodz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}