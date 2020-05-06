const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/user
// @access  Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Get a single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorResponse(`User with the id ${req.params.id} has not been found`, 404));
    }

    res.status(200).json({ success: true, data: user});
});

// @desc    Create user
// @route   POST /api/v1/users
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user});
});

// @desc    Update a user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = asyncHandler(async (req, res, next) => {
    user = await User.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({ success: true, data: user});
});

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorResponse(`User with the id ${req.params.id} has not been found`, 404));
    }

    user.remove();

    res.status(200).json({ success: true, data: {} });
});