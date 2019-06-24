module.exports = (client, member) => {

	const Enmap = require("enmap");

	const skills = client.stats;
	const inv = client.inventory;

	console.log("Consts Set")

	skills.ensure(`${member.id}`, {
		Fighting: 1,
		Crafting: 1
	});

	console.log("Skills Set")

	inv.ensure(`${member.id}`, {
		Crafting: new Enmap(),
		Equipment: new Enmap(),
		Junk: new Enmap()
	});

	console.log("inventory set")

}