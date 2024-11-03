//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "2347078415830";
global.owner = process.env.OWNER_NUMBER || "2347078415830";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2347078415830";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0I1aGdpVHJNZzcvT3hMOXR4cEFhc2RjZEd4OGhqclpmb0F1Zkh5N1lIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlBmVEh1VmZZSHhscUd0QWVnenM0V09MRWwvelZFWDF4NEJyby9xcDhCYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQzc3eng0N1plZm1zR1Y3ZElrOElQR1l1bGw1dHV0bE5NaWc0THF4YVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSGhGL2tMT3RTc1AzanVvSjVvT3dDY0xKcmpTU1dKc3JTT1l6NXZiM2s0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFOTRvcFJkSEVFVmUyT3lHR2IxbU5mRlZIaWhzUDVGeUw2UlIyTVBubDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4U2xTU0ZEZU9UWkJPN2I5Ly9SU2pXQ0daZmZCclBiaGpYTkpLU0RFVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZra0hVWmJrL3ZoWXc1NjEyOFE5QW81TVpjOXZpTTE5OE5pUzNlOUptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnlxRjc3YVNJYlNzOXh4K2ZiTDVxTmJHV1NKZHp0ZTVwalpyelVnbHJBQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhwMEIraDdVQTRYR3EwZjBnZUZUWjFESkhFTTlSVlFJOTlOaXRXSWp5TTRjaUpNWXRLbGg3ak1NMmhuT2g2OVM3bmZSUXBUNTZQRmlUM1pHdEEwOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Im4xSTNJMEdCZG5halBXQTZLYmMwd0FnVTZkYUk2Q09TQkVFeXREUXViMW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikhab0FuUVZ0U3pxN2RGczVkaklxY2ciLCJwaG9uZUlkIjoiZDBhMzU2OWQtNDViZS00MWZhLTk2NWYtZDA0ZDM2YTE5MDg1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5EVnM0eFNFdDFPYllrNUdua05YNHpQTnB6az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEYnU4OEwyTEJYT3JER0xCcXRvV3RVYVlTWVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOU5BU0YzNlAiLCJtZSI6eyJpZCI6IjQ0NzcxNjYyNTYzMDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktJTkdWWUJFWiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzdoMVlBSEVOdXVuN2tHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS2l0SUNDby83eHRNUVdlVTNqcGo0UjZNNGZaeGMyQUlwMXE5MkNoSGVYQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidk41dmR3YnVFN01XWWxQMHVmcUtvR1ZaQTBTV2tNK1kvU3FMYXFPSFppSUwxTHB0N3BZMzE0aHl3RUQvRldRZ2o5cGYzT01kZUdzSGo5bWl0MTQyQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9XN3RWa3F3MXBRODdzUnVTbkxPVW9OZHNodHFtZnBlMkVIRlFNZ3RPaitvV2RzMnFnVGkxdG1oWWhWbWc5S0toTk0wb0R1WG5zMlh3cDM4dzBtREFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDQ3NzE2NjI1NjMwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU29yU0FncVArOGJURUZubE40NlkrRWVqT0gyY1hOZ0NLZGF2ZGdvUjNsdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDY2NDI5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPU20ifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
