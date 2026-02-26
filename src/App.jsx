
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise= fetch("https://openapi.programming-hero.com/api/all").then(res=>res.json());


function App() {
  return (
    <>
      <h2>Hi React</h2>
     <Suspense fallback={<p style={{"backgroundColor":"orange", "fontSize":"20px"}}>Wait till data is loaded...</p>}>
       <Countries countriesPromise={countriesPromise}/>
     </Suspense>
    </>
  )
}

export default App
