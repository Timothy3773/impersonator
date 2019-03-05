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
    disabledEvents: ["TYPING_START"],
    presence: {status: "online", activity: {name: '$help', type: "STREAMING", url: "https://i.kym-cdn.com/entries/icons/original/000/025/526/gnome.jpg"}}
})

/* ******************************* *\
  _____   _____ _  _ _____ ___ 
 | __\ \ / / __| \| |_   _/ __|
 | _| \ V /| _|| .` | | | \__ \
 |___| \_/ |___|_|\_| |_| |___/
                               
\* ******************************* */

bot.on('message', (msg) => {
    var prefix = config.prefix

    if (msg.content.startsWith(prefix + 'impersonate')){
        let user = /\B(\$impersonate.)+(\d+)/gui.exec(msg.content)
        if (user.length > 0){
            msg.channel.send(bot.users.get(user[2]).tag)
        }
    }
})


bot.login(config.token)


