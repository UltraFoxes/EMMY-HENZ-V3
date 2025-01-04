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
global.gurl = process.env.GURL || "https://chat.whatsapp.com/BdYycYZb9WrIpc27L1QDgy";
global.website = process.env.GURL || "https://chat.whatsapp.com/BdYycYZb9WrIpc27L1QDgy";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "447716625630";
global.owner = process.env.OWNER_NUMBER || "447716625630";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
gloqaaabal.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "447716625630,2348056003780";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVHOTdrcGR0V0g3N0hxSXZ5T0VDdVBUZE1ZWVZFeUlOSTNMck1KNXEzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3B4Z1NzR0NKMmt1YkFPcmh0WVBmTUpqVWVlZWoyODZhN0hQTm5VdW4wVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QXpIdkdFSnNyNm1vNWU1Z2s1ZWV1VUZWREVyYXF5TUowUGw1cnB2S21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTnpNL2F3N0llY0V4TmNzbXpHTThRbFRheUsrTm5EcjNXZGtWYk5WaDM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHU0tyU2hFMEk3bVhESmNha1hMZzhuVHFFay9aNHJLN3FheTI3am8yMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJydE5Oa2hRMS9vM3dySEtkeGhQSjJXS1ZaY0tVd1Axc2pSZFg0MFVwVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZEWjQ3TnI0aUExTkFsZElRYVBwNnpEOFFVSi9NZ2M4Q0ZhODNGTGRHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzFNQ29lYmQvMERacGVKMHU4YVR6Y1lONkp1UFpBOGl0MEtFOHFWeit3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldxYjZmODVWS0pYcmxmSTlvd0pzMmc1bkFSV1hHNWdsV2VscXI0ZEFqRWpIUThMQ1F2Y0J0TDJkdURscHY4MmY0SWRwYUcyWm1XeWY3TEU4RUlOWkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJXVGNQbXFFcDZmWnl4SDlKcFNnZ3BlYXJpN3BNQjFSY0dQbVM4YjB1RmtzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4QThWWmliWlJKS212OHVlb29zWnp3IiwicGhvbmVJZCI6IjUxYzhkYmJiLWM2NzctNDUyMC04YzcwLTVhMDE3MDdiNzVmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIybkFlSXAxTWhRZEQ1Q25ydndGNlJERjFwcmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEtYWUFscm1LVHFTbktoblc0MStxTUR4RWhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik44UFZNWTdWIiwibWUiOnsiaWQiOiI0NDc3MTY2MjU2MzA6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0lOR1ZZQkVaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTE90OXdDRVBTTTU3c0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxQWdOL3QzK2hlVVBMcEJQM2NjQlhaeWorTkxHYWhmSUZjMHlITXdDd1Y4PSIsImFjY291bnRTaWduYXR1cmUiOiJ2dTdydWJrK2IzaWtoUU9RRlpFMjQ1TkVJT21Ba1pVakF6VkJVYkg0ZHRxUDZZMGF0UDJNM1M3TktBV3pTekk0enM4RitqcWtXeUdkWmlhTFRXYm1BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXc3UlRoaUVSeFM2UUJ4QWgzTEE4NVVxQ2lzY0dzTk1uTEVsMXIwYVAxeEpQZU1xcUM1c1M4M3g5Y3lrMDduQmtGNGhKMndFS1gra3lTN1BzQWRCQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDc3MTY2MjU2MzA6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWdJRGY3ZC9vWGxEeTZRVDkzSEFWMmNvL2pTeG1vWHlCWE5NaHpNQXNGZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjAzMzkyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHOFAifQ=="
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
