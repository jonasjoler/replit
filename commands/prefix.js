const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if(!args[0]) return message.reply('Gebruik het commando zo: "!prefix <prefix>."')

    var prefixes = JSON.parse(fs.readFileSync("./Data/prefix.json"))    

    prefixes[message.guild.id] = {

        prefix: args[0]
    };
    
    fs.writeFileSync("./Data/prefix.json", JSON.stringify(prefixes), (err) => {

            if(err) console.log(err);
    });

    var icon = message.guild.iconURL();
    
    var embed = new discord.MessageEmbed()
    .setTitle('Prefix **aanpassing**')
    .setColor('RANDOM')
    .setThumbnail(icon)
    .setFooter("© YuulSims Server")
    .setDescription(`De prefix voor deze server zijn aangepast naar **${args[0]}**.`);

    message.channel.send(embed);


}



module.exports.help = {

    name: "prefix",
    

}