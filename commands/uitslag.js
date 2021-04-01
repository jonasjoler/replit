const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "693824209780211752";

    var ticketUser = message.guild.member(message.mentions.users.first());

    var icon = message.guild.iconURL();

    if (message.channel.parentID !== categoryID) return message.reply('doe dit in een ticket.') && message.delete();

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('je kan dit niet.') && message.delete();

    if (!ticketUser) return message.reply('geef een persoon op.') && message.delete();

    var voteEmbed = new discord.MessageEmbed()
    .setTitle('Kies.')
    .setColor('#03fcfc')
    .addField('Aangenomen:', '✅', false)
    .addField('Afgewezen:', '❌', false)
    .setFooter("© YuulSims Server");

    var resonEmbed = new discord.MessageEmbed()
    .setTitle('Kies.')
    .setColor('#03fcfc')
    .addField('Reden:', 'Vertel een reden.', false)
    .setFooter("© YuulSims Server");

    message.channel.send(voteEmbed).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji == "✅") {

         
     var antwoordgood = new discord.MessageEmbed()
                    .setTitle('Aangenomen.')
                    .setColor('#03fcfc')
                    .addField('Wie:', `${ticketUser}`, false)
                    .setTimestamp()
                    .setThumbnail(icon)
                    .setFooter("© YuulSims Server");

            message.channel.send(antwoordgood);
            message.channel.bulkDelete(1);
            message.channel.setTopic(`**Sollicitant**: ${ticketUser} **status**: Aangenomen.`);
        
        }else if(emoji == "❌") {
            
                message.delete();

                var antwoordbad = new discord.MessageEmbed()
                    .setTitle('Niet aangenomen.')
                    .setColor('#03fcfc')
                    .addField('Wie:', `${ticketUser}`)
                    .setTimestamp()
                    .setThumbnail(icon)
                    .setFooter("© YuulSims Server");

                    message.channel.send(antwoordbad);
                        message.channel.bulkDelete(1);
                        message.channel.setTopic(`**Sollicitant**: ${ticketUser} **status**: niet aangenomen.`);

        
            



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
}})}

module.exports.help = {

    name: "uitslag",
    

}