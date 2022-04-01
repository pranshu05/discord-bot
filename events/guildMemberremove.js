const Discord = require('discord.js')

module.exports = {
	name: "guildMemberRemove",
	async execute(member) {

		console.log(member.user)

		const newMemberEmbed = new Discord.MessageEmbed()
			.setColor("00FFFF")
			.setTitle("Member left")
			.setDescription(`${member.user} had left the server`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
		
			if(member.guild.id === "754381521854398595"){
				member.guild.channels.cache.get("926477966555381860").send({
					embeds: [newMemberEmbed] 
				})
			}
			
	}

}
