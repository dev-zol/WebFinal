import office from '../imgs/office.png'
import zoom from '../imgs/zoom.png';
import email from '../imgs/email.png';
import phone from '../imgs/phone.png';

export default function Contact() {
    return (
        <div className="flex justify-start w-full bg-white md:h-10 lg:h-14 items-start ">
            <div className="md:ml-10 flex justify-around items-center w-full h-full ml-4 space-x-4 text-lg">
                <a href="http://creighton.edu/ccas/csdj/" target="_blank" className='flex space-x-4 items-center underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300'><img src={office} className='w-12 h-12 mr-3'/>209A Hitchcock</a>
                <a href="tel:+14022802583" className='flex space-x-4 items-center underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300'><img src={phone} className='w-12 h-12 mr-3'/>(402) 280-2583</a>
                <a href='mailto:DaveReed@creighton.edu' className='flex space-x-4 items-center underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300'><img src={email} className='w-12 h-12 mr-3'/>DaveReed@creighton.edu</a>
                <a href='https://creighton.zoom.us/my/davereed' target="_blank" className='flex space-x-4 items-center underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300'><img src={zoom} className='w-12 h-12 mr-3'/>https://creighton.zoom.us/my/davereed</a>
            </div>
        </div>
    );
}