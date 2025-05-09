import React from 'react'
import BookingForm from '../components/booking/BookingForm'
import '../src/App.css';
const BookingPage = () => {
  return (
    <div>
        <div>
            <h1 >Book Your Appointment</h1>
            <p>Follow the simple steps below to book your appointment at Beauty Haven. Our team is looking forward to providing you with an exceptional experience.</p>
        </div>
        <BookingForm/>
    </div>
  )
}

export default BookingPage