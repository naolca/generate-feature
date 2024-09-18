const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Define your schema here
});

export const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
