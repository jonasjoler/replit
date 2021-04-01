const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.delete();

  if(!args[0]) return message.channel.send('Geef een gebruiker mee.');

  var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));

  if(!member) return channel.message.send('Gebruiker niet gevonden.');

  var text = args.join(" ").slice(args[0].length + 1);

  if(!text) return message.channel.send('Geen bericht meegegeven.');

  var icon = message.guild.iconURL();

  var embed = new discord.MessageEmbed()
  .setTitle(`Bericht van ${message.author.tag}`)
  .setColor('RANDOM')
  .setThumbnail(icon)
  .setDescription(text)
  .setTimestamp()
  .setFooter('© YuulSims Server');

  message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0])).send(embed).then(() => {

    message.channel.send('Bericht is verzonden.').then(msg => msg.delete({ timeout: 3000 }));

  }).catch(() => {

    message.channel.send(':x: De gene naar wie je wou sturen, heeft zijn dm uit.');
  })

}



module.exports.help = {

    name: "dm",
    

}