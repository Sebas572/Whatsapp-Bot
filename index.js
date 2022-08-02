const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();
const answer = {
    Hello: "Hello, my name is Bot and yous?",
    Ping: "Pong!!!"
};


client.initialize();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {
    const response = answer[message.body];

    if(response) message.reply(response);
});