const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");
    message.delete();
    await message.channel.overwritePermissions([

        {
            id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }

    ]);
    var icon = message.guild.iconURL();
    var embed = new discord.MessageEmbed()
        .setTitle('Lockdown')
        .setDescription('We zijn momenteel bezig met dit kanaal. \n Dit kanaal zal snel weer open zijn.')
        .setTimestamp()
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setFooter(`© YuulSims Server"`);

        message.channel.send(embed);
    
}



module.exports.help = {

    name: "lock",
    

}