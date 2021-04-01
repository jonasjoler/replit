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
    var idee = message.member.guild.channels.cache.get("681076377587548202");
    var poll = message.member.guild.channels.cache.get("678554117119148052");



    const aembed = new discord.MessageEmbed()
        .setTitle(`**__De Regels!__**`)
        .setColor("#03fcfc")
        .setThumbnail("http://joler.be/hallo.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn in totaal 10 regels. Maar er zijn ook ongeschreven regels de standaart dingen. Hou u daar ook **A.U.B** aan \n Anders kunnen we je een warn geven. En dat is niet echt fijn \n **__Het ${yst} kan altijd de regels veranderen__** \n Die in een embed staan zijn de hoofd regels! Die er niet in staan zijn bijgevoegd door het ${yst}`);

    const bembed = new discord.MessageEmbed()
        .setTitle("**__1.Zelf promoot__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription("Het is niet **toegestaan** om **u zelf te promoten.** \n Zoals: sociale media accounts,YouTube kanalen, Discord servers en anderen eigen accounts. Want dit is **een server om mensen bijeen te brengen.** Dus dit is **geen server** voor te **promoten!**");

    const cembed = new discord.MessageEmbed()
        .setTitle("**__2.Spammen__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Het is **niet toegestaan** om te spammen. \n Als een ${admin} of ${helper}  leden **zeggen** dat je spam dan **stop je ook!** Als je toch  blijft spammen, dan kan je een **officiële waarschuwing  krijgen.** Als het je niet **je eerste keer is** kan dat **een ban of worden ge${mute}**`);

    const dembed = new discord.MessageEmbed()
        .setTitle("**__3.Schelden__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Om **ruzie's de voorkomen schelden we niet. **Dat kan** spijtige genoeg heel hard aan komen!** We \n beschouwen** kanker** als een heel hard scheldwoord en levert meteen een ban of ${mute} op.`);

    const eembed = new discord.MessageEmbed()
        .setTitle("**__4.Taggen__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Het is **niet toegestaan om** @here/${everyone}/${kijkers} **te taggen** alleen met **toestemming.** \n Wil je een rol taggen buiten ${kijkers} **mag dat gerust als je vragen hebt .** Als je iemand persoonlijk wil taggen mag dat maar als die ene aan heeft dat die **niet wil getagd** worden **doe je dat ook niet!**`);


    const fembed = new discord.MessageEmbed()
        .setTitle("**__5.Mensen met een rol__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn mensen met een rang in deze server.** Je luister altijd naar:** ${yuulsims} en ${owner}. \n Mensen met de rol ${admin} kunnen een **officiële waarschuwing geven** en ook **een straf!** \n Mensen met de rol ${helper} mogen iets **zeggen wat je niet mag maar kunnen geen een officiële waarschuwing geven.** En ook **geen straf!**`);

    const gembed = new discord.MessageEmbed()
        .setTitle("**__6.geen rare/seksuele foto's in de chat__**")
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Wij laten **rare/seksuele foto's** niet toe in de chat. \n dit kan een** Ban, ge${mute}worden of zelfs gekickt worden. \n Hier zijn kinderen aanwezig dat weten we 100% zeker!**`);

    const hembed = new discord.MessageEmbed()
        .setTitle(`**__7.Beledigingen/pesterijen__**`)
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Het **beledigen/pesterijen** van leden in de server is niet toegestaan. \n En zeker niet van ${yst}! \n  Daarvoor kom je niet in een server om te pesten. Wees gewoon vriendelijk en maakt er een gezeligge server van. `);

    const iembed = new discord.MessageEmbed()
        .setTitle(`**__8.Niet bemoeien met YuulSims  zaken__**`)
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`We willen **niet** dat gewone ${kijkers} zich **bezig houden** met ${yst} zaken. \n Als je zo graag **wil helpen** in de server meldt je dan aan als ${helper} bij het formulier. **Suggesties** Zijn van harte welkom in ${idee}. We laten jullie soms stemmen in ${poll}`);

    const jembed = new discord.MessageEmbed()
        .setTitle(`**__9.Taal__**`)
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`We willen dat** jullie Vlaams / Nederlands praten** in de server. Waarom omdat **iedereen het zo verstaan **en ${yuulsims} haar** kanaal is Nederlands.** Het is gewoon **makkelijker** voor Iedereen.`);

    const kembed = new discord.MessageEmbed()
        .setTitle(`**__10.Voorwaarden discord__**`)
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`We zouden het **op prijs stellen** dat je ook naar **de regels van discord luistert.** Want je bent **tensloten in discord**. Hier vindt u de link naar de discord regels: https://discordapp.com/terms`);

    const nembed = new discord.MessageEmbed()
        .setTitle(`**__Straffen__**`)
        .setColor("#03fcfc")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn natuurlijk ook straffen als je je niet aan de regels houdt! \n **1.warn** Krijg je eerst kan op lopen T.E.M. 3 warns! \n **2.ban** Kan oplopen tot 7 dagen daarna kan je terug komen met een link! \n **3.ge${mute}** Kan je een tijdje niks doen in de server. Kiezen wij hoelang dat loopt! \n **4.kicken** Word je verwijderd van de server. Met een link kan je er weer in!`)
        .addField("**hopelijk komen jullie het na!", `**Met Vriendelijk groet, \n ${yst}**`)

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
}




module.exports.help = {

    name: "regels",


}