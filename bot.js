require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,            // Tarvitaan yleiseen palvelimen käyttöön
      GatewayIntentBits.GuildMessages,    // Tarvitaan viestien lukemiseen
      GatewayIntentBits.MessageContent,   // Pakollinen viestien sisältöön
      GatewayIntentBits.GuildMembers      // Tarvitaan, jos käsittelet jäseniä
    ],
  });

// Botti kirjautuu sisään
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Kuuntele viestejä
client.on('messageCreate', (message) => {
    // Älä reagoi omiin viesteihin tai muiden bottien viesteihin
    if (message.author.bot) return;

    // Satunnaisuus: 
    if (Math.random() < 0.01) {
        message.reply('Ni, ni');
    }

    // Muita komentoja, esim. !ping
    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
});



// Kirjaudu sisään tokenilla
client.login(process.env.DISCORD_TOKEN);
