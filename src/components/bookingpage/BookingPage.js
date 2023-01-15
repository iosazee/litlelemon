import BookingForm from "./BookingForm";





function BookingPage ({state, dispatch}) {

    
    return (
        <section className='book'>
            <h1>Table Reservation Form</h1>
            <BookingForm 
                state={state} dispatch={dispatch}
            />
        </section>
    )
}

export default BookingPage;