exports.data = {
    title: "Benicio Isandro",
    layout: "layout-base.11ty.js"
}

exports.render = (data) => {
    return `
    <h1>Welcome</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita sunt nesciunt earum. Pariatur obcaecati, corporis nulla a impedit laudantium dignissimos iure quos repudiandae, adipisci dolorem molestiae quidem tempore asperiores!</p>
    `
}

// {% for blog in collections.blog%}
// - [{{blog.data.title}}]({{blog.data.url}})

// {% endfor %}