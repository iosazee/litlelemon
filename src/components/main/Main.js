import './Main.css';
import HomePage from '../homepage/HomePage';
import BookingPage from '../bookingpage/BookingPage';
import {Routes, Route} from 'react-router-dom'
import About from '../homepage/About';
import Specials from '../homepage/Specials';




function Main() {

   return (
        <main>
            <Routes>
                <Route path='/' element={ <HomePage />}  />
                <Route path='/booking' element={<BookingPage/>} />
                <Route path='/about' element={<About />}  />   
                <Route path='/menu' element={<Specials />}  />         
            </Routes>   
        </main>
    )
}

export default Main;