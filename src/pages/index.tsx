import Button from "../components/Button";
import ClientForm from "../components/ClientForm";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente, clientes, selectClient, newClient, deleteClient, saveClient, tableVisible, showTable } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-gray-400 to-gray-500 
    text-white`}
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4 bg-green-500"
                onClick={newClient}
              >
                New Client
              </Button>
            </div>
            <Table
              clientes={clientes}
              clientSelected={selectClient}
              clientDeleted={deleteClient}
            />
          </>
        ) : (
          <ClientForm
            cliente={cliente}
            cancel={showTable}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
