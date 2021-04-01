const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "693824209780211752";

    var stafTeam = "687322873781682225";

    var person = message.author;

    var channelName = "「📮」Sollicitatie -" + message.author.username;

    var ticket = false;

    var icon = message.guild.iconURL();

    message.guild.channels.cache.forEach(channel => {

        if (channel.name.toLowerCase() === channelName.toLowerCase  ()) {

            ticket = true;
            return message.replay("Je hebt al een sollicitatie lopen.").then(msg => msg.delete({ timeout: 3000 }));
        }

    });

    if (ticket) return;

    var embed = new discord.MessageEmbed()
        .setTitle('Hey ' + message.author.username)
        .setColor('RANDOM')
        .setFooter('Kanaal wordt aangemaakt.');

    message.channel.send(embed).then(msg => msg.delete({ timeout: 3000 }));

    message.guild.channels.create(channelName, { type: 'text' }).then(

        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone"), {

                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    }
                    );
                    settedParent.updateOverwrite(message.author.id, {

                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES: true,
                        ATTACH_FILES: true,
                        CREATE_INSTANT_INVITE: false
                    }
                    );
                    settedParent.updateOverwrite(message.guild.roles.cache.get(stafTeam), {

                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES: true,
                        ATTACH_FILES: true,
                        CREATE_INSTANT_INVITE: false
                    }
                    );

                    var embedParent = new discord.MessageEmbed()
                        .setTitle("Hey" + message.author.tag)
                        .setColor('#03fcfc')
                        .setDescription('Vul de volgenden vragen in om de solliciteren.')
                        .addField('Over.', 'Wil je helpen in de gezellige server van YuulSims. Beschik je over: talent, respect, beleefdheid,... 👆')
                        .addField('Wat gebeurd er?', 'Je gevens zullen niet openbaar te vinden zijn. Het zal alleen in onze systemen staan. ')
                        .addField('Regels:', '12+ - 3 maanden in de server zitten. \n  We letten ook op leesteken, schrijffouten, ... \n Meer volgt.')
                        .setFooter("© YuulSims Server");

                    var Vraag1 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 1:")
                        .setColor('#03fcfc')
                        .setDescription('Wat is jouw e-mail adres waar we op terect kunnen om naar jou een e-mail bericht te sturen?')
                        .setFooter("© YuulSims Server");

                    var Vraag2 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 2:")
                        .setColor('#03fcfc')
                        .setDescription('Wat is jouw echte voor-achter naam?')
                        .setFooter("© YuulSims Server");

                    var Vraag3 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 3:")
                        .setColor('#03fcfc')
                        .setDescription('Wat is je gebruikersnaam op discord?(+ #0000.)')
                        .setFooter("© YuulSims Server");

                    var Vraag4 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 4:")
                        .setColor('#03fcfc')
                        .setDescription('Wat is jouw leeftijd + geboortedatum?(Vul het zo in 0 jaar | 0000.)')
                        .setFooter("© YuulSims Server");

                    var Vraag5 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 5:")
                        .setColor('#03fcfc')
                        .setDescription('Welke rol wil je benudigen?(helper, hoofd-helper, admin, hoofd-admin.)')
                        .setFooter("© YuulSims Server");

                    var Vraag6 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 6:")
                        .setColor('#03fcfc')
                        .setDescription('Waarom zou je die rollen willen benudigen?')
                        .setFooter("© YuulSims Server");


                    var Vraag7 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 7:")
                        .setColor('#03fcfc')
                        .setDescription('Waarom wil je de server meehelpen verbeteren?')
                        .setFooter("© YuulSims Server");

                    var Vraag8 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 8:")
                        .setColor('#03fcfc')
                        .setDescription('Ben je vaak actief?(Dagen in een week en/of maand.)')
                        .setFooter("© YuulSims Server");

                    var Vraag9 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 9:")
                        .setColor('#03fcfc')
                        .setDescription('Wat zijn jouw talenten?')
                        .setFooter("© YuulSims Server");

                    var Vraag10 = new discord.MessageEmbed()
                        .setTitle("Sollicitatie: vraag 10:")
                        .setColor('#03fcfc')
                        .setDescription('Heb je nog wat bij te voegen?(indien nee typ dan "niks.")')
                        .setFooter("© YuulSims Server");

                    
                    settedParent.send(embedParent);
                    settedParent.send(Vraag1);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                        var antwoord1 = antwoord.first();
                        settedParent.send(Vraag2);

                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                            var antwoord2 = antwoord.first();
                            settedParent.send(Vraag3);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                var antwoord3 = antwoord.first();
                                settedParent.send(Vraag4);

                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                    var antwoord4 = antwoord.first();
                                    settedParent.send(Vraag5);

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                        var antwoord5 = antwoord.first();
                                        settedParent.send(Vraag6);

                                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                            var antwoord6 = antwoord.first();
                                            settedParent.send(Vraag7);

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                                var antwoord7 = antwoord.first();
                                                settedParent.send(Vraag8);
                                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                                    var antwoord8 = antwoord.first();
                                                    settedParent.send(Vraag9);

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                                        var antwoord9 = antwoord.first();
                                                        settedParent.send(Vraag10);

                                                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {

                                                            var antwoord10 = antwoord.first();


                                                            var klaar = new discord.MessageEmbed()
                                                                .setTitle('Bedankt voor de solliciteren.')
                                                                .setColor('#03fcfc')
                                                                .setDescription(`Vraag 1: ${antwoord1}\n\n Vraag 2: ${antwoord2}\n\n Vraag 3: ${antwoord3}\n\n Vraag 4: ${antwoord4}\n\n Vraag 5: ${antwoord5}\n\n Vraag 6: ${antwoord6}\n\n Vraag 7: ${antwoord7}\n\n Vraag 8: ${antwoord8}\n\n Vraag 9: ${antwoord9}\n\nVraag 10: ${antwoord10}\n\n\n We zo snel mogelijk de uitslag bekend maken.`)
                                                                .setTimestamp()
                                                                .setThumbnail(icon)
                                                                .setFooter("© YuulSims Server");

                                                                settedParent.bulkDelete(20).then(
                                                                    settedParent.send(klaar)
                                                                )

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })

                            settedParent.send(`${person}, <@&{stafTeam}>`).then(msg => msg.delete({ timeout: 1000 }));
                        }).catch(err => {
                            message.channel.send('Er is iets mis gegaan.');
                        })
                    })
                })
        })


}



module.exports.help = {

    name: "apply",
}