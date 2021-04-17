import React, {useEffect, useState} from 'react'
import Map from "./components/Map";
import Loading from "./components/Loading";
import Header from "./components/Header";

const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
  const fetchEvents = async () => {
    setLoading(true)
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    const {events} = await res.json()
    setEventData(events)
    setLoading(false)
  }
  fetchEvents()
    console.log(eventData)
  }, [] )

  return (
    <div className="app">
      <Header/>
      {!loading ? <Map eventData={eventData}/> : <Loading />}
    </div>
  );
}

export default App;
