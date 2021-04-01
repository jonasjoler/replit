const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var yst = message.guild.roles.cache.get('687322873781682225');
    var admin = message.guild.roles.cache.get('673117118744494080');
    var helper = message.guild.roles.cache.get('673116893149921310');
    var mute = message.guild.roles.cache.get('678544695613456404');
    var everyone = message.guild.roles.cache.get('673110339922952192');
    var owner = message.guild.roles.cache.get('724191942308790283');
    var kijkers = message.guild.roles.cache.get('673116519563001877');
    var yuulsims = message.guild.roles.cache.get('673117543778484234');
    var regels = message.member.guild.channels.cache.get("673118651083128882");


    var icon = message.guild.iconURL();
    const aembed = new discord.MessageEmbed()
        .setTitle(`**__Welkom!__**`)
        .setColor("#03fcfc")
        .setThumbnail(icon)
        .setFooter("©YuulSims Server")
        .setDescription(`**Welkom** op de **officiële** server van ${yuulsims}! \n Deze server dient om mensen **samen** te brengen. \nGelieve **niet** ${kijkers}/@here /@everyone te **taggen** \n Zoek** geen** ruzie **A.U.B**. \n  Anders mag je nu al weg. \n **Niet** komen** zeuren** om een rol. \n Kijk zeker de ${regels}. \n Voor hulp maak je een ticket aan met: !ticket \n Yuulsims kanaal:https://www.youtube.com/channel/UCuA9wPbDNf6D5oTLynPEG0w \n Discord link: https://discord.gg/U7qh5nV \n   ~~ ----------------------------------------------------------------------~~ \n  **MVG** \n**het** ${yst}`);

        message.channel.send(aembed);
}



module.exports.help = {

    name: "welkom",
    

}