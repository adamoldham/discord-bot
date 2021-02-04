module.exports = {
	name: 'ping',
	description: 'text - shows that bot is functional',
  execute(message, args, msg) {
		message.channel.send('tf do you want from me');
	},
};