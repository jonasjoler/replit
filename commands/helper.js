const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    var user = message.guild.member(message.mentions.users.first());

    if(!user) return message.channel.send("Geen gebruiker opgegeven.");

    var role = message.guild.roles.cache.get("673116893149921310");

    if(!role) return message.channel.send("Geen bestaande rol.");

   

    var faultEmbed = new discord.MessageEmbed()
    .setTitle('Fout!')
    .setColor('RANDOM')
    .setDescription('Is al helper.');
    
    var embed = new discord.MessageEmbed()
    .setTitle('Nieuwe', `helper.`)
    .setColor('RANDDOM')
    .addField('Role gekregen:', `**${user.user.username}** is vanaf nu ${role}.`);

    if(user.roles.cache.find(r => r.name === role.name)){
        return message.reply(faultEmbed);
    }

    user.roles.add(role.id) && message.channel.send(embed);


}

module.exports.help = {

    name: "helper",
    
}