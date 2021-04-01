const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "693824209780211752";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (message.channel.parentID != categoryID) return message.reply('Je zit niet in een ticket.');

    var addUser = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) || 
    client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()) || 
    client.users.cache.find(user => user.tag.toLowerCase() == args.join(" ").toLowerCase()));

    if(!addUser) return message.reply('Geen gebruiker mee gegeven.')

    var embedPrompt = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Antwoord binnen 30 sec.')
    .setFooter("© YuulSims Server")
    .setDescription(`Wil je ${addUser} verwijderen?`);
    
    var embed = new discord.MessageEmbed()
    .setTitle('Gebruiker verwijderd.')
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Verwijderd:', `${addUser}`)
    .addField('Persoon verwijderd door:', message.author)
    .setFooter("© YuulSims Server");

    message.channel.send(embedPrompt).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser, {
                CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: false,
                        SEND_MESSAGES: false,
                        ATTACH_FILES: false,
                        CONNECT: false,
                        ADD_REACTIONS: false,
                        VIEW_CHANNEL: false,
                       READ_MESSAGE_HISTORY: false
            }) ;

            message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));

        }else if(emoji == "❌") {
            message.delete();

            message.reply("verwijdering geannuleerd").then(msg => msg.delete({timeout: 10000}));

        }
    });


}

// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;
 
    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }
 
    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
 
    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}


module.exports.help = {

    name: "delete",
    

}