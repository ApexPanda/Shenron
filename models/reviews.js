/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    title: DataTypes.STRING,
    rating: DataTypes.INTEGAR,
    review: DataTypes.STRING,
    pet_id: DataTypes.INTEGAR,
    owner_id: DataTypes.INTEGAR,
    createdAt: {
      field: "created",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "modified",
      type: DataTypes.DATE,
    }
  });
  return Review;
};