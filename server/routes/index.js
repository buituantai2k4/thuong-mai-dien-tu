const UserRouter = require('./user')
const {notFound, errHandler} = require('../middlewares/errorHandler')


const initRoutes = (app) => {
    app.use('/api/user', UserRouter)


    app.use(errHandler)
    app.use(notFound)
}

module.exports = initRoutes