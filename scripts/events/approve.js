const fs = require('fs');
const langs = {
  vi: {
    rubishapproval: `
⚠ | This group isn't approved

You can't use bot without Admin permission 🙅

Bot will leave this group between 20 seconds🏃‍♂️

Inbox my owner to get approval❤️‍🔥
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

Owner FB ➠  www.facebook.com/mdromeoislamrasel.5
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
  },
  en: {
    rubishapproval: `
⚠ | This group isn't approved

You can't use bot without Admin permission 🙅

Bot will leave this group between 20 seconds🏃‍♂️

Inbox my owner to get approval❤️‍🔥
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

Owner FB ➠www.facebook.com/mdromeoislamrasel.5 
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
  }
};
module.exports = {
  'config': {
    'name': "approve",
    'version': "2.0",
    'author': "RUBISH",
    'category': "events"
  },
  'langs': langs,
  'onStart': async ({
    event: _0x66ece0,
    api: _0x284095,
    getLang: _0x49e10d
  }) => {
    if (_0x66ece0.logMessageType == "log:subscribe") {
      return async function () {
        const {
          threadID: _0x4fb1bd
        } = _0x66ece0;
        const _0x41fe3e = JSON.parse(fs.readFileSync("threadApproved.json"));
        if (!_0x41fe3e.includes(_0x4fb1bd)) {
          const _0x3997e2 = _0x284095.getCurrentUserID();
          _0x284095.sendMessage({
            'body': _0x49e10d("rubishapproval"),
            'mentions': [{
              'tag': "Admin",
              'id': _0x3997e2
            }]
          }, _0x4fb1bd);
          setTimeout(() => {
            const _0x293ba2 = JSON.parse(fs.readFileSync("threadApproved.json"));
            if (!_0x293ba2.includes(_0x4fb1bd)) {
              _0x284095.removeUserFromGroup(_0x3997e2, _0x4fb1bd);
            }
          }, 20000);
        }
      };
    }
  }
};