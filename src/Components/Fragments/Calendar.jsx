import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = {
    '2023-11-15': 'Tugas 3',
    '2023-11-20': 'Event 2',
    '2023-11-25': 'Event 3',
  };
  
  const tileContent = ({ date, view }) => {
    if (events[date.toISOString().split('T')[0]]) {
      return(
        <div className='w-[90px] h-[60px] flex flex-row items-center gap-3 bg-[#FF00001A]'>
          <div className='w-2 h-[60px] bg-tBlue'/>
          <div className='flex flex-col items-start'>
            <p className='font-bold'>{events[date.toISOString().split('T')[0]]}</p>
            <span className='font-semibold'>IMK</span>
            <div>
              <div/>
              <span className='text-[10px] font-light'>18.00</span>
            </div>
          </div>

        </div> 
      ) 
    }
  };

  return (
    <div className='w-[800px] h-[550px] shadow-lg flex p-10'>      
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
        className={'flex flex-col justify-center space-4 w-full h-[480px] rounded-lg border-[1px] '}
      />
    </div>
  );
};

export default EventCalendar;
