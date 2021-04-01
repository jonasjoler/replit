const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random()* value.length)];

    var text = `Ik gooide ${result}!`;

    var embed = new discord.MessageEmbed()
    .setAuthor(`${message.author.tag} ${message.author.id}` , `${message.author.avatarURL({ size: 4096 })}`)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Ik gooide:', `**${result}**.`)
    .addField('Bedankt om het te spelen!', 'Wil je meer van dit typ dan: **!help**')
    .setFooter(`© YuulSims Server`)
    .setThumbnail('https://cdn.pixabay.com/photo/2013/07/12/12/14/euro-145386_960_720.png');
  
    message.channel.send(embed);
}



module.exports.help = {

    name: "kopofmunt",
    

}