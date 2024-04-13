const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "dalle3",
    aliases: ["dalle","bing","create","imagine"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images powerby by Dalle3",
    longDescription: "Generate images by Unofficial Dalle3",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const fff = ["1cqpZfSOzYqUTm3C8Hn3ImF24VeZ3ARtBrRCTcjVgD21mqFuXumXrRHYlyz_drrvyXu4qRaTdvqezFNvghONvLDlZUCxQnEH8GLe6Ng6qxVTWkgxTwmYoPqiXaZJBCJ-bMKhKgHd9nBdykL-pcR-g0EeilB2qShWovsIJEuZhqJgPXUGDGezJSmrd42ZgtHsAupOZZmqEZtRjt6zOOqXTf3KurOo3oGAIo06nLZhWvQQ","1sa7Nzl9zeL4YwLec_56LTmZlDZ7FhRhAdzqb6UNp7UEqIP0yea-be5AfYoyHBewzS2BS3mSFka2s-tLpQLaDVy67ooJq34JB2GKbeo9cYq5iagzPwke-8yx6VdjFRjxf4K6WMNjtIZmGq_6u_Bs9aCpRzTRJt6nQzI2qSMy42t1-wmCLblcIvn71LBZVYLPZeRCCZ9ofKQYog5xfBUILNg" ]
      const col = fff[Math.floor(Math.random() * fff.length)]
      const w = await api.sendMessage("Wait For Image Generating < 😽", event.threadID);
  
const response = await axios.get(`${global.GoatBot.config.api}/dalle?prompt=${prompt}&key=dipto008&cookies=${col}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dvassests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ | Here's Your Generated Photo<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }
}