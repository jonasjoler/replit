const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    var noRoleUser = message.guild.member(message.mentions.users.first());

    if(!noRoleUser) return message.channel.send("Geen gebruiker opgegeven.");

    var role = message.guild.roles.cache.get("673116519563001877");

    if(!role) return message.channel.send("Geen bestaande rol.");

   for (let index = 0; index < noRoleUser._roles.length; index++) {
       const role = noRoleUser._roles[index];
       
       noRoleUser.roles.remove(role);
   }

   var embed = new discord.MessageEmbed()
   .setTitle('Je rollen zijn gereset.')
   .setColor('#ff0000');

   noRoleUser.roles.add(role);

   message.guild.member(noRoleUser).send(embed);
}



module.exports.help = {

    name: "bezoeker",
    

}