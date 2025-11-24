import { useState } from 'react'
import Header from './Components/Header.jsx'
import Input from './Components/Input.jsx'
import Button from './Components/Button.jsx'

function App() {
  return (
    <>
    <Header />
    <Input>Environmental Temperature</Input>
    <Input>Skin Temperature</Input>
    <Input>Heart Rate</Input>
    <Input>SDNN</Input>
    <Input>SDSD</Input>
    <Input>RMSSD</Input>
    <Input>pNN20</Input>
    <Input>pNN50</Input>
    <Input>LF/HF</Input>
    <Input>Personal Conditioning Operation (On/Off)</Input>
    <Button>Predict</Button>
    </>
  )
}

export default App
