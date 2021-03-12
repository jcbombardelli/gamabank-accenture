

const userHandler = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date()
    }
}

module.exports = userHandler