
const Discord = require('discord.js');

const bot = new Discord.Client();


const token = 'NzU3OTA2MjgxMDMyODQzMzY0.X2nNOg.uLnckCe4FN2PEpncxn47aLVuQxk';

bot.on('guildMemberAdd', member => {
    // Acha o canal de texto para ser escrito
    const channel = member.guild.channels.cache.find(ch => ch.name === 'geral');
    // Caso não tenha um canal com o nome ele retorna null
    if (!channel) return;
    // Envia a mensagem caso ache o canal
    channel.send(`Bem-vindo ao server, ${member}`);
  });

    bot.on('message', message => {
        // If the message is '!memes'
        if (message.content === '!logo') {
        const attachment = new Discord.MessageAttachment('https://www.ufsm.br/cursos/graduacao/santa-maria/sistemas-de-informacao/wp-content/uploads/sites/424/2018/11/logo-pet-si-300x110.png');
        
        message.channel.send(`${message.author}, Aqui está o logo!`, attachment);
        }
        if (message.content === '!redacoes') {
            message.channel.send(`${message.author}, 
            Siga o link para mais redações: https://sites.google.com/inf.ufsm.br/pet-si`);
        }
    });
  
bot.login(token);