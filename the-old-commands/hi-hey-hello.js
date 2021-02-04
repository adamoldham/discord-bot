const Discord = require("discord.js");
const { config } = require("dotenv");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

module.exports = {
	name: 'hi-hey-hello',
	description: 'text - no prefix - winston says a random greeting when someone says hi/hey/hello',
  execute(message, args, msg) {
		let hello = [
      // this defines a group of outputs.
      // insert all your outputs here. e.g:
      "hey",
      "hello",
      "hi",
      "sup"
    ];

    let randomizer = hello[Math.floor(Math.random() * hello.length)];
    message.channel.send(randomizer);
	},
};