import styles from "../CarDetails/CarDetails.module.css"
import React from 'react'

const  CarDetails =({Car}) => {
    return (
        <>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {Car.modelo}</li>
            <li>Cor: {Car.cor}</li>
            <li>Ano: {Car.ano}</li>
            <li>Código do carro: {Car.id}</li>
            {Car.newCar && <p>Este carro é novo</p>}
        </ul>

        </>
    )
}

export default CarDetails