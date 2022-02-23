import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Booking() {
    const onPressBtn = (e) => {
        console.log(e)
    }
    const room = "A101"
    return (
        <div className="Booking">
            <div className='buttonView'>
                <Link to={`/booking/${"A101"}`}>
                    <button className='button' onClick={() => onPressBtn("A101")}>
                        A101
                    </button>
                </Link>
                <Link to={`/booking/${"A102"}`}>
                    <button className='button' onClick={() => onPressBtn("A102")}>
                        A102
                    </button>
                </Link>
                <Link to={`/booking/${"Auditorium"}`}>
                    <button className='button' onClick={() => onPressBtn("Auditorium")}>
                        Auditorium
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Booking;

