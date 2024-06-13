import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Pablo", "Tais", "Neide"]);

    const [users, setUsers] = useState([
        {id:1,nome:"Matheus", age: 31 },
        {id:2, nome:"João", age:28},
        {id:3, nome: "Pedro", age: 44},
    ])

    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random() *4);

        setUsers((prevUsers)=>{
            return prevUsers.filter((user)=> randomNumber !== user.id)
        })
    }

    return (
    <>
    <ul>
        {list.map((item, i)=>(
            <li key={i}>{item}</li>
        ))}
    </ul>

    <ul>
        {users.map((user)=>(
            <li key={user.id}>
                {user.nome}, {user.age}
            </li>
        ))}
    </ul>
    <button onClick={deleteRandom}>Delete random user</button>
    </>
  )

}

export default ListRender
