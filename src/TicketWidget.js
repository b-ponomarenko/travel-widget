import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFlightsData } from './actionCreators'
import TicketCard from './TicketCard'

//TODO: Заверстать шаблон для карточек
//TODO: Добавить фильтрацию по селекту
//TODO: Возможность сброса выбранного значения?
//TODO: Возможность сохранения авиаперевозчика через хэш
//TODO: Простановка выбранного значения в селект (работа с селектом)

class TicketWidget extends Component {
  componentDidMount() {
    if (!this.props.flights.length) {
      this.props.dispatch(fetchFlightsData())
    }
  }

  render() {
    const flights = this.props.flights
    const carriers = this.props.carriers

    return (
      <div className="ticket-widget">
        <h1 className="text-center">TicketWidget</h1>
        <select>
          <option>Все авиакомпании</option>
          {carriers.map(carrier => <option id={carrier.id} key={carrier.id}>{carrier.title}</option>)}
        </select>

        {flights.map(flight => <TicketCard key={flight.id} flight={ flight } />)}
      </div>
    )
  }
}

const mapStateToProps = ({ flights, carriers }) => ({ flights, carriers })

export default connect(mapStateToProps)(TicketWidget)
