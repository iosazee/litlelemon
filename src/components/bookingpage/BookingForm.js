import './BookingPage.css';
import React, {useState} from 'react';
import { submitAPI } from '../Temp';
import { useNavigate } from 'react-router-dom';




const BookingForm = (state, dispatch) => {

    const navigate = useNavigate();
    const [resDate, setResDate] = useState("")
    const [noOfGuests, setNoOfGuests] = useState(1);
    const [occasion, setOccasiion] = useState("");
    const [isDisabled, setDisabled] = useState(false)


    
    const handleSubmit = (e) => {
        const formData = [resDate, dispatch, noOfGuests, occasion];
        submitAPI(formData);
        if (noOfGuests < 1) {
            setDisabled(false)
        }
        navigate("/confirm");
    }


    const handleChange = (e) => {
        dispatch({
            type: 'selected_date',
        })
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit} aria-label='on click'>
                <fieldset>
                <div className='field'>
                    <label htmlFor="res-date">Choose date</label>
                    <input type='date' id="res-date" name='date'
                        value={resDate} 
                        onChange={(e) => setResDate(e.target.value)}
                    />   
                </div>
                <div className='field'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={state.availTimes} 
                            onChange={handleChange} name='reservationTime'
                             >
                        <option value={'17:00'}>17:00</option>
                        <option value={'18:00'}>18:00</option>
                        <option value={'19:00'}>19:00</option>
                        <option value={'20:00'}>20:00</option>
                        <option value={'21:00'}>21:00</option>
                        <option value={'22:00'}>22:00</option>
                    </select>
                </div>
                <div className='field'>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" 
                        name='noOfGuests'id="guests" value={noOfGuests} 
                        onChange={(e) => setNoOfGuests(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} 
                        onChange={(e) => setOccasiion(e.target.value)} 
                        name='occasion' required>
                        <option value={'birthday'}>Birthday</option>
                        <option value={'anniversary'}>Anniversary</option>
                        <option value={'engagement'}>Engagement</option>
                    </select>
                </div>
                    <input type='submit' value='Make your reservation' className='button' disabled={isDisabled}/>
                </fieldset>
            </form>
        </section>
    )
}

export default BookingForm;