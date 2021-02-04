module.exports = {
  commands: "bugembed",
  minArgs: 0,
  maxArgs: 0,
  description: "Sends an embed to Dev Hall bug channel with proper info & format",
  callback: (message, args, text) => {
    
    const Discord = require('discord.js')
    
    const botreply = new Discord.MessageEmbed()
      .setColor("#329CC2")
      .setTitle('Daypiece - Bugs & Issues')
      .setDescription("If you have located a bug or issue and prefer to report it here instead of Testflight, please describe the issue happening with the app.\n\n- Before submitting here, please ensure your bug is not on the trello board at https://trello.com/b/1ZI4InuM/daypiece\n- You can attach images, videos, and links. \n- Preferred Format:\n```Device:\niOS Version:\nApp Version:\nDescription:\nExpected Behavior:\nActual Behavior:\nScreenshot/Video (if applicable):```")
    
    message.delete()
      .then(message.reply(botreply))
      .catch(err => console.log(err));
  }
};
