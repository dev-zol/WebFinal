import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import textbook from '../imgs/textbook.jpg';
import csta from '../imgs/csta.png';
import murren from '../imgs/murren.jpg';
import family from '../imgs/family.jpg';

export default function About() {
    return (
        <section>
            <Navbar />
            <div className="container mx-auto my-10 leading-relaxed flex flex-col">
                <section className="w-full flex items-center justify-around">
                    <img src={textbook} alt="textbook" className='object-contain w-1/5'/>
                    <div className='flex flex-col justify-around h-full w-3/4'>
                        <h1 className='font-serif md:text-2xl mb-3'>Teaching Interests</h1>
                        <p className='font-sans md:text-md'>
                            Over the years, I have taught a wide variety of courses, ranging from a non-majors course, to core computer science courses, to advanced topics. My general philosophy is to conduct hands-on, interactive classes that challenge the student to learn by experience. I don't mind having a reputation for being tough, as long as students feel that I am fair and that they learn.

                            My current interests in teaching and curriculum development center on the Web as a medium for programming and experimentation. While at Dickinson College, I developed a Web-based introduction to computer science, which used JavaScript to teach programming fundamentals. At Creighton, I adapted this course to serve as an introduction to computing for all disciplines. The hands-on nature of the course is achieved using tutorials, in which the students write and experiment with small, Web-based programs. Experimental and analytical skills are stressed as students often use programs as means to model and analyze complex systems (such as random walks and disease-spread models). In addition, students are introduced to the history and breadth of computer science, with readings and exercises on topics such as logic design, artificial intelligence, and the societal impact. A text book based on this course, titled A Balanced Introduction to Computer Science, was published by Prentice Hall in 2004 and is currently in its third edition. In 2020, I recovered rights to the book contents and have been updating and expanding the material for use in my Creighton course. The new book, Computer Science: Concepts &amp; Explorations, is now in its 2nd edition, published by Bluejay Press. I plan to package it for wider adoption in the coming year.
                        </p>
                    </div>
                </section>
                <section className="w-full flex items-center justify-around mt-10">
                    <img src={csta} alt="csta" className='object-contain w-1/5'/>
                    <div className='flex flex-col justify-around h-full w-3/4'>
                        <h1 className='font-serif md:text-2xl mb-3'>Research Interests</h1>
                        <p className='font-sans md:text-md'>
                        During the past few years, my most active research has been in the area of computer science education (CSE). I have published extensively in CSE journals and conferences, including several papers and panel presentations at the SIGCSE Technical Symposiums on Computer Science Education. My most notable initiative has been in advocating a balanced approach to introductory computer science, combining programming depth with computing breadth (as demonstrated in the above-mentioned text books).

                        In recent years, I have become deeply involved with the larger computer science education community. I have been involved with the Advanced Placement (AP) program since 1994, serving as a consultant, reader, and question leader. Between 2004 and 2008, I served as Chief Reader - responsible for the grading and scoring of the entire exam (taken by approximately 20,000 high school students each year). As Chief Reader, I supervised the training of approximately 150 college and high school readers each year, as well as contributing to the development of the exam. I have been a member of the Liberal Arts Computer Science (LACS) Consortium since 1999. This organization of faculty leaders from top liberal arts colleges meets regularly to discuss issues important to liberal arts computing, and produces influential recommendations such as the 2007 Model Curriculum for a Liberal Arts Degree in Computer Science. From 2009 to 2018, I was repeatedly elected and served on the Board of Directors of the Computer Science Teachers Association (CSTA), the leading international organization in K-12 computer science education, and served as Chair of the Board since from 2015-2017. From 2010 to 2014, I was a member of the ACM/IEEE Computing Curriculum 2013 Steering Committee, which produced the CS2013 Model Curriculum.
                        </p>
                    </div>
                </section>
                <section className="w-full flex items-center justify-around mt-10">
                    <div className='w-1/5'>
                        <img src={murren} alt="family" className='object-contain'/>
                        <img src={family} alt="family" className='object-contain'/>
                    </div>
                    <div className='flex flex-col justify-around h-full w-3/4'>
                        <h1 className='font-serif md:text-2xl mb-3'>Personal Interests</h1>
                        <p className='font-sans md:text-md'>
                        I'm happy to admit that my personal life pretty much revolves around my wife, Laura, and our two sons, Charlie and Jack. Charlie was born on May 25, 1997, and his brother Jack was born exactly three years later (in the same room in the same hospital). Charlie graduated with a degree in Mechanical Engineering from Duke University in 2020. He is the Design Engineer at Janus Motorcycles, a startup in Goshen, Indiana that designs and builds vintage-style motorcycles. Jack is a senior at Creighton, double-majoring in marketing and graphic design. He is a Business Research Fellow in Heider College, an officer in the Creighton pep band, and drummer in two indie-rock backs that play across the Midwest. Laura stays busy running her lab in the Biomedical Sciences department at Creighton, studying the mechanism and treatment of skin cancer. She also serves as Associate Dean of Research for the School of Medicine. Our critters, an Australian Shepherd named Rizzo and a tabby named Target, complete us.
                        Personal info beyond the kids (as if there is such a thing): I met my wife-to-be, Laura Hansen, in 1986 while we were both grad students at Duke. We were married in 1988 in a field in Iowa, and lived in the Durham, NC area for six years while we completed our degrees. For the next six years, we lived in Frederick, MD, and commuted in opposite directions. I taught at Dickinson College (65 miles north) and Laura was a scientist at the National Cancer Institute (45 miles south). Although we both loved our jobs, commuting with kids became a little too much, so in the summer of 2000, we bought a beautiful house in Bellevue, NE, and are both faculty at Creighton University.

                        When not working or tending to kids, I enjoy reading books (mostly sci-fi), watching movies (preferably sci fi/action and old comedies and mysteries), and tinkering around the house with Laura. In addition, I am an avid sports fan, particularly of the Chicago Cubs and college basketball (Creighton and Duke).
                        </p>
                    </div>
                </section>
            </div>
            <Contact />
        </section>
    );
}