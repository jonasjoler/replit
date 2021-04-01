const discord = require("discord.js");
const ms = require("ms");
 
module.exports.run = async (client, message, args) => {
 
    // Video voor uitleg:
 
    // !tempmute gebruiker tijd(h,m,s)
 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
 
    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");
 
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
 
    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");
 
    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kan deze persoon niet muten.");
 
    var muteRole = message.guild.roles.cache.get('678544695613456404');
 
    if (!muteRole) return message.channel.send("De rol muted bestaat niet");
 
    var muteTime = args[1];
 
    if (!muteTime) return message.reply("Geef een tijd mee");
 
    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} is gemuted voor ${muteTime}`);
 
    setTimeout(function () {
 
        mutePerson.roles.remove(muteRole.id);
   
        message.channel.send(`${mutePerson} is geunmute.`);
   
    }, ms(muteTime));
}
 
module.exports.help = {
    name: "mute"
}