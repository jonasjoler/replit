const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, ik kan u geen toegang verlenen aan deze infomatie. U moet hiervoor de rol Admin over hoger tot u beschikking hebben.");
    
    var boticon = client.user.displayAvatarURL();
   try{

    var helpEmbed = new discord.MessageEmbed()
    .setTitle("**YuulSims Sever Bot Commando's.**")
            .setThumbnail(boticon)
            .setFooter("© YuulSims Server | Met dank dank aan Jonasvldv ❤️")
            .setColor("#24f8ff")
            .setDescription("**Fijn dat je zijn commando's wilt opvragen.** \n Elk commando moet je opvragen met !. \n Dit is alleen voor admins.")
            .addField("**__Algemeen:__**", "**!avatar**  -  Laat iemand zijn profiel foto zien. \n **!dm**  -  Stuur iemand vanaf de server privé. \n **!hallo**  -  Zeg: 'hallo' tegen de bot. \n **!idee**  -  Laat een idee achter voor de server. \n **!review**  -  Laat een review achter voor de server. \n __Later meer__ \n\n")
            .addField("**__Info:__**", "**!help**  -  Laat nog een keer dit bericht sturen. \n **!leden**  -  Toont hoeveel leden, bots er zijn. \n **!match**  -  Laat de info zien over Match Day. \n **!ranks**  -  Laat de rollen op de server zien. \n **!regels**  -  Toont de regels. \n **!serverinfo** Toont de info over de server \n **!userinfo**  -  Laat info tonen over een persoon. \n **!welkom**  -  Toont het welkoms bericht. \n __Later meer__")
            .addField("**__Mini Games:__**", "**!dobbel**  -  Een random getal van 1 tot 6. \n **!kopofmunt**  -  Speel kop of munt. \n **!level** - Laat jouw level zien. \n **!rps**  -  Speel blad, steen, schaar. \n __Later meer__")
            .addField('**__Ticket:__**', '**!add** - Voeg iemand in jouw ticket toe. \n **!apply**  -  solliciteren voor een rol binnen de server. \n **!ticket**  -  Kom in contact met het YuulSims Team. \n **!close**  -  Laat het ticket weer sluiten. \n **!delete** - verwijder iemand uit jouw ticket. \n __Later meer__')
            .addField('**__Voor admins:__**', '**!adhelp**  -  Dit kunnen alleen admins opvragen. \n **!ac** - Doe een mededeling in de server. \n **!ban**  - Laat iemand bannen van de server. \n **!bezoeker** - Neem iemand zijn rollen af.(Alleennte gebruiken bij lager dan admins.) \n **!clear** - Laat de bot berichtjes verwijderen. \n **!giveaway** - Maak een giveaway. \n **!kick** - Laat iemand kicken. \n **!lockdown** - Zet een kanaal in lockdown. \n **!prefix** - verander de prefix van de bot.(alleen wanneer het mag.)  **!mute** - Laat iemand voor een bepaalde tijd niks zeggen in de server. \n **!unlock** - Laat de lockdown stoppen. \n **!warn** Geef iemand een waarschuwing.')
           
        message.author.send(helpEmbed);

        message.reply("Al de commando's staan in je privé berichten! :mailbox_with_mail:");


   }catch(err){
       message.reply("Er is iets fout gelopen.")
   }
}



module.exports.help = {

    name: "adhelp",
    

}