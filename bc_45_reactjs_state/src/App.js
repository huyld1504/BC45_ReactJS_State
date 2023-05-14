import logo from './logo.svg';
//import './App.css';
import AppFeature from './apps/components/AppFeature';

function App() {

  return (
    <div>
      <nav className='fs-2 py-3 text-center text-light' style={{backgroundColor : 'rgba(0,0,0,.4)'}}>
        Try glasses app online
      </nav>
      <div>
        <AppFeature/>
      </div>
    </div>
    
  )
}

export default App;
