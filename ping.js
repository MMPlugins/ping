module.exports = function({bot, commands}) {
        commands.addGlobalCommand ('ping', '',(msg, args) => {
		bot.createMessage(msg.channel.id, "-# 🏓 *`Pinging..`*").then(m =>{
			const ping = m.timestamp - msg.timestamp;
			m.edit(`> 🏓 __**Pong!**__ Your ping is ${ping}ms`);
		});
	});
