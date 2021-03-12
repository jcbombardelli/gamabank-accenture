const paycreditHandler = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date()
    }
}

module.exports = paycreditHandler