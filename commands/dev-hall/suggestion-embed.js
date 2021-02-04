module.exports = {
  commands: "suggestembed",
  minArgs: 0,
  maxArgs: 0,
  description: "Sends an embed to Dev Hall suggestion channel with proper info & format",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#329CC2")
      .setTitle('Daypiece - Suggestions')
      .setDescription("If you have a suggestion for the Daypiece app, you can submit it below by typing your message and we will add it to trello. Any attached images will be posted as well.\n\n- Before submitting here, please ensure your suggestion is not on the trello board in Suggestions or Done at https://trello.com/b/1ZI4InuM/daypiece")
    message.delete()
      .then(message.reply(botreply))
      .catch(err => console.log(err));
  }
};
