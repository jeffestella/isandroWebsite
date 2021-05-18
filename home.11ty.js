exports.data = {
    title: "Welcome to the Blog"
}

exports.render = () => {
    return `
    <h1>${data.title}</h1>
    <p>Lorem</p>
    `
}

// {% for blog in collections.blog%}
// - [{{blog.data.title}}]({{blog.data.url}})

// {% endfor %}