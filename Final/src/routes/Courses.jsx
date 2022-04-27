import Navbar from "../components/Navbar";

export default function Courses() {
    return (
        <section>
            <Navbar />
            <div className="container w-full mx-auto my-10">
                <h1 className="font-serif text-2xl mb-10">Courses Taught at Creighton University</h1>
                <table className="table-auto border-collapse text-left width-full text-lg">
                    <thead>
                        <tr>
                            <th className="border-b border-accent-blue p-4 pl-8 pb-3">Course Number</th>
                            <th className="border-b border-accent-blue p-4 pl-8 pb-3">Name</th>
                            <th className="border-b border-accent-blue p-4 pl-8 pb-3">Semester</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 pl-8">107</td>
                            <td className="p-4 pl-8">Computing and the Web</td>
                            <td className="p-4 pl-8 space-x-4">
                                <a href="">F03</a>
                                <a href="">S03</a>
                                <a href="">F02</a>
                                <a href="">S02</a>
                                <a href="">F01</a>
                                <a href="">S01</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 pl-8">121</td>
                            <td className="p-4 pl-8">Computers &amp; Scientific Thinking</td>
                            <td className="p-4 pl-8 space-x-4">
                                <a href="">F21</a>
                                <a href="">S21</a>
                                <a href="">F20</a>
                                <a href="">S20</a>
                                <a href="">F19</a>
                                <a href="">F16</a>
                                <a href="">S16</a>
                                <a href="">F12</a>
                                <a href="">S12</a>
                                <a href="">F11</a>
                                <a href="">S11</a>
                                <a href="">F10</a>
                                <a href="">S10</a>
                                <a href="">F09</a>
                                <a href="">F08</a>
                                <a href="">F07</a>
                                <a href="">S07</a>
                                <a href="">S06</a>
                                <a href="">F05</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}