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
    var co = message.guild.roles.cache.get('673117362916032537');
    var hadmin = message.guild.roles.cache.get('687326527322587164');
    var YB = message.guild.roles.cache.get('683317686788423785');
    var YT = message.guild.roles.cache.get('678985477872812034');
    var staff = message.guild.roles.cache.get('674627195800649741');
    var hh = message.guild.roles.cache.get('687325823686279195');
    var HB = message.guild.roles.cache.get('687327485544890464');
    var bot = message.guild.roles.cache.get('673123588995285083');
    var WVW = message.guild.roles.cache.get('722738681433292900');
    var Fan = message.guild.roles.cache.get('673124165506564106');
    var hond = message.guild.roles.cache.get('687349734469271570');
    var belg = message.guild.roles.cache.get('675614965289189376');
    var holland = message.guild.roles.cache.get('675615138208022541');
    var sims = message.guild.roles.cache.get('681086397221830676');
    var straem = message.guild.roles.cache.get('678278969866452998');




    const aembed = new discord.MessageEmbed()
        .setTitle(`**__Match Day! 📜__**`)
        .setColor("#ff0000")
        .setThumbnail("https://i.pinimg.com/564x/0b/7c/92/0b7c92d3c39d06b91283f8473f316c8f.jpg")
        .setFooter("©YuulSims Server | Match Day.")
        .addField("**__Wat is het nu?__**", "Elke week geven we op maandag een opdracht, die rond sims te maken heeft. Die moeten jullie dan in 4 dagen klaar hebben en verstuurd! Dan mag elke kijker in de server stemmen op hun favoriete bouwwerk,sim,... \n We nemen 3 dagen rust in het weekend. \n En dan is het cirkel rondt!")
        .addField("**__Kalender:__**", "Maandag om 17:00: Komt de opdracht. \n Dinsdag/Woensdag: Kunnen jullie het maken. \n Donderdag om 17:00: Sluiten de inzendingen en kunnen jullie beginnen stemmen. \n Vrijdag om 17:00: Maken we de winnaar bekent. \n Zaterdag/Zondag: Is het pauze! \n **Sorry! Als we soms niet aan de dagen of het uur houden.**")
        .addField("**__Regels__**", "- Niet kopiëren van anderen. \n - Max 1 keer inzenden. \n - CC mag altijd. \n - Geen haat op anderen geven, tips mogen wel. \n - Niet op jezelf stemmen en twee keer. \n - Gewoon plezier/lol maken! \n - Alleen sims 4!")
        .setDescription(`**Match day is een event binnen de YuulSims server, die voornamelijk rondt sims draait!** \n\n`);
        



    message.channel.send(aembed);
    message.delete();
}




module.exports.help = {

    name: "match",


}