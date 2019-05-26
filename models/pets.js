/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    service_provider: DataTypes.BOOLEAN,
    pet_owner: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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