/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    pet_name: DataTypes.STRING,
    owner_id: DataTypes.INTEGAR,
    pet_type: DataTypes.STRING,
    image: DataTypes.VARBINARY,
    about_me: DataTypes.STRING,
    location: DataTypes.STRING,
    createdAt: {
      field: "created",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "modified",
      type: DataTypes.DATE,
    }
  });
  return Pet;
};