require('dotenv').config();
const axios = require('axios');
const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

client.on('ready', () => {
    console.log('El bot está listo')
})

// fetch('https://pydolarvenezuela-api.vercel.app/api/v1/dollar/unit/enparalelovzla')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.price_old);
//         // Use the retrieved data here
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle any errors here
//     });

client.on('messageCreate', async (message) => {
    if (message.content === 'Hola') {
        message.reply({
            content: 'Bienvenidos a nuestro canal'
        })
    } else if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    } else if (message.content === 'frase') {
        let response = await axios.get('https://api.quotable.io/random');
        const quote = response.data.content;

        message.reply({
            content: quote
        })
    } else if (message.content === 'dolar') {
        let response = await axios.get('https://pydolarvenezuela-api.vercel.app/api/v1/dollar/unit/enparalelovzla');
        const dollar = JSON.stringify(response.data.price);

        message.reply({
            content: `El precio del dólar hoy es de $${dollar}`
        })
    }
})

client.login(process.env.DISCORD_BOT);