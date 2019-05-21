module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};



// User.associate = function(models) {
// Associating Users with Pets
// When an User is deleted, also delete any associated Pets
//   User.hasMany(models.Pet, {
//     onDelete: "cascade"
//   });
// };