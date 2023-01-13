import './Main.css';
import HomePage from '../homepage/HomePage';
import BookingPage from '../bookingpage/BookingPage';
import {Routes, Route} from 'react-router-dom'
import About from '../homepage/About';
import Specials from '../homepage/Specials';
import React, {useReducer} from 'react';




function Main() {


    
    const formReducer = (state, {type, payload}) => {
        switch (type) {
            case 'date':
                return {...state, date: payload}
            case 'reservationTime':
                return {...state, reservationTime: payload}
            case 'noOfGuests':
                return {...state, noOfGuests: payload}
            case 'occasion':
                return {...state, occasion: payload}
            case 'clearForm':
                return {...initialState, clearForm: payload}
            default:
                throw new Error()
        }
    }


    const initialState = {
        date: '',
        reservationTime: '',
        noOfGuests: '',
        occasion: '', 
    }


    const [state, dispatch] = useReducer(formReducer, initialState)
    



   return (
        <main>
            <Routes>
                <Route path='/' element={ <HomePage />}  />
                <Route path='/booking' element={<BookingPage state={state} dispatch={dispatch} />} />
                <Route path='/about' element={<About />}  />   
                <Route path='/menu' element={<Specials />}  />         
            </Routes>   
        </main>
    )
}

export default Main;