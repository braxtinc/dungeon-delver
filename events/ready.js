module.exports = (client) => {
	console.log(`${client.user.tag} has loaded.`);
	client.user.setActivity('the wilds', {type: 'WATCHING'});
}