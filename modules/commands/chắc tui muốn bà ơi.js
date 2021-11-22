const fs = require("fs");
module.exports.config = {
name: "xui rủi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xui ghê")==0 || (event.body.indexOf("Xui ghê")==0)) {
		var msg = {
				body: "Chắc tui muốn bà ơi",
				attachment: fs.createReadStream(__dirname + `/cache/xuirui.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}