let handler  = async (m, { conn }) => {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": ` κͺΆπππ₯π’ππ’ππππ―βΏ»κ«`,
"groupName": `κͺΆπππ₯π’ππ’ππππ―βΏ»κ«`,
"caption": `κͺΆπππ₯π’ππ’ππππ―βΏ»κ«`
 }
   }
}

await conn.reply(m.chat, `κͺΆRYANβΏ»κ«`, main)
}
handler.help = ['buggc']
handler.tags = ['bugmenu']
handler.command = /^buggc$/

handler.owner = true

export default handler