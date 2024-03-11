
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import defautImage from './assets/img/cat.png'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <img src={defautImage} className="img-cat" alt="cat" />
      <h1>Vite + GH-Pages</h1>
    </>
  )
}

export default App
