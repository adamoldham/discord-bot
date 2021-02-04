const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const loadCommands = require('./commands/load-commands')

client.on('ready', async () => {
  console.log("winston says hi!");
  client.user
    //.setActivity(`${client.guilds.cache.array().length} servers`, {
    .setActivity("-help", {
      type: "WATCHING"
    })
    .catch(err => console.log(err));

  loadCommands(client)
})

/*
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (message.channel.id === '776677534103371786') {
    const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle(':warning: Bug Reported :fly:')
      .setDescription(message)
      .setFooter(`Reported By ${message.author.username}#${message.author.discriminator}`)
      .setTimestamp()
    
    message.delete()
    message.channel.send(botreply)
      .catch(err => console.log(err));
  }
  
  
});
*/

client.login(config.token)

// AdamO#0001 449373835553407007
