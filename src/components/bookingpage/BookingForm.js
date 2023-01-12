import './BookingPage.css';
import React, {useState} from 'react';

const BookingForm = () => {

    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    const [form, setForm] = useState({
        date: '',
        time: availableTimes[0],
        noOfGuests: '',
        occasion: '',
    });

    const handleChange = (e) => {
       setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
    }

    const clearForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Reservation confirmed. Thank you.');
        clearForm();
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <div className='field'>
                    <label htmlFor="res-date">Choose date</label>
                    <input type='date' id="res-date" name='date'
                    value={form.date} onChange={handleChange}/>
                </div>
                <div className='field'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={form.time} onChange={handleChange} name='time'>
                        <option value={availableTimes[0]}>17:00</option>
                        <option value={availableTimes[1]}>18:00</option>
                        <option value={availableTimes[2]}>19:00</option>
                        <option value={availableTimes[3]}>20:00</option>
                        <option value={availableTimes[4]}>21:00</option>
                        <option value={availableTimes[5]}>22:00</option>
                    </select>
                </div>
                <div className='field'>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" name='noOfGuests'
                    id="guests" value={form.noOfGuests} onChange={handleChange}/>
                </div>
                <div className='field'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={form.occasion} onChange={handleChange} name='occasion'>
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