import './App.css';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';

function App() {

  return (
    <div>
      <Navbar />
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
        <Schedule />
      </div>
    </div>
    
  )
}

export default App
