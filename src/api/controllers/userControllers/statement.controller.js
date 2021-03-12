const statementHandler = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date()
    }
}

module.exports = statementHandler