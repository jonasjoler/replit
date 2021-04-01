const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "693824209780211752";



    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        var embed = new discord.MessageEmbed()
        .setTitle("Hey, " + message.channel.name)
        .setColor("#5400fc")
        .setDescription("Je ticket is gemarkeerd als **__compleet__**.\n Wil je een nieuwe maken doe dan !?ticket")
        .setFooter("ticket klaar.");

    var ticketChannel = message.member.guild.channels.cache.get("693857100341706794");
    if (!ticketChannel) return message.channel.send("Kanaal bestaat niet.");
    ticketChannel.send(embed);

        
    } else {
        message.channel.send("Gelieve het in het kanaal zelf te doen!");
    }

    
}



module.exports.help = {

    name: "close",


}