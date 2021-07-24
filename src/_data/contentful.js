const contentful = require('contentful');

module.exports = async () => {
    const client = contentful.createClient({
        space: apiKeys[0].spaceID,
        accessToken: apiKeys[0].accessToken
    });

    const content = async () => {
        client.getSpace()
            .then((space) => console.log(space))
            .catch(console.error)
    }
    return content;
}