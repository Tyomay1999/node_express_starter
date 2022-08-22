class Service {
    protected port = process.env.PORT as string;
    protected host = process.env.HOST as string;

    getPort(): number {
        return parseInt(this.port)
    }

    getHost(): string{
        return this.host
    }
}

module.exports = {
    ServiceUtils: new Service()
}