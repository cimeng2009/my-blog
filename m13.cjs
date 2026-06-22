const fs = require("fs");
let c = fs.readFileSync("src/config/siteConfig.ts", "utf8");
const target = "calendar: true,";
const replacement = "calendar: true,\n\t\t// 番剧页面开关\n\t\tbangumi: true,\n\t\t// 书架页面开关\n\t\tbooks: true,\n\t\t// 影视游戏页面开关\n\t\tmoviesGames: true,\n\t\t// 音乐页面开关\n\t\tmusicPage: true,\n\t\t// 更新日志页面开关\n\t\tchangelog: true,\n\t\t// 动态页面开关\n\t\tmoments: true,\n\t\t// 后台管理页面开关\n\t\tadmin: true,\n\t\t// 日常规划页面开关\n\t\tlifeRoutines: true,\n\t\t// 旅行足迹页面开关\n\t\tlifePlaces: true,\n\t\t// 笔记本页面开关\n\t\tlifeNotebooks: true,";
c = c.replace(target, replacement);
fs.writeFileSync("src/config/siteConfig.ts", c, "utf8");
console.log("siteConfig pages updated");
