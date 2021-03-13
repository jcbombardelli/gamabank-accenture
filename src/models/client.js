class Client {
    constructor({clientCod, clientName, clientCPF, clientStatus, clientCreatedDate}){
        if(!clientStatus){
            clientStatus = "Active"
        }
        this.clientCod = clientCod,
        this.clientName = clientName,
        this.clientCPF = clientCPF,
        this.clientStatus = clientStatus,
        this.clientCreatedDate = clientCreatedDate
    }
}

module.exports = Client

