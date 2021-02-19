import Header from '../../shared/components/Header/Header'
import Footer from '../../shared/components/Footer/Footer'
import { Button } from '../../shared/styledComponents/index'
import React from 'react'
import BookingsConsult from '../../components/bookingsConsult/BookingsConsult'

const Booking = () => {

    return(
    <>
        <Header/>
        <BookingsConsult/>
        
        <Button 
            negativeMargin={-5} 
            width={250}
            onClick={()=>{}}
        >
        CONSULTAR
        </Button>
        <Footer />
    </>
    )
}
export default Booking;