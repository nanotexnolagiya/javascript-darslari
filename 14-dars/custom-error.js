

class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFoundError'
    }
}

class UserNotFoundError extends NotFoundError {
    constructor (userId) {
        super(`${userId} raqamli faydalanuvchi topilmadi.`)
        this.name = 'UserNotFoundError'
        this.userId = userId
    }
}

try {
    function loadUser(id) {
        throw new UserNotFoundError(id)
    }
    loadUser(234)
} catch (error) {
    console.log('Error name: ', error.name)
    console.log('Error message:', error.message)
    console.log('Searched user id:', error.userId)
    console.log('Error stack:', error.stack)
}