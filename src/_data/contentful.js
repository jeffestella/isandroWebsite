const contentful = require('contentful');

const client = client.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

const content = async () => {
    client.getSpace()
    .then((space) => console.log(space))
    .catch(console.error)
}

export default content; 