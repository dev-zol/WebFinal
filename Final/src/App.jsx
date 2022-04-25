import './App.css';

function App() {

  return (
    <div className='flex flex-row justify-evenly'>
      <section className='flex flex-col w-1/2'>
        <h1>DAVID REED</h1>
        <h2>
          Professor and Chair
          Department of Computer Science, Design &amp; Journalism
          Creighton University
          Omaha, NE 68178
        </h2>
        <p>I have published extensively in CSE journals and conferences, including several papers and panel presentations at the SIGCSE Technical Symposiums on Computer Science Education. My most notable initiative has been in advocating a balanced approach to introductory computer science, combining programming depth with computing breadth (as demonstrated in the above-mentioned text books).</p>
        <p>My general philosophy is to conduct hands-on, interactive classes that challenge the student to learn by experience. I don't mind having a reputation for being tough, as long as students feel that I am fair and that they learn.</p>
      </section>
      <section className='w-1/2'>
        <div className='grid grid-cols-5 w-3/4 mx-auto gap-4'>
          <h1 className='col-span-5 mx-auto text-center text-2xl'>Spring 2022 Schedule</h1>
          <div className='text-xl place-content-center grid'>Monday</div>
          <div className='flex flex-col'>
            <div>12:30 - 2:00</div>
            <div>2:00 - 3:00</div>
          </div>
          <div className='flex flex-col'>
            <div>Meetings</div>
            <div>Office Hours</div>
          </div>
          <div className='flex flex-col col-span-2'>
            <div>&nbsp;</div>
            <div>HCCA 209A or Zoom</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
