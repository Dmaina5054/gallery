var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://anacron11:y22R2poeOwXjqf2f@moringagenesis.tfixw.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://anacron11:y22R2poeOwXjqf2f@moringagenesis.tfixw.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://anacron11:y22R2poeOwXjqf2f@moringagenesis.tfixw.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
