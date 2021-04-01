const discord = require("discord.js");
// File server bij halen om de bestanden te kunnen uitlezen en aanpassen.
const fs = require("fs");
// Waarschuwingen bestand uitlezen.
const warns = JSON.parse(fs.readFileSync("./Data/warning.json", "utf8"));
 
module.exports.run = async (client, message, args) => {
 
    // Nakijken als deze persoon wel toestemming heeft om dit te kunnen doen.
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
 
    // Nakijken als er een gebruiker is meegegeven.
    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");
 
    // Nakijken als er een redenen is meegegeven.
    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");
 
    // Nakijken als de bot perms heeft.
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
 
    // User ophalen.
    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
    // Redenen aan elkaar koppelen die met een spatie zijn gesplitst.
    var reason = args.slice(1).join(" ");
 
    // Nakijken als de user kan gevonden worden.
    if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");
 
    // Nakijken als je geen staff waarschuwt.
    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kan deze persoon niet waarschuwen.");
 
    // We gaan kijken als deze user nog geen warns heeft.
    // Heeft deze er geen dan maken we eentje aan met 0 waarschuwingen in het bestand.
    if (!warns[kickUser.id]) warns[kickUser.id] = {
        warns: 0
    };
 
    // Toevoegen van een waarschuwing.
    warns[kickUser.id].warns++;
 
    // Document updaten.
    fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
 
    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${kickUser} (${kickUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[kickUser.id].warns);
 
    // Kanaal opzoeken.
    const channel = message.member.guild.channels.cache.get('678551685215289375');
 
    if (!channel) return;
 
    channel.send(embed);
 
    // Als 3 waarschuwingen doe dan iets.
    if (warns[kickUser.id].warns == 3) {
 
        var mes = new discord.MessageEmbed()
            .setDescription("PAS OP " + kickUser)
            .setColor("#ee0000")
            .addField("Bericht", "Nog één warn en je hebt een ban!!");
 
        message.channel.send(mes);
 
    } else if (warns[kickUser.id].warns == 4) {
 
        message.guild.member(kickUser).ban(reason);
        message.channel.send(`${kickUser} is verbannen door de bot wegens te veel warns`);
 
    }
}
 
module.exports.help = {
    name: "warn"
}