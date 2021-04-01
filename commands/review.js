const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const anountStars = args[0];

    if(!anountStars || anountStars < 1 || anountStars > 5) return message.reply("Geef Een aantal op van 1 T.E.M. 5.");

    var text = args.splice(1, args.length).join(" ") || 'Geen tekst meegegeven!';

    var channel = message.member.guild.channels.cache.get("694192261847711825");

    if(!channel) return message.channel.send("Knaal niet gevonden!");

    var stars = "";
    for (let i = 0; i < anountStars; i++) {

        stars += ":star: ";
    }

    message.delete();

    const embed = new discord.MessageEmbed()
    .setTitle(`${message.author.username} heeft een review gescherven!:Tada:`)
    .setColor("#00ff00")
    .setThumbnail("https://f0.pngfuel.com/png/408/238/purple-robot-logo-png-clip-art.png")
    .setFooter("©YuulSims Server")
    .addField("Sterren: ", stars)
    .addField("Review: ", text);

    message.channel.send(":white_check_mark: Je hebt succesvol een review geschreven");

    return channel.send(embed);
}



module.exports.help = {

    name: "review",
    

}