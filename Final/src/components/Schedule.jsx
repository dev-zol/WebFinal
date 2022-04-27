import { useEffect } from "react";

export default function Schedule(props) {
  
    useEffect(() => {
      if(props.border) {
        document.getElementById('schedule').className = "w-2/5 md:mr-10 border-solid border-l-2 border-accent-blue"
      }
    });

    return (
      <section id="schedule" className='w-full md:mr-10'>
        <div className='grid grid-cols-4 w-full gap-6'>
          <h1 className='col-span-4 mx-auto text-center text-2xl'>Spring 2022 Schedule</h1>
          <div className='text-xl place-content-center grid'>Monday</div>
          <div className='flex flex-col'>
            <div className='border-b-2'>12:30 - 2:00</div>
            <div>2:00 - 3:00</div>
          </div>
          <div className='flex flex-col'>
            <div className='border-b-2'>Meetings</div>
            <div>Office Hours</div>
          </div>
          <div className='flex flex-col col-span-1'>
            <div className='border-b-2'>&nbsp;</div>
            <div>HCCA 209A or Zoom</div>
          </div>
          <div className='text-xl place-content-center grid'>Tuesday</div>
          <div className='flex flex-col'>
            <div className='border-b-2'>11:00 - 12:00</div>
            <div className='border-b-2'>12:30 - 1:45</div>
            <div className='border-b-2'>2:00 - 3:00</div>
            <div>3:30 - 5:00</div>
          </div>
          <div className='flex flex-col'>
            <div className='border-b-2'>CSC 121C</div>
            <div className='border-b-2'>CSC 533</div>
            <div className='border-b-2'>Office Hours</div>
            <div>Meetings</div>
          </div>
          <div className='flex flex-col col-span-1'>
            <div className='border-b-2'>Rigge 120</div>
            <div className='border-b-2'>Eppley 110</div>
            <div className='border-b-2'>HCCA 209A or Zoom</div>
            <div>&nbsp;</div>
          </div>
          <div className='text-xl place-content-center grid'>Wednesday</div>
          <div className='flex flex-col'>
            <div className='border-b-2'>12:30 - 2:00</div>
            <div>2:00 - 3:00</div>
          </div>
          <div className='flex flex-col'>
            <div className='border-b-2'>Meetings</div>
            <div>Office Hours</div>
          </div>
          <div className='flex flex-col col-span-1'>
            <div className='border-b-2'>&nbsp;</div>
            <div>HCCA 209A or Zoom</div>
          </div>
          <div className='text-xl place-content-center grid'>Thursday</div>
          <div className='flex flex-col'>
            <div className='border-b-2'>11:00 - 12:00</div>
            <div className='border-b-2'>12:30 - 1:45</div>
            <div className='border-b-2'>2:00 - 3:00</div>
            <div>5:00 - 6:00</div>
          </div>
          <div className='flex flex-col'>
            <div className='border-b-2'>CSC 121C</div>
            <div className='border-b-2'>CSC 533</div>
            <div className='border-b-2'>Office Hours</div>
            <div>CSC 121C</div>
          </div>
          <div className='flex flex-col col-span-1'>
            <div className='border-b-2'>Rigge 120</div>
            <div className='border-b-2'>Eppley 110</div>
            <div className='border-b-2'>HCCA 209A or Zoom</div>
            <div>Zoom</div>
          </div>
          <div className='text-xl place-content-center grid'>Friday</div>
          <div className='flex flex-col'>
            <div>1:00 - 3:00</div>
          </div>
          <div className='flex flex-col'>
            <div>Meetings</div>
          </div>
          <div className='flex flex-col col-span-2'>
            <div>&nbsp;</div>
          </div>
          <div className='text-m col-span-3 col-start-2 w-5/6'>Feel free to stop by my office anytime or call to arange an appointment</div>
        </div>
      </section>
    );
};