
const CBot = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''
 
  if (config.LANG == 'EN') {
    
    plk_desc = 'change reply message BGM mode'
    BGM_ONE = '๐๐๐ ๐ญ๐ฒ๐ฉ๐ ๐๐ก๐ฎ๐ง๐ ๐๐ ๐ญ๐จ ๐ญ๐๐ ๐ฆ๐จ๐๐ ๐๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ 5 ๐๐ข๐ง ๐ญ๐จ ๐ซ๐๐ฌ๐ญ๐๐ซ๐ญ'
    BGM_TWO = '๐๐๐ ๐ญ๐ฒ๐ฉ๐ ๐๐ก๐ฎ๐ง๐ ๐๐ ๐ญ๐จ ๐๐ง๐ ๐ฆ๐จ๐๐ ๐๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ 5 ๐๐ข๐ง ๐ญ๐จ ๐ซ๐๐ฌ๐ญ๐๐ซ๐ญ แด แดสษชาษชแดแดแดษชแดษด แดษชแดแด แดแดแดแดแด โ๏ธ'
    }

    if (config.LANG == 'ML') {
      
      plk_desc = 'เดฎเดฑเตเดชเดเดฟ bgm เดฎเตเดกเต เดฎเดพเดฑเตเดฑเดพเตป'
      BGM_ONE = '๐๐๐ เดคเดฐเด เดเดจเตเดจเดพเด เดฎเตเดกเดฟเดฒเตเดเตเดเต เดฎเดพเดฑเตเดฑเดฟ'
      BGM_TWO = '๐๐๐ เดคเดฐเด เดฐเดฃเตเดเดพเด เดฎเตเดกเดฟเดฒเตเดเตเดเต เดฎเดพเดฑเตเดฑเดฟ'
    }

 CBot.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: plk_desc, usage: '.bgm one / two' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE)
        }
    }));
