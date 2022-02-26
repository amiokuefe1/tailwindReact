import './App.css';
import TopBar from './components/topBar/TopBar';
import SideBar from './components/sideBar/SideBar';
import {Outlet} from 'react-router-dom';



function App() {
  return (
    <>
      <TopBar/>
      <div className='flex space-x-4'>
        <SideBar/>
        <div className='grow h-14 bg-teal-600'>
          Russia vs Ukraine, Who do you think will win
          <Outlet/>
        </div>
        

      </div>
    
    </>
  );
}

export default App;
