const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var idee = args.join(' ');

    if (!args[0]) return message.channel.send("Geen idee meegegeven. Wilt u een idee meegeven.");

    message.delete();
    var ideeEmbed = new discord.MessageEmbed()
        .setTitle("Nieuw idee:triangular_flag_on_post:")
        .setColor("#f8fc03")
        .addField("Idee", idee)
        .setFooter("©YuulSims Server")
        .addField("Ingezonden door", message.author);

    var ideeChannel = message.member.guild.channels.cache.get("681076377587548202");
    if (!ideeChannel) return message.channel.send("Idee kanaal niet gevonden.");

    ideeChannel.send(ideeEmbed).then(embedMessage => {

        embedMessage.react('👍');
        embedMessage.react('👎');
    });


}

module.exports.help = {

    name: "idee",
    description: "Heb jij een idee voor de server? Ja doe dit dan."

}