const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelf = require("./Data/levels.json");
//  Command handler
const fs = require("fs");

const client = new discord.Client();
client.login(botConfig.token);

//  Command handler
client.commands = new discord.Collection();



const levelFile = require("./Data/levels.json");




//  Command handler
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
    });

});


client.on("guildMemberAdd", member => {
    var role = member.guild.roles.cache.get("673116519563001877");



    member.roles.add(role);

    var channel = member.guild.channels.cache.get('673118698441015306');

    if (!channel) return;

    channel.send(`Welkom bij de server ${member}`);

    var userIcon = member.user.avatarURL();

    var addmemeber = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
        .setThumbnail(userIcon)
        .setDescription(`**Hey ${member.user.username},** \n**Welkom** in de server van **YuulSims**.`)
        .addField("We zijn met:", member.guild.memberCount)
        .setColor("#00ff73")
        .setTimestamp()
        .setFooter("©YuulSims Server | Gebruiker gejoind.");

    channel.send(addmemeber);


});


client.on("guildMemberRemove", member => {



    var channel = member.guild.channels.cache.get('673118698441015306');

    if (!channel) return message.channel.send("Dit kanaal niet gevonden.");

    channel.send(`${member} is van de server.`);

    var userIcon = member.user.avatarURL();

    var joinMessage = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
        .setThumbnail(userIcon)
        .setDescription(`**${member.user.username} heeft de server verlaten.** \n Met pijn in het hart moeten wij afscheidt nemen van ${member.user.username}`)
        .setColor("#ff5500")
        .addField("We zijn nog met:", member.guild.memberCount)
        .setTimestamp()
        .setFooter("©YuulSims Server | Gebruiker geleavd");

    channel.send(joinMessage);

});


client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);

    client.user.setActivity("| !help", { type: "PLAYING" });

});



client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var swearWords = JSON.parse(fs.readFileSync("./Data/swearwords.json"));

    var prefixes = JSON.parse(fs.readFileSync("./Data/prefix.json"))

    if(!prefixes[message.guild.id]) {

        prefixes[message.guild.id] = {

            prefix: botConfig.prefix

        };  
    }

    var prefix = prefixes[message.guild.id].prefix;

    /* var msg = message.content.toLowerCase();
 
     for (let i = 0; i < Object.keys(swearWords["vloekWoorden"]).length; i++) {
         if (msg.includes(swearWords["vloekWoorden"][i])) {
 
             // message.delete();
 
             //   return message.reply("Gelieve niet de vloeken!").then(msg => msg.delete({ timeout: 3000}));
         }
     }
 */
   // var prefix = botConfig.prefix;

    var swearWords = JSON.parse(fs.readFileSync("./Data/swearwords.json"));
    var msg = message.content.toLowerCase();

    var senteceUser = "";
    var annountSwearWords = 0;
    var messageArray = message.content.split(" ");
    for (let y = 0; y < Object.keys(messageArray).length; y++) {

        const words = messageArray[y].toLowerCase();
        var changeWord = "";

        for (let i = 0; i < Object.keys(swearWords["vloekWoorden"]).length; i++) {

            if (msg.includes(swearWords["vloekWoorden"][i])) {

                changeWord = words.replace(swearWords["vloekWoorden"][i], `******`);

                senteceUser += " " + changeWord;

                annountSwearWords++;
            }

        }

        if (!changeWord) {
            senteceUser += " " + messageArray[y];
        }
    }

    if (annountSwearWords != 0) {

        message.delete();
        message.reply(senteceUser).then(msg => msg.delete({ timeout: 3000 }));
        //message.channel.send(senteceUser);
        message.reply("Gelieve niet de vloeken.").then(msg => msg.delete({ timeout: 3000 }));
    }

    var messageArray = message.content.split(" ");

    var commands = messageArray[0];

    RandomXp(message);

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(commands.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);
});


client.on("messageDelete", messageDelete => {

    if (messageDelete.author.bot) return;

    var content = messageDelete.content;

    if (!content) content = "Sorry! Ik kon geen tekst vinden.";


    var respons = `Bericht ${messageDelete.id} is verwijderd uit ${messageDelete.channel}\n **Bericht:** ${content}`;

    var embed = new discord.MessageEmbed()
        .setAuthor(`${messageDelete.author.id} ${messageDelete.author.tag}`, `${messageDelete.author.avatarURL({ size: 4096 })}`)
        .setDescription(respons)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://static.thenounproject.com/png/223194-200.png');

    client.channels.cache.find(c => c.name == "「💬」staff-info").send(embed);
});

function RandomXp(message) {

    var randomNumber = Math.floor(Math.random() * 15) + 1;

    var idUser = message.author.id;

    if(!levelf[idUser]) {

        levelf[idUser]  = {
            xp: 0,
            level: 0
        } 
     }

     levelf[idUser].xp += randomNumber;

     var levelUser = levelf[idUser].level;

     var xpUser = levelf[idUser].xp;
     
     var nextLevelXp = levelUser * 1000;

     if(nextLevelXp == 0) nextLevelXp = 100;

     if(xpUser >= nextLevelXp){

        levelf[idUser].level += 1;


       fs.writeFile('./Data/levels.json', JSON.stringify(levelf), err => {
        
        if (err) console.log(err);
        });

        if (levelFile[idUser].level == 100) {

            var role = message.guild.roles.cache.find(r => r.name === "🎉 | Opper chatter");

            var member = message.member;

            member.roles.add(role);

            var embedLevel = new discord.MessageEmbed()
            .setTitle('Proficiat level up & new rank.')
            .setColor('RANDOM')
            .setTimestamp()
            .setThumbnail('http://www.joler.be/level.jpg')
            .addField('Nieuw level:', levelf[idUser].level)
            .addField('Nieuwe rank', "🎉 | Opper chatter")
            .setFooter("© YuulSims Server");
    
            message.channel.send(embedLevel);

        }else{

            var embedLevel = new discord.MessageEmbed()
            .setTitle('Proficiat level up.')
            .setColor('RANDOM')
            .setTimestamp()
            .setThumbnail('http://www.joler.be/level.jpg')
            .addField('Nieuw level:', levelf[idUser].level)
            .setFooter("© YuulSims Server");
    
            message.channel.send(embedLevel);

        }

       
     }

    }