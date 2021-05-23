const fetch = require("node-fetch");
const notionDocIdTable = "09c2dcc9304d4ffe921da61482632423";

module.exports = async () => {
    //Get post data table from Notion
    const res = await fetch(`https://potion-api.now.sh/table?id=${notionDocIdTable}`);
    const notionContent = await res.json();

    //Get 
    for (post of notionContent) {
        const postHTML = await fetch(`https://potion-api.now.sh/html?id=${post.id}`);
        const postText = await postHTML.text();
        post.fields.text = postText;
    }

    const dataObject = {
        notionData: notionContent
    }
    return JSON.stringify(dataObject);
}