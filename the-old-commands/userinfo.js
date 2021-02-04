const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: '',
	description: '',
  execute(message, args, msg) {
		message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  }
};