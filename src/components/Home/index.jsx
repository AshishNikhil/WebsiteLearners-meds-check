import {Component} from 'react'
import Header from '../Header'
import PatientView from '../PatientView'
import CaretakerView from '../CaretakerView'

class Home extends Component {
  render() {
    const whoami = localStorage.getItem('whoami')
    return (
      <div>
        <Header />
        {whoami === 'Patient' ? <PatientView /> : <CaretakerView />}
      </div>
    )
  }
}

export default Home
