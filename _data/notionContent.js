const fetch = require("node-fetch");

module.exports = async () => {
    const notionDocIdTable = "09c2dcc9304d4ffe921da61482632423";

    const res = await fetch(`https://potion-api.now.sh/table?id=${notionDocIdTable}`);
    const notionContent = await res.json();

    for (let post of notionContent) {
        const postData = await fetch(`https://potion-api.now.sh/html?id=${post.id}`);
        post.fields.text = await postData.text();
    }

    return notionContent
}


