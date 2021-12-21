import Cliente from "./Cliente";

export default interface ClienteRepository {
    save(cliente: Cliente): Promise<Cliente>
    delete(cliente: Cliente): Promise<void>
    getAll(): Promise<Cliente[]>
}
