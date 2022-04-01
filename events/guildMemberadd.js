const Discord = require('discord.js')
module.exports = {
	name: "guildMemberAdd",
	async execute(member) {
		console.log(`${member.user.username} joined ${member.guild.name}`)
		if(member.user.bot) return
		const role = member.guild.roles.cache.find(x => x.name === "member")
			if(!role){
				return
			}else{
				member.roles.add(role)
			}
			const newMemberEmbed = new Discord.MessageEmbed()
			.setColor("00FFFF")
			.setTitle("New Member!")
			.setDescription(`${member.user} has joined the server! We hope you enjoy your stay!`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(`membercount : ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
		if(member.guild.id === "754381521854398595"){
			member.guild.channels.cache.get("862296895665340467").send({
				embeds: [newMemberEmbed] 
			})
		}	
	}
}
