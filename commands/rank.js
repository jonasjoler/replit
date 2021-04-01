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
        .setTitle(`**__Ranks!__**`)
        .setColor("#03fcfc")
        .setThumbnail("https://i.pinimg.com/564x/c9/fe/69/c9fe695650e601096ccf16a847f22878.jpg")
        .setFooter("©YuulSims Server | Laast bewerkt 17/08/2020.")
        .setDescription(`De ranks = rollen! De ranks dienen voor meer opties in de server. Het kan ook een een herkening zijn zoals ${belg}/${holland}. \n Het is zo simpel als het maar kan \n De twee hoogste zijn ${owner} en ${yuulsims} spreekt denk ik voor zich! Hier onder kan je je alle ranks zien.`);

    const bembed = new discord.MessageEmbed()
        .setTitle(`**__💕 | Yuulsims__**`)
        .setColor("#7b00ff")
        .setThumbnail("https://i.pinimg.com/564x/f9/12/a4/f912a41825ad8544ffb2d3984307d9ee.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${yuulsims} is 1 van de 2 hoogste rangen in de server. Deze is special voor YuulSims! \n Dus je kan hem nooit krijgen. Deze rol heef alle opties aanstaan. \n En is gelijk ook de baas van de hele server.\n **Het is gewoon YuulSims zelf!**`);

    const cembed = new discord.MessageEmbed()
        .setTitle("**__👑 | owner__**")
        .setColor("#00fcf4")
        .setThumbnail("https://i.pinimg.com/564x/29/a5/c2/29a5c26e87ab9d15d1353bc421b3cd6e.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${owner} is 1 van de 2 hoogst rangen in de server. Deze is special voor Jonasvldv! \n Deze rol kan je nooit krijgen, deze rol heeft alle opties aanstaan. \n En het is ook een baas van de hele server. \n **Dit is samen met YuulSims de beheerder van de server.** `);

    const dembed = new discord.MessageEmbed()
        .setTitle("**__🔑 | hoofd admin__**")
        .setColor("#F1C514")
        .setThumbnail("https://i.pinimg.com/564x/d2/fb/ec/d2fbecca4adae87e9ca51e432e143560.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${hadmin} zorgt dat de gewone ${admin}s zich goed aan hun werk houden. \n Deze rol kan je maar aan één persoon geven, heeft bijna alle opties aanstaan. \n En het is een soort van owner over de server en de ${admin}s. \n **Hij/Zij kan iemand bannen,kicken,...**`);

    const eembed = new discord.MessageEmbed()
        .setTitle("**__🔒 | admin__**")
        .setColor("#F1C514")
        .setThumbnail("https://i.pinimg.com/564x/a8/70/b8/a870b8416abb67a2a6b467f4cf5172d3.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${admin}s zorgen ervoor dat de server mooi en goed werkt voor jullie. \n Deze rol kan max aan 3 personen gegeven worden - ${hadmin}, Deze heeft bijna alle opties aanstaan. \n Ze werken mee aan een goede server! \n **Hij/Zij kan iemand straffen gegeven met toestemming.**`);

    const fembed = new discord.MessageEmbed()
        .setTitle("**__🎖 | YuulSims Team__**")
        .setColor("#1000ff")
        .setThumbnail("https://i.pinimg.com/564x/d2/7e/0a/d27e0a89c767fda7dbe88c6f18c4c8fc.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${yst} dient voor de rollen hierboven makkelijk aan te spreken. \n Deze rol kan dus maar aan 5 personen toegekent worden, heeft de optie beheerder aan. \n Als je deze rol krijgt als admin je proefperiode goed gegaan. \n **Is gewoon een aanspreek punt!** `);

    const gembed = new discord.MessageEmbed()
        .setTitle("**__💎 | YuulSims Booster__**")
        .setColor("#f47fff")
        .setThumbnail("https://i.pinimg.com/564x/49/53/ef/4953efd9c8041ecc80b4b8930d793592.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${YB} Hiermee kan je onze boosters uit elkaar houden. \n Deze rol krijg je alleen als je de server boost, heeft een paar opties aanstaan. Niks (belangerijks) \n Als je deze rol wilt moet je onze server boosten! \n **Super leuke rol, als je het mij vraagt.**`);

    const hembed = new discord.MessageEmbed()
        .setTitle("**__🎥  | youtuber__**")
        .setColor("#ff0000")
        .setThumbnail("https://i.pinimg.com/564x/f3/aa/9a/f3aa9ac5ee4be8f0b3ad4dc3de229773.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${YT} Hiermee kan je de youtubers uit elkaar houden. \n Deze rol krijg je alleen als je een youtuber bent, heeft een paar opties aanstaan. Niks (belangerijks) \n Als je deze rol wilt moet je bevestigen dat je een youtuber bent! \n **Veel plezier om naar hun ook te kijken!**`);

    const iembed = new discord.MessageEmbed()
        .setTitle("**__Ⓜ️ | hoofd helper__**")
        .setColor("#E74C3C")
        .setThumbnail("https://i.pinimg.com/564x/42/b9/45/42b945a2704e0cb714a71398afbb510a.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${hh} zorgt dat de gewone ${helper}s zich goed aan hun werk houden. \n Deze rol kan je maar aan één persoon geven, heeft de zelfde opties aanstaan als ${helper}. \n En het is een soort van owner over de ${helper}s. \n **Hij/Zij kan iemand aanspreken over hun gedrag**`);

    const jembed = new discord.MessageEmbed()
        .setTitle("**__⁉ | helper__**")
        .setColor("#E74C3C")
        .setThumbnail("https://i.pinimg.com/564x/ad/15/d9/ad15d9f6ed08c056a90446500df41e26.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${helper} beantwoorden vragen van jullie, met héél veel plezier. \n Deze rol kan je maar aan 4 mensen geven, heeft niet zoveeel opties aanstaan. \n Het is een gewoon iemand die de server een beetje kent. \n  **Hij/Zij kan iemand aanspreken over hun gedrag**`);

        const nembed = new discord.MessageEmbed()
        .setTitle("**__🔧 | staff team__**")
        .setColor("#19ff00")
        .setThumbnail("https://i.pinimg.com/564x/6b/83/ed/6b83ed1e0a8ac1f357f778a065e36ab1.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${staff} Deze rol dient om de rollen hier boven aan te spreken. \n Deze rol kan maar aan 10 mensen gegeven worde,, heeft de zelfde opties als ${helper} \n Gewoon ook weer een team! \n **Zij helpen de server goed en fijn te maken!**`);

        const membed = new discord.MessageEmbed()
        .setTitle("**__🔧 | staff team__**")
        .setColor("#19ff00")
        .setThumbnail("https://i.pinimg.com/564x/6b/83/ed/6b83ed1e0a8ac1f357f778a065e36ab1.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`${staff} Deze rol dient om de rollen hier boven aan te spreken. \n Deze rol kan maar aan 10 mensen gegeven worde,, heeft de zelfde opties als ${helper} \n Gewoon ook weer een team! \n **Zij helpen de server goed en fijn te maken!**`);


    message.channel.send(aembed);
    message.channel.send(bembed);
    message.channel.send(cembed);
    message.channel.send(dembed);
    message.channel.send(eembed);
    message.channel.send(fembed);
    message.channel.send(gembed);
    message.channel.send(hembed);
    message.channel.send(iembed);
    message.channel.send(jembed);
    message.channel.send(kembed);
    message.channel.send(nembed);
    
   message.delete()
}




module.exports.help = {

    name: "ranks",


}