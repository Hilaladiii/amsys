import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = {
    '2023-11-15': 'Tugas 3',
    '2023-11-20': 'UTS',
    '2023-11-25': 'Tugas 4',
  };
  
  const tileContent = ({ date, view }) => {
    if (events[date.toISOString().split('T')[0]]) {
      return(
        <div className='w-[100px] h-[80px] flex flex-row items-center gap-3 bg-[#390DEA1A]'>
          <div className='w-2 h-[80px] bg-tBlue'/>
          <div className='flex flex-col items-start'>
            <p className='font-bold text-[12px]'>{events[date.toISOString().split('T')[0]]}</p>
            <span className='text-[10px] font-semibold'>IMK</span>
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
    <div className='shadow-lg flex p-10 animate-fade-right delay-150'>      
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
        className={'flex flex-col justify-center w-full h-[480px] rounded-lg border-none shadow-lg font-semibold p-7 text-[#485C71]'}
      />
    </div>
  );
};

export default EventCalendar;
