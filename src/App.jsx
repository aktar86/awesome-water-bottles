import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlesPromise = fetch("../bottles.json")
// const bottlesPromise = fetch("https://raw.githubusercontent.com/aktar86/bottles-data/refs/heads/main/bottles.json")
// .then(res => res.json())

const bottlesPromise = fetch('../public/bottles.json')
.then(res => res.json())




function App() {

  return (
    <>

      <h1>awesome water bottles</h1>
      <Suspense fallback={<h3>Water bottles loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App



