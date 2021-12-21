import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import InputForm from "./InputForm";

interface ClientFormProps {
    cliente: Cliente
    cancel?: () => void
    clientChanged?: (cliente: Cliente) => void
}

export default function ClientForm(props: ClientFormProps) {
    const codigo = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {codigo ? (
                <InputForm
                    readOnly
                    type="text"
                    text="Código"
                    value={codigo}
                    className="mb-4"
                />)
                : false}
            <InputForm
                type="text"
                text="Nome"
                value={nome}
                onChange={setNome}
                className="mb-4"
            />
            <InputForm
                type="number"
                text="Idade"
                value={idade}
                className="w-1/6"
                onChange={setIdade}
            />
            <div className="flex justify-end mt-4">
                <Button
                    onClick={() => props.clientChanged?.(new Cliente(nome, +idade, codigo))}
                    className="w-1/6 mr-4 bg-blue-500"
                >
                    {codigo ? 'Edit' : 'Save'}
                </Button>
                <Button
                    className="w-1/6 mr-4 bg-gray-500"
                    onClick={props.cancel}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}