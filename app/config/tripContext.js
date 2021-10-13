import React, {useContext, usestate } from 'react'

const TripContext = React.createContext()

export function tripSelector({ children }) {
    
    const [oneTrip, setOneTrip] = useState([])
    
    function selectTrip = async(_id) => {
        const foundTrip = await fetch("http://10.0.0.89:9000/trips/" + _id)
        const parsedTrip = await foundTrip.json()
        setOneTrip(parsedTrip)
    }

    return (
        <TripContext.Provider value={oneTrip}>
            {children}
        </TripContext.Provider>
    )
}