const fetch = require("node-fetch");
const notionDocIdTable = "09c2dcc9304d4ffe921da61482632423";

module.exports = async () => {
    const res = await fetch(`https://potion-api.now.sh/table?id=${notionDocIdTable}`);
    const notionContent = await res.json();

    return notionContent;
}