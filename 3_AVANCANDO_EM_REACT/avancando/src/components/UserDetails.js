import React from 'react'

function UserDetails({id, nome,idade, profissão}) {
    return (
    <div>
        <h2>Pessoas</h2>
        <ul>
            <li>Identificação: {id}</li>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissão}</li>
        </ul>
    </div>
    )
}

export default UserDetails