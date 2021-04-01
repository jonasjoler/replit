const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
    // !announcement titel | bericht | kleur | kanaal.
 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
 
    var seperator = "|";
 
    if (args[0] == null) {
        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#00ee00")
            .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement titel ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);
 
        return message.reply(embed);
    }
 
    var argsList = args.join(" ").split(seperator);
 
    console.log(argsList);
 
    if (argsList[2] == undefined) argsList[2] = "#fc0303";
    if (argsList[3] == undefined) argsList[3] = "🔗server";
 
    var options = {
 
        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud opgegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()
 
    }
 
    console.log(options);
 
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(options.titel)
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor(options.kleur)
        .setDescription(`\n ${options.bericht}`)
        .setFooter("©YuulSims Server |")
        .setTimestamp();
 
    var channel = message.member.guild.channels.cache.find(channel => channel.name === options.kanaal);
    if (!channel) return message.reply("Kanaal bestaat niet");
 
    channel.send(announceEmbed);
 
}
 
module.exports.help = {
    name: "ac"
}