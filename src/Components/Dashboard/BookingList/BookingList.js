import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { userContext } from '../../../App'
import BookingCard from './BookingCard/BookingCard';
import { Spinner } from 'react-bootstrap';

const BookingList = () => {
    const [bookingList, setBookingsList] = useState([])
    const [loggedInUser, setloggedInUser] = useContext(userContext)

    console.log(loggedInUser.email);
    useEffect(() => {
        fetch(`http://localhost:5050/showBookings?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setBookingsList(data)
            })
    }, [loggedInUser.email])

    console.log(bookingList);
    return (
        <div className="row">
            <SideBar></SideBar>
            <div className="col-10 background-color">
                <h3 style={{ fontWeight: '700' }} className="text-center py-4">Booking List</h3>
                <div className="row d-fex justify-content-around">
                    {
                        bookingList.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                            : bookingList.map(booking => <BookingCard booking={booking} key={booking._id}></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;