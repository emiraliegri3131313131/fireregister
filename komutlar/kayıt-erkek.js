const Discord = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['783839815337508914'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const erkekrol = message.guild.roles.cache.find(r => r.id === '791442064780951593') //erkekrol ismini değişmeyin
const erkekrol2 = message.guild.roles.cache.find(r => r.id === '791442065593991198')
const erkekrol3 = message.guild.roles.cache.find(r => r.id === '791619990024617987')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '791442067858391060')
const kayıtsız2 = message.guild.roles.cache.find(r => r.id === '796508615174651945')

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(`Bir kullanıcı belirt.`)
if(member.id === message.author.id) return message.channel.send('Kendini kayıt edemezsin.')
if(member.id === client.user.id) return message.channel.send('Botu kayıt edemezsin.')
if(member.id === message.guild.OwnerID) return message.channel.send('Sunucu sahibini kayıt edemezsin.')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu kullanıcı sizden üst/aynı pozsiyondadır.`)
  
if(!args[0]) return message.channel.send('Bir kullanıcı belirt')  
let timereplace = args[0];
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat') 
 datab.add('case', 1)
 const sadxstg = await datab.fetch('case')
 var tarih = new Date(Date.now())
 var tarih2 = ms(timereplace)
 var tarih3 = Date.now() + tarih2 + 1296000000
 let ay = moment(Date.now()+1296000000).format("MM")
 let gün = moment(Date.now()+1296000000).format("DD")
 let saat = moment(Date.now()+1296000000).format("HH:mm:ss")
 let yıl = moment(Date.now()+1296000000).format("YYYY")
 let kayıtsaat = `\`${gün} ${ay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${saat} (${yıl})\``
 
let tag = 'ᶠᶦʳᵉ' 
let name = args[1]
if(!name) return message.channel.send('Bir isim / nick belirt.')
  
datab.add(`yetkili.${message.author.id}.erkek`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)
//
member.setNickname(`${name} '${tag}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.add(erkekrol3)
member.roles.remove(kayıtsız)
member.roles.remove(kayıtsız2)

const embed = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`
• ${member}, Adlı Kullanıcı Kayıt Oldu ${erkekrol}, ${erkekrol2} ve ${erkekrol3} Rolleri Verildi ve İsmi ${name} '${tag} Olarak Güncellendi.`) 
.setFooter(`.isimler @dex/602797560049958922 komudunu kullanarak kayıt geçmişine bakabilirsiniz`)
.setColor("0x2f3136")
message.channel.send(embed)


  
datab.push(`isim.${message.guild.id}`, {
  userID: member.id, 
  isim: name,
  role: erkekrol.id,
  tag: tag
})

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek', 'e', 'boy', 'man'],
    permLevel: 0
  }

  exports.help = {
    name: 'erkek',
    description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.",
    usage: '.erkek @etiket/id İsim Yaş'
  }