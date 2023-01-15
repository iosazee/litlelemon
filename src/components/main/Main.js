import './Main.css';
import HomePage from '../homepage/HomePage';
import BookingPage from '../bookingpage/BookingPage';
import {Routes, Route} from 'react-router-dom'
import About from '../homepage/About';
import Specials from '../homepage/Specials';
import ConfirmedBooking from '../bookingpage/ConfirmedBooking';
import React, {useReducer, useEffect} from 'react';




const initializeTimes = () => {

    const intialTimes = ""

    return {initialTimes: intialTimes}
}

const updateTimes = (state, action) => {
    if (action.type === 'selected_date') {

        return {availTimes: state.initialTimes}
    }

}


function Main() {

    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

   

    useEffect(() => {
        console.log(state)
    })

    

   return (
        <main>
            <Routes>
                <Route path='/' element={ <HomePage />}  />
                <Route path='/booking' element={<BookingPage 
                    state={state} dispatch={dispatch}
                   
                />} />
                <Route  path='/confirm' element={<ConfirmedBooking />} />
                <Route path='/about' element={<About />}  />   
                <Route path='/menu' element={<Specials />}  />         
            </Routes>   
        </main>
    )
}

export default Main;