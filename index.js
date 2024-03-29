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
    let welcomeChannel = member.guild.channels.cache.get('366705337224527873');
    const Embed = new Discord.MessageEmbed()
        .setColor(`#ff99cc`)
        .setDescription(`Merci de nous avoir rejoint ! N'hésites pas à te présenter et dire bonjour !`)
        .setImage(`https://cdn.discordapp.com/attachments/738474164700053604/905918692276187186/Sans_titre-1.png`)

    welcomeChannel.send({
        content: `Bienvenue ${member}!`,
        embeds: [Embed]
    })
});

client.on('guildMemberRemove', (member) => {
    console.log("Ça fonctionne")
    let leaveChannel = member.guild.channels.cache.get('518730725810372619');
    leaveChannel.send(`Au revoir, ${member} !`);
});

client.on('message', async message => {
    if(message.content.startsWith("dvasay")){
        message.delete()
        let msg = message.content.slice(6)    
        message.channel.send(msg)
    }
})

client.on("messageCreate", async (message) => {
    if (message.content.startsWith("!emitt")) {
        client.emit("guildMemberAdd", message.member)
    }
})

client.login(process.env.token);
