const { Router } = require('express');
const usersRouter = Router();
const User = require('../models/User');

// ROUTES //
// CRUD 

// Create
usersRouter.post('/', async (request, response) => {
    try {
        const { name, email } = request.body;
        const user = new User({
            name,
            email
        });

        await user.save();

        return response.json(user);
    } catch (err) {
        return response.json({ error: err })
    }
});

// Read all
usersRouter.get('/', async (request, response) => {
    try {
        const users = await User.find();

        return response.json(users);
    } catch (err) {
        return response.json({ error: err })
    }
});

// Read one by ID
usersRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const userById = await User.findById(id);

        return response.json(userById);
    } catch (err) {
        return response.json({ error: err })
    }
});

// Update
usersRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name, email } = request.body;

        const updatedUser = await User.findByIdAndUpdate(id, { name, email });

        return response.json(updatedUser);
    } catch (err) {
        return response.json({ error: err })
    }
});

// Delete
usersRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const deletedUser = await User.findByIdAndDelete(id);

        return response.status(204).send();
    } catch (err) {
        return response.json({ error: err })
    }
})

module.exports = usersRouter;