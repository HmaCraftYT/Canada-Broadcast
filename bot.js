const Discord = require('discord.js');
const client = new Discord.Client();
var prefix ="-"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
   var prefix="-"
 client.on("message", message => {

            if (message.content.startsWith(prefix + "bca")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
var prefix ="-"
client.on("message", message => {

            if (message.content.startsWith(prefix + "bco")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
var prefix ="-"
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
 ❖ -bco <message> ➾ message online members in server
 ❖ -bca <message> ➾ message all members in server
╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝
❖ *id ➾ your id
❖ *ping ➾ to see ping
❖ *bot ➾ bot informations 

`);

    }
});
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('+ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
client.on("message", msg => {
    var prefix = "-";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});
client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``this Premium Bot`` ')
            .addField('``سرعة البوت 📡``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``الرامات المستخدمة ☄️``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('`` السيرفرات🏢``', [client.guilds.size], true)
            .addField('``الشنلات💻``' , `[ ${client.channels.size} ]` , true)
            .addField('``اعضاء السيرفر 👨‍👨‍👧‍👧``' ,`[ ${client.users.size} ]` , true)
            .addField('``SYSTEM Bot اسمي هوا📇``' , `[ ${client.user.tag} ]` , true)
            .addField('``الايدي تبعي ☑️``' , `[ ${client.user.id} ]` , true)
			      .addField('``امر تشغيلي ➡️``' , `[ + ]` , true)
			      .addField('``الغه التي  تبرمجت بها ☎️``' , `[ Java Script ]` , true)
			      .setFooter('By | 🔥n3k4a & baron🔥 ')
    })
}
});
client.login(process.env.BOT_TOKEN);
