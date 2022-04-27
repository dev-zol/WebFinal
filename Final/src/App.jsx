import './App.css';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import davereed from './imgs/davereed.jpg';
import Contact from './components/Contact';

function App() {

  return (
    <div className='h-[95vh] flex flex-col justify-between'>
      <Navbar />
      <div className='flex flex-row justify-around w-full h-3/4 items-center'>
        <section className='flex flex-row justify-start items-center w-full md:w-2/3 h-full font-serif'>
          <img src={davereed} alt='dave reed' className='object-contain h-1/2 md:h-2/3 md:ml-24'/>
          <div className='flex flex-col justify-around w-1/2 h-1/2 md:h-2/3 md:ml-10 leading-relaxed text-sm md:text-xl'>
            <p>My name is David Reed. I am the professor and chair of the Department of Computer Science, Design &amp; Journalism at Creighton University</p>
            <p>I have published extensively in CSE journals and conferences, including several papers and panel presentations at the SIGCSE Technical Symposiums on Computer Science Education. My most notable initiative has been in advocating a balanced approach to introductory computer science.</p>
            <p>My general philosophy is to conduct hands-on, interactive classes that challenge the student to learn by experience. I don't mind having a reputation for being tough, as long as students feel that I am fair and that they learn.</p>
          </div>
        </section>
        <Schedule border={true}/>
      </div>
      <Contact />
    </div>
    
  )
}

export default App
