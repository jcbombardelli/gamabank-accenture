const status = (request, h) => {
    return {
        status: 'running',
        timestamp: new Date(), 
        teste: "teste"
    }
}


module.exports = { status }