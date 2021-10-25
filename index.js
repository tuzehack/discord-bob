const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 32767,
    partials: ['GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION', 'USER']
});

client.on('ready', () => {
    console.log('Bot prêt.');
});

client.on('guildMemberAdd', (member) => {
    console.log("Ça fonctionne")
    let welcomeChannel = member.guild.channels.cache.get('901515211096358912');
    welcomeChannel.send(`Bienvenue, ${member.user.tag}, n'hésite pas à te présenter et dire bonjour <:HELLO:708300911205679154> !`);
});

client.on('guildMemberRemove', (member) => {
    console.log("Ça fonctionne")
    let leaveChannel = member.guild.channels.cache.get('518730725810372619');
    leaveChannel.send(`${member} a quitté le serveur Discord, RIP.👻Sache que tu vas nous manquer, euh, non en fait... <:FUCK:694473849479233548>`);
});


client.on('message', async message => {
    if(message.content.startsWith("bobsay")){
        message.delete()
        let msg = message.content.slice(6)    
        message.channel.send(msg)
    }
})


client.login(process.env.token);


