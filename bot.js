const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     STG
client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});


client.on("guildMemberAdd", member => {
  member.roles.add('791442067858391060'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});
client.on("guildMemberAdd", member => {
  member.roles.add('796508615174651945'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});






client.on("guildMemberAdd", member => {  
  const kanal = member.guild.channels.cache.find(r => r.id === "791442107927232593");
    
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const gecen = moment.duration(kurulus).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = '<a:carpixd:791446989958545428>'
  if (kurulus > 1296000000) kontrol = '<a:tikcik:791446947252535326>'
  moment.locale("tr");
  kanal.send(":tada: Sunucumuza Hoş Geldin ! <@" + member + "> \n\n Hesabın "+ gecen +" Önce Oluşturulmuş "+kontrol+" \n\n Sunucu kurallarımız <#791442109713481748> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\n Seninle beraber " + member.guild.memberCount + " kişi olduk , Tagımızı alarak bizlere destek olabilirsin , Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor <@&791442056802205747> seninle ilgilenecektir  İyi eğlenceler !")
  });
  
//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     STG



//------------------------------------------------------------------------------------------------------------------------------------\\

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "KAYITSIZ ROL ID") 
     var rol = member.guild.roles.cache.get("ŞÜPHELİ ROL ID") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//------------------------------------------------------------------------------------------------------------------------------------\\


//-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('791441841715281983'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var tag = "ᶠᶦʳᵉ"; // Buraya Ekip Tag
  var tagrol = "791442059881873459"; // Buraya Ekip Rolünün ID
  var erkek1 = "791442064780951593";
  var erkek2 = "791442065593991198";
  var erkek3 = "791619990024617987";
  var kadın1 = "791442062474084362";
  var kadın2 = "791442063429206076";
  var kadın3 = "791619974510673951";
  var logKanali = "796506141274144778"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(tag) && !uye.roles.cache.has(tagrol)) {
    try {
      await uye.roles.add(tagrol);
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(tag) && uye.roles.cache.has(tagrol)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek3).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın3).position));
      //
            await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek3).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın3).position));
      //
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(erkek3).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın1).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın2).position));
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(kadın3).position));      
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${tag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
    } catch(err) { console.error(err) };
  };
});

//----------------------TAG-KONTROL----------------------\\     

client.on("guildMemberAdd", member => {
  let sunucuid = "791441841715281983"; //Buraya sunucunuzun IDsini yazın
  let tag = "ᶠᶦʳᵉ"; //Buraya tagınızı yazın
  let rol = "791442059881873459"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
      .setTimestamp()
     client.channels.cache.get('796506141274144778').send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     

client.on("ready", async function() {
const voiceChannel = "791442111982600192"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})
