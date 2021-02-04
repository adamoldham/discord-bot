const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const prefix = '-';

module.exports = {
	name: 'help',
	description: 'embed - help menu',
  execute(message, args, msg) {
		const botreply = new Discord.MessageEmbed()
      .setColor("#0484A3")
      .setTitle("Help")
      .setDescription(
        `${prefix}help \n ${prefix}ping \n ${prefix}message \n ${prefix}insult \n ${prefix}weather \n ${prefix}mood \n ${prefix}suggest \n`
      )
      .setFooter("made by AdamO#0001 with help from Bea#0001")
      .setTimestamp();
    message.channel.send(botreply).catch(err => console.log(err));
	},
};