
import './App.css';
import CarDetails from './components/CarDetails/CarDetails';
function App() {
  
  const MyCars = [
    {id:1, modelo: "volkswagem", cor:"Preto", ano: 2016, newCar: true},
    {id:2, modelo: "Nissan", cor:"Preto", ano: 2013, newCar: false},
    {id:3, modelo: "Renault", cor:"Preto", ano: 2024, newCar: true},
    {id:4, modelo: "Fiat", cor:"Branco", ano: 2020, newCar:false}
]
  return (
    <>
    
    <h1>Show Room</h1>
    <div className='carContainer'>
      {MyCars.map((car)=>{
        return (
          <CarDetails cars={car}/>
        )
      })}
    </div>

    </>
  )

  
}

export default App;
