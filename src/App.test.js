import { render, screen, fireEvent, getByText } from '@testing-library/react';
import BookingPage from './components/bookingpage/BookingPage';
import BookingForm from './components/bookingpage/BookingForm';


test('renders the BookingPage Heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText('Table Reservation Form');
  expect(headingElement).toBeInTheDocument();
});

test('Reservation confirmed. Thank you', () => {

  const {getByText} = render (<BookingForm/>);

  fireEvent.click(getByText('Make your reservation'));

  expect(getByText('Make your reservation')).toBeInTheDocument()
})

test('the submit button', () => {
  const handleSubmit = jest.fn();

  render (<BookingForm />)

  const timeInput = screen.getByDisplayValue('17:00');
  fireEvent.change(timeInput, {target: {value: '18:00'}})

  const submitBtn = screen.getByRole('button')
  fireEvent.click(submitBtn)

  expect(handleSubmit).toBeCalled()
  expect(submitBtn).toHaveAttribute("disabled")


})