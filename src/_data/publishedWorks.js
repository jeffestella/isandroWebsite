const fetch = require("node-fetch");

module.exports = async () => {
    const notionDocIdTable = "66ee51530bf545af9e5eb8bf023bd6c8";

    const res = await fetch(`https://potion-api.now.sh/table?id=${notionDocIdTable}`);
    const notionContent = await res.json();

    for (let post of notionContent) {
        const postData = await fetch(`https://potion-api.now.sh/html?id=${post.id}`);
        post.fields.text = await postData.text();
    }

    publishedWorks = notionContent.filter((post) => post.fields.published)

    return publishedWorks
}


