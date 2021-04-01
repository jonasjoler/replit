const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {

  var result = Math.ceil(Math.random() * 6);

  var text = `:game_die: Je hebt ${result} gegooid! :game_die:`;

  var embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} ${message.author.id}` , `${message.author.avatarURL({ size: 4096 })}`)
  .setDescription(text)
  .setColor('RANDOM')
  .setTimestamp()
  .addField('Bedankt om het te spelen!', 'Wil je meer van dit typ dan: **!help**')
  .setFooter(`© YuulSims Server`)
  .setThumbnail('https://i.pinimg.com/originals/4e/81/4c/4e814c5b4d6f43e1c37f4d99a1ae7a42.gif');

  message.channel.send(embed);

}

module.exports.help = {
    name: "dobbel",
    
}