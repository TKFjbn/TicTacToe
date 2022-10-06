
import React, {useState,useEffect} from "react"
import Button from "./Button"


const Celdas = () => {
    const [tablero, setTablero] = useState([
        [{id:"a1",estado:""},{id:"a2",estado:""},{id:"a3",estado:""}],
        [{id:"b1",estado:""},{id:"b2",estado:""},{id:"b3",estado:""}],
        [{id:"c1",estado:""},{id:"c2",estado:""},{id:"c3",estado:""}]
    ])

    //useState

    const [player, setPlayer] = useState(false)
    const [win, setWin] = useState(false)

    //useEffect
    
    useEffect(() => {
        setPlayer(!player)
    },[tablero])

    useEffect(() => {
        setWin(victory())
    },[player])


    //funcion de victoria

    const victory = () =>{

        let vicH = false
        let vicV = false
        let vicD = false

        for (let index = 0; index < tablero.length; index++) {

            let unicoL = tablero[index][0].estado === "" ? "A" : tablero[index][0].estado;
            let totalH = 0

            for (let el = 0; el < tablero[index].length; el++) {

                //victoria horizontal

                if(tablero[index][el].estado === unicoL){
                    totalH += 1
                }
                if(totalH === 3){
                    vicH = true
                    totalH = 0
                    break
                }

                //victoria vertical

                if(index === tablero.length-1){
                    let inicioH = tablero[index][el].estado === "" ? "A": tablero[index][el].estado;
                    if(inicioH === tablero[index-1][el].estado && inicioH === tablero[index-2][el].estado){
                        vicV = true
                        break
                    }

                    //victoria diagonal
                    
                    if(el === tablero[index].length-1){
                        let inicioD = tablero[index][0].estado === "" ? "A": tablero[index][0].estado;
                        if(inicioD === tablero[index-1][1].estado && inicioD === tablero[index-2][2].estado){
                            vicD = true
                            break
                        }
                        let inicioD2 = tablero[index][el].estado === "" ? "A": tablero[index][el].estado;
                        if(inicioD2 === tablero[index-1][1].estado && inicioD2 === tablero[index-2][0].estado){
                            vicD = true
                            break
                        }
                    }
                }
            }
            if(vicH || vicV || vicD ){break}
        }

        if(vicH || vicV || vicD){
            return true
        }else{
            return false
        }
    }

    return(
        <> 
        <div className="marcador">Ganador: {win ? player ? "O": "X" : ""}</div>

        <section className="tablero">
            {
                Array.isArray(tablero) && Array.isArray(tablero[0]) ?
                tablero.map((e, indice) => e.map((r,celda) =>
                    <Button key={r.id}text={r.estado} data={[tablero,indice,celda,player]} setData={setTablero}/>
                 )) : <div></div>
            } 
        </section>

        </>
    )
}

export default Celdas

//<h1>Ganador: {win ? player ? "O": "X" : ""}</h1>