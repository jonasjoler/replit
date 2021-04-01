const discord = require("discord.js");
const fs = require("fs");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {

    const levelf = JSON.parse(fs.readFileSync("./Data/levels.json"));

    const member = message.member.id;

    var nextLevelXp = levelf[member].level * 1000;

    if(nextLevelXp == 0) nextLevelXp = 100;

    if (levelf[member]){

        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({dynamic: false, format: "png"}))
        .setCurrentXP(levelf[member].xp)
        .setLevel(levelf[member].level)
        .setRequiredXP(nextLevelXp)
        .setStatus(message.author.presence.status)
        .setProgressBar("#03fcfc", "COLOR")
        .setBackground("IMAGE", "https://besthqwallpapers.com/Uploads/18-12-2019/116161/thumb2-black-turquoise-retro-background-polygons-retro-background-retro-texture-retro-backgrounds-turquoise-background.jpg")
        .setUsername(message.author.username)
        .setOverlay("#00000", "0", false)
        .setDiscriminator(message.author.discriminator);

        rank.build()
        .then(data => {
            const attachment = new discord.MessageAttachment(data, "RankCard.png");
            message.channel.send(attachment);
        });

    }else{

        message.reply("We hebben nog geen gegevens.")

    }

}



module.exports.help = {

    name: "level",
    

}