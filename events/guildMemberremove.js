const Discord = require('discord.js')
module.exports = {
	name: "guildMemberRemove",
	async execute(member) {
			console.log(`${member.user.username} left ${member.guild.name}`)
			const newMemberEmbed = new Discord.MessageEmbed()
			.setColor("00FFFF")
			.setTitle("Member left")
			.setDescription(`${member.user} left the srver`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(`membercount : ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
			if(member.guild.id === "754381521854398595"){
				member.guild.channels.cache.get("926477966555381860").send({
					embeds: [newMemberEmbed] 
				})
			}	
	}
}
