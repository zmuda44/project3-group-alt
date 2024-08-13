//See comment on resolvers import. needs to imported as what they export, not the filename

const Trip = require('./tripModel');
const User = require('./userModel');

module.exports = {
    Trip,
    User,
};