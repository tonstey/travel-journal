import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import data from './data.jsx'

function App() {
  return (
    <>
      <Header />

      {data.map(item =>
        <Card 
          location={item.location}
          title={item.title}
          linkUrl={item.googleMapsUrl}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          imgUrl={item.imageUrl}
          />)
      }
    </>
  )
}

export default App
