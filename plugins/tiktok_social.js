import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*γ πΉ α΄ Ιͺ α΄ α΄ α΄ α΄ γ*
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
ββββββββββ βγ€βγ€ ββγ€ β·γ€β» ββββββββββ
*Nickname:* ${p.dev}
*Description:* ${p.description}
*Url:* ${p.url}
_Β©Nanabotzπ­_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['ttksocial'].map(v => v + ' <url>')

handler.command = /^(ttksocial)$/i
export default handler
