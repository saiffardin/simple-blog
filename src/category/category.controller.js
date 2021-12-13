const categoryService = require('./category.service');

// create
module.exports.createCategory = async function (req, res) {
  const categoryName = req.body;
  console.log('categoryName:', categoryName);
  const createdCategory = await categoryService.createCategory(categoryName);
  return res.status(200).json(createdCategory);
};

// read
module.exports.getCategories = async function (req, res) {
  const categories = await categoryService.getCategories();
  return res.json(categories);
};

// update
module.exports.updateCategoryById = async function (req, res) {
  const categoryId = req.params.id;
  const update = req.body;
  const updatedCategory = await categoryService.updateCategoryById(categoryId, update);

  return res.json(updatedCategory);
};

// delete
module.exports.deleteCategoryById = async function (req, res) {
  const categoryId = req.params.id;
  const deletedCategory = categoryService.deleteCategoryById(categoryId);
  return res.json(deletedCategory);
};