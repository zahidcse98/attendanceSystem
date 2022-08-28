const router = require('express').Router();
const usersController = require('../controller/users')

/**
 * get user by id or email
 */
router.get('/:userId', usersController.getUserById);

/**
 * update user by id
 * @method PUT
 */
router.put('/:userId', usersController.putUserById);

/**
 * update user by id
 * @method PATCH
 */
router.patch('/:userId', usersController.patchUserById);

/**
 * delete user by i
 * 
 */
router.delete('/:userId', usersController.deleteUserById);

/**
 * Get all users, include
 *  - filer
 *  - sort
 *  - pagination
 *  - select properties
 *  @method Get
 *  @route api/v1/users?sort["by","name"]
 *  @visibility private 
 */

router.get('/', usersController.getUsers);

/**
 * Create new user
 */
router.post('/', usersController.postUser);



module.exports = router;