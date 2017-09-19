import React from 'react'
import './TicketCard.css'

const TicketCard = ({ flight }) => {
  const arrivalDate = new Date(flight.arrival)
  const departureDate = new Date(flight.departure)
  const arrivalTime = arrivalDate.toTimeString().slice(0, 5)
  const departureTime = departureDate.toTimeString().slice(0, 5)
  const arrivalDateString = arrivalDate.toLocaleDateString();
  const departureDateString = departureDate.toLocaleDateString();

  return (
    <div className='ticket-card'>
      <div className='ticket-card__icon'>
        <span role="img">✈️</span>
      </div>
      <div className='ticket-card__info'>
        <span className='ticket-card__time'>
          {arrivalTime}
        </span>
        <div className='ticket-card__info-container'>
          <span className='ticket-card__date'>{arrivalDateString}</span>
          <span>{flight.direction.from}</span>
        </div>
      </div>
      <div className='ticket-card__info'>
        <span className='ticket-card__time'>
          {departureTime}
        </span>
        <div className='ticket-card__info-container'>
          <span className='ticket-card__date'>{departureDateString}</span>
          <span>{flight.direction.to}</span>
        </div>
      </div>
      <div className='ticket-card__carrier'>
        <span className='ticket-card__carrier-label'>{flight.carrier}</span>
      </div>
    </div>
  )
}

export default TicketCard
