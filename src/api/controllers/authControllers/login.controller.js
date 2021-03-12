const loginHandler = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date()
    }
}

module.exports = loginHandler