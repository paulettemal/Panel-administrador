
import './App.css'
import ListaTarjetas from './components/ListaTarjetas';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-[235px] bg-[#F1F1F1]">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 ">
        <div className='p-10 flex flex-row items-center'>
          <img src="image.png" className='h-[140px] w-[140px] -ml-10 rounded-[50%] mr-10 '></img>
          <h1 className='text-[42px] font-bold mr-4'>Workspace name</h1>
          <div className=''>
            <img src="editar.png" className='h-[36px] w-[36px] cursor-pointer'></img>
          </div>
        </div>
        <div className='  h-20 '>
          <div>
            <h2 className='text-[32px] pl-1'>Workspace admins</h2>
          </div>
          <div className='h-[174px] mt-10 ml-2 flex flex-row'>
            <ListaTarjetas></ListaTarjetas>
          </div>
          <div className='mt-15 ml-2 '>
            <div >
              <h2 className='text-[32px] pl-1'>Settings</h2>
            </div>
            <div className='flex flex-col gap-3 text-[18px] pt-3'>
            <div className="flex items-center gap-2">
              <h3>Week start</h3>
              <select className="border rounded p-1 text-[16px]">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </div>
            <h3>Notification</h3>
            <div className="flex items-center gap-2">
              <h3>Week start</h3>
              <select className="border rounded p-1 text-[16px]">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </div>
            <h3>Notification</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
