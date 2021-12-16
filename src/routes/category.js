const express = require('express');
const router = express.Router();
const categoryController = require('../category/category.controller');
const userController = require('../user/user.controller');

router.get('/', function (req, res) {
    return res.json({message: 'App is running : category'});
});

// category APIs
router.post('/post', userController.isAuthenticated, categoryController.createCategory);
router.get('/get', categoryController.getCategories);
router.put('/update/:id', userController.isAuthenticated, categoryController.updateCategoryById);
router.delete('/delete/:id', userController.isAuthenticated, categoryController.deleteCategoryById);

module.exports = router;