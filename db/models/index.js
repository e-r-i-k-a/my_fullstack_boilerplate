const db = require('../../db')
const Sequelize = require('sequelize');

let User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
	},
	email: {
		type: Sequelize.STRING
	}
})

let Campus = db.define('campus', {
})

// associations:
User.belongsTo(Campus);
		//CampusId added to User table
Campus.hasMany(User);

module.exports = {User, Campus}
