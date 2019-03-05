/* ******************************* *\
  __  __  ___  ___  _   _ _    ___ ___ 
 |  \/  |/ _ \|   \| | | | |  | __/ __|
 | |\/| | (_) | |) | |_| | |__| _|\__ \
 |_|  |_|\___/|___/ \___/|____|___|___/
                                       
\* ******************************* */

const discord = require('discord.js');
const yaml = require('js-yaml');
const fs = require('fs-extra');

/* ******************************* *\
  ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
                                              
\* ******************************* */

const config = yaml.safeLoad(fs.readFileSync('./src/config.yml', 'utf8'))

const bot = new discord.Client({
    disableEveryone: true,
    disabledEvents: ["TYPING_START"]
})

/* ******************************* *\
  _____   _____ _  _ _____ ___ 
 | __\ \ / / __| \| |_   _/ __|
 | _| \ V /| _|| .` | | | \__ \
 |___| \_/ |___|_|\_| |_| |___/
                               
\* ******************************* */


var used = false

bot.on('message', async (msg) => {
    var prefix = config.prefix
if (used == false){
    used = true
    if (msg.content.startsWith(prefix + 'impersonate')){
        let user = /\B(\$impersonate.)+(\d+)/gui.exec(msg.content)
        if (user.length > 0){
            var imp = bot.users.get(user[2])
            if (imp){
                await bot.user.setUsername(imp.username)
                await bot.user.setStatus(imp.presence.status)
                if (imp.presence.activity){
                    bot.user.setPresence({activity: {name: imp.presence.activity.name, type: imp.presence.activity.url}})
                }
                await bot.user.setAvatar(imp.avatarURL())
            }
        }
    }
}else if(used == true){
    setTimeout(() => {
        used = false
    }, 60000);
}
    
})


bot.login(config.token)


