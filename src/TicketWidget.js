import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFlightsData, setCarrier } from './actionCreators'
import TicketCard from './TicketCard'

class TicketWidget extends Component {
  componentDidMount() {
    if (!this.props.flights.length) {
      this.props.dispatch(fetchFlightsData())
    }
  }

  selectCarrier = ({ target: { value } }) => {
    this.props.dispatch(setCarrier(value))
  }

  render() {
    const flights = this.props.flights
    const carriers = this.props.carriers
    const selectedCarrier = this.props.selectedCarrier
    let filteredFlight = []

    if (selectedCarrier) {
      filteredFlight = flights.filter(flight => flight.carrier === selectedCarrier)
    } else {
      filteredFlight = flights
    }

    return (
      <div className="ticket-widget">
        <h1 className="text-center">TicketWidget</h1>
        <select value={this.props.selectedCarrier} onChange={this.selectCarrier}>
          <option value="">Все авиакомпании</option>
          {carriers.map(carrier => <option value={carrier} key={carrier}>{carrier}</option>)}
        </select>

        {filteredFlight.map(flight => <TicketCard key={flight.id} flight={ flight } />)}
      </div>
    )
  }
}

const mapStateToProps = ({ flights, carriers, selectedCarrier }) => ({ flights, carriers, selectedCarrier })

export default connect(mapStateToProps)(TicketWidget)
