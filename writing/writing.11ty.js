const notionContent = require("../_data/notionContent");

exports.data = {
    title: "Selected Works",
    // pagination: {
    //     data: notionContent,
    //     size: 2
    // }
}

exports.render = (data) => {
    const publishedWriting = [];
    for (post of data.notionContent) {
        if (post.fields.published) {
            publishedWriting.push(
                `<li>${post.fields.title}<p>${post.fields.text}</p></li>`
            )
        }
    }
    

    return `
    <ul>
    ${publishedWriting.join('')}
    </ul>
    <p>
    ${notionContent}
    </p>
    `
}