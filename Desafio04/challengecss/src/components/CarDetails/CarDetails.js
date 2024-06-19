import style from "../CarDetails/CarDetails.module.css"
const  CarDetails =({cars}) => {
    return (
        <>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {cars.modelo}</li>
            <li>Cor: {cars.cor}</li>
            <li>Ano: {cars.ano}</li>
            <li>Código do carro: {cars.id}</li>
            {cars.newCar && <p>Este carro é novo</p>}
        </ul>

        </>
    )
}

export default CarDetails