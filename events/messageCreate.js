module.exports = {
    name: "messageCreate",
    async execute(message){
        const msg = message
        if(!msg) return
        if (msg.author.bot) return
       if(msg.channel.id === 958621708707856394){
            const thread = await channel.threads.create({
	                        name: 'Welcome',
	                        autoArchiveDuration: 60,
                        })
            console.log(`Created thread: ${thread.name} in ${message.channel}`)
       }else{
       		msg.reply(`${msg.content}`)
       }
  }
} 
