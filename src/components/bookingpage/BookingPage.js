import BookingForm from "./BookingForm";



function BookingPage ({state, dispatch}) {
    return (
        <section>
            <BookingForm state={state}
             dispatch={dispatch}
             />
        </section>
    )
}

export default BookingPage;