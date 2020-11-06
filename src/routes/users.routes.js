const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
    return response.status(200).json({ message: 'Hello world' })
});

module.exports = usersRouter;