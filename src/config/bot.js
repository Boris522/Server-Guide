const { Client, IntentsBitField } = require('discord.js');

// Define the intents your bot needs. GUILD_MESSAGES is required to read messages.
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent, // Required for the bot to read message content
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from other bots
  if (message.author.bot) return;

  if (message.content.startsWith('ping')) {
    message.channel.send('pong!');
  }
});

// Log in to Discord with your app's token
client.login('YOUR_BOT_TOKEN');
