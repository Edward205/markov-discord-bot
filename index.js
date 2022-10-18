const { Client, GatewayIntentBits  } = require('discord.js');
const { spawn, stdin, stdout } = require('node:child_process');
const ls = spawn('./ai/cgbot', ['<@1013881714243805254>']);
ls.stdin.setEncoding('utf-8');
ls.stdout.pipe(process.stdout);

let client = new Client({ intents: [
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,]});

var canal_mesaje, incarcat = false;

ls.stdout.on('data', (data) => {
  let text = data.toString();
  text = text.replaceAll("@[???] vreau spam de pinguri", "<@&1013209767306612816>").replaceAll("__n__", "\n");
  if(canal_mesaje != undefined)
    if(text || !text.length === 0 || text != "Pregatit")
        canal_mesaje.send(`${text}`);
});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          client.login('***');

client.on("ready", async () => {
  console.log("conectat la discord");
  client.channels.fetch("1013121757261074564").then(channel => {
    canal_mesaje = channel;
  });
});

client.on('messageCreate', async (message) => {
  console.log(message.content.replaceAll("\n", "__n__").replaceAll("<@1013881714243805254> ", "<@1013881714243805254>") + "\n");
  //canal_mesaje = message.channel;
  ls.stdin.cork();

  ls.stdin.write("user " + message.content.replaceAll("\n", "__n__").replaceAll("<@1013881714243805254> ", "<@1013881714243805254>") + "\n");

  ls.stdin.uncork();

});
