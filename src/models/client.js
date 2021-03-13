class Client {
    constructor({clientEmail, clientPassword,  clientSalt, clientCod, clientName, clientCPF, clientStatus, clientCreatedDate}){
        if(!clientStatus){
            clientStatus = "Active"
        }
        this.id = id
        this.clientEmail = clientEmail,
        this.clientPassword = clientPassword,
        this.clientSalt = clientSalt,
        this.clientCod = clientCod, 
        this.clientName = clientName,
        this.clientCPF = clientCPF,
        this.clientStatus = clientStatus,
        this.clientCreatedDate = clientCreatedDate
    }
}

module.exports = Client


