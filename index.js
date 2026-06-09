const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
});

client.once('clientReady', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!accept')) {
    const args = message.content.split(' ');

    const discordId = args[1];
    const studentId = args[2];
    const major = args.slice(3).join(' ');

    if (!discordId || !studentId || !major) {
      return message.reply(
        'Usage: !accept <DiscordID> <StudentID> <Major>'
      );
    }

    try {
      const user = await client.users.fetch(discordId);
const guild = await client.guilds.fetch("1512878395133001910");
const member = await guild.members.fetch(discordId);

const INCOMING_STUDENT_ROLE = "1513255118932279527";

const CLASSIFICATION_ROLES = {
    Freshman: "1513257295302103111",
    Sophomore: "1513257536399085730",
    Junior: "1513257929308897310",
    Senior: "1513258398303392008"
};

await member.roles.add(INCOMING_STUDENT_ROLE);

const classification = "Freshman"; // change later if needed

if (CLASSIFICATION_ROLES[classification]) {
    await member.roles.add(CLASSIFICATION_ROLES[classification]);
}
      await user.send(`
🎓 UNIVERSITY OF ALABAMA ACCEPTANCE LETTER

Congratulations!

You have been accepted to the University of Alabama.

Student ID: ${studentId}
Major: ${major}
Classification: ${classification}
Status: Active

Roll Tide!
      `);

      await message.reply('Acceptance letter sent.');
    } catch (error) {
      console.error(error);
      await message.reply('Failed to send DM.');
    }
  }
});

client.login(process.env.TOKEN);
