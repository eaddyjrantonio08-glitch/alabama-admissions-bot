const { Client, GatewayIntentBits } = require(‘discord.js’);

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.DirectMessages
]
});

client.once(‘ready’, () => {
console.log(Logged in as ${client.user.tag});
});

client.on(‘messageCreate’, async (message) => {

if (message.author.bot) return;

console.log(message.content);

if (message.content.startsWith(’!accept’)) {

const args = message.content.split(' ');
const discordId = args[1];
const studentId = args[2];
const major = args.slice(3).join(' ');
try {
  const user = await client.users.fetch(discordId);
  await user.send(

`🎓 UNIVERSITY OF ALABAMA ACCEPTANCE LETTER

Congratulations!

You have been accepted to the University of Alabama.

Student ID: ${studentId}
Major: ${major}
Classification: Freshman
Status: Active

Roll Tide!`
);

  await message.reply('Acceptance letter sent.');
} catch (err) {
  console.error(err);
  await message.reply('Failed to send DM.');
}

}
});

client.login(process.env.TOKEN);
