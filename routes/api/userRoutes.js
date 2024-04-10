const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createNewUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends')
  .post(addFriend);

router
  .route('/:userId/friends/:friendId')
  .delete(deleteFriend);


module.exports = router;