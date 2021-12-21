import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/clienteCollection"
import Cliente from "../core/Cliente"
import ClienteRepository from "../core/ClienteRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClientes() {
    const repo: ClienteRepository = new ClientCollection

    const { tableVisible, showForm, showTable } = useTableOrForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.clienteVazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll()
            .then(clientes => {
                setClientes(clientes)
                showTable()
            })
    }

    function selectClient(cliente: Cliente) {
        setCliente(cliente)
        showForm()
    }

    async function deleteClient(cliente: Cliente) {
        await repo.delete(cliente)
        getAll()
    }

    async function saveClient(cliente: Cliente) {
        console.log('entrou')
        await repo.save(cliente)
        getAll()
    }

    function newClient() {
        setCliente(Cliente.clienteVazio())
        showForm()
    }

    return {
        cliente, clientes, selectClient, newClient, saveClient, deleteClient, getAll, tableVisible, showTable
    }
}