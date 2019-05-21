module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
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