import { useState } from "react";

export default function useTableOrForm() {
    const [visivel, setVisivel] = useState<'table' | 'form'>('table')
    const showTable = () => setVisivel('table')
    const showForm = () => setVisivel('form')

    return {
        formVisible: visivel === 'form',
        tableVisible: visivel === 'table',
        showForm,
        showTable
    }
}