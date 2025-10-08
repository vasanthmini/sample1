
import './App.css'
import Portal from './components/Portal';
import { BrowserRouter } from 'react-router-dom';




function App() {
  
  return (
    <>
    <BrowserRouter>


        <div className='portals'>
        <Portal />
        </div>

    </BrowserRouter>
    </>
  );
}

export default App
