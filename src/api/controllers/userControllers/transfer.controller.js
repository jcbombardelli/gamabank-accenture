const transferHandler = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date()
    }
}

module.exports = transferHandler