import React from 'react'
import './TicketCard.css'

const TicketCard = ({ flight }) => {
  return (
    <div className='ticket-card'>
      {flight.direction.from} - {flight.direction.to}
    </div>
  )
}

export default TicketCard
