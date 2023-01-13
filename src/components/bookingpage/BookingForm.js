import './BookingPage.css';



const BookingForm = ({state, dispatch, initialState}) => {



    const handleChange = (e) => {
        dispatch({
            type: e.target.name,
            payload: e.target.value,
        })
    }

    const clearForm = () => {
        dispatch({
            type: 'clearForm',
            payload: initialState,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Reservation confirmed. Thank you.');
        clearForm();
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit} aria-label='booking form'>
                <fieldset>
                <div className='field'>
                    <label htmlFor="res-date">Choose date</label>
                    <input type='date' id="res-date" name='date'
                    value={state.date} onChange={handleChange} />
                </div>
                <div className='field'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={state.reservationTime} 
                            onChange={handleChange} 
                            name='reservationTime'>
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
                    <input type="number" placeholder="1" min="1" max="10" name='noOfGuests'
                    id="guests" value={state.noOfGuests} onChange={handleChange}/>
                </div>
                <div className='field'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={state.occasion} onChange={handleChange} name='occasion'>
                        <option value={'birthday'}>Birthday</option>
                        <option value={'anniversary'}>Anniversary</option>
                        <option value={'engagement'}>Engagement</option>
                    </select>
                </div>
                    <input type='submit' value='Make your reservation' className='button'/>
                </fieldset>
            </form>
        </section>
    )
}

export default BookingForm;