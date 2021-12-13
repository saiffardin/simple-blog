const express = require('express');
const router = express.Router();
const categoryController = require('../category/category.controller');

router.get('/', function (req, res) {
  return res.json({message: 'App is running : category'});
});

// category APIs
router.post('/post', categoryController.createCategory);
router.get('/get', categoryController.getCategories);
router.put('/update/:id', categoryController.updateCategoryById);
router.delete('/delete/:id', categoryController.deleteCategoryById);

module.exports = router;