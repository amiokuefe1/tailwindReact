import './App.css';
import { AccessAlarm, Home, Language, Settings } from '@mui/icons-material';

function App() {
  return (
    <>
      <div className='flex bg-gray-500 justify-between py-3'>
        <span className='font-bold text-xl text-blue-600'>lamaadmin</span>
        <div className='flex flex-row' >
          
          <div className='topbarIconContainer'>
          {/* <img src="images/logo.jpg" alt="BigCo Inc. logo"/> */}
            <Home sx={{ fontSize: 30 }}/>
            <span className='topIconBadge'>2</span>
          </div>
        
          <div className='relative justify-around items-center flex-row py-0 px-2 '>
          
            <Language sx={{ fontSize: 30 }}/>
            <span className='absolute -top-3 right-0 items-center justify-center bg-red-600 rounded-lg w-5 h-5 text-lg text-center flex-row flex'>2</span>
          </div>
          
          <div className='relative justify-around items-center flex-row py-0 px-2 '>
          
            <Settings sx={{ fontSize: 30 }}/>
            <span className='absolute -top-3 right-0 items-center justify-center bg-red-600 rounded-lg w-5 h-5 text-lg text-center flex-row flex'>2</span>
          </div> 

          <div className='topbarIconContainer'>
          <img src="images/efe1.jpg" alt="efe" className='w-7 h-7 rounded-xl'/>
            {/* <Home sx={{ fontSize: 30 }}/> */}
            <span className='topIconBadge'>2</span>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
