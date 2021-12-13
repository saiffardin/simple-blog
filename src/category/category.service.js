/* eslint-disable indent */
const Category = require('./category.model');

// create
module.exports.createCategory = async function (categoryName) {
	return Category.create(categoryName);
};

// read
module.exports.getCategories = async function () {
	return Category.find({});
};

// update
module.exports.updateCategoryById = async function (categoryId, updatedName) {
	return Category.findByIdAndUpdate(categoryId, updatedName, {new: true});
};

// delete
module.exports.deleteCategoryById = async function (categoryId) {
	return Category.findByIdAndDelete(categoryId);
};