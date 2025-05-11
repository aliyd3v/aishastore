const authController = {
    authentication: (req, res) => {
        const { body } = req
        try {
            const { username, password } = body
            if (!username || !password) {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Username or password cannot be empty!'
                })
            }
        } catch (error) {
            console.error()
        }
    },
    authorization: (req, res, next) => {
        try {
            next()
        } catch (error) {
            console.error()
        }
    },
    registration: (req, res) => {
        const { body } = req
        try {
            const { username, password } = body
            if (!username || !password) {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Username or password cannot be empty!'
                })
            }

            console.log(body)
        } catch (error) {
            console.error()
        }
    }
}

module.exports = authController