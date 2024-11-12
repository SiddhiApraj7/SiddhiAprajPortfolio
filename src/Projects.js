import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import GmailImg from './assets/GmailAIAssistantSS.png';
import ProductImg from './assets/ProductRepairAppSS.png';
import PairsImg from './assets/PairsTradingSS.png'
import DigiImg from './assets/DigiRupi.png';
import GDSCImg from './assets/GDSC.png';
import LibImg from './assets/LibConnect.png';

export default function Projects() {
    return (
        <section className="bg-white pt-16 pb-8">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#102F5D]">Projects</h2>
                <div className="border-t-2 border-gray-400 my-4 w-1/2 mx-auto"></div>
            </div>

            {/* Tabs or Categories */}
            <div className="flex justify-center sm:space-x-6 md:space-x-6 lg:space-x-6 text-gray-600 mb-12">
                <span className="text-lg font-semibold text-[#1f91be] mx-12">Generative AI / Machine Learning</span>
                <span className="mt-0.5 mr-6">With Python, OpenAI APIs, LangChain and more.</span>
            </div>

            {/* Project Items 
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-16 lg:px-32"> */}
            <div>
                {/* Project Card 1 */}
                <div className="flex flex-col md:flex-row items-start bg-sky-100 sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#102F5D]">
                            Gmail AI Assistant
                        </h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm sm:text-left">
                            Using Python, Google AppScript, OpenAI APIs, MongoDB and Gmail API
                        </p>
                        <p className="mt-6 lg:text-lg md:text-lg sm:text-xs text-[#102F5D] lg:pr-6">
                            Inboxes overflow with emails daily, making it challenging to manage communication efficiently. Important messages often get buried, leading to missed responses or incomplete tasks. To address the necessity of an application that helps sort your inbox and assist in the tasks that follow; this is a solution that organizes emails, assists with quick replies, and consolidates tasks into a to-do list to ensure nothing gets missed.
                        </p>
                        <div className="flex">
                            <button className="mt-6 px-4 py-2 border border-[#102F5D] text-[#102F5D] rounded-full hover:bg-[#102F5D] hover:text-sky-100 transition"
                                onClick={() => window.open('https://drive.google.com/file/d/1QnAZXdjiz3ACcDAkmh1o4aAabl6R35Y_/view', '_blank')}>
                                CHECK OUT THE DEMO
                            </button>

                            <a
                                href="https://github.com/SiddhiApraj7/GmailAIAssistant" // replace with your GitHub link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#102F5D] ml-4 mt-6 sm:mt-6 md:mt-6 lg:mt-6 pt-2.5 px-2.5 hover:bg-[#102F5D]  transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#102F5D] hover:text-sky-100" />
                            </a>

                        </div>

                    </div>
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto">
                        <img
                            src={GmailImg}
                            alt="Gmail AI Assistant Screenshot"
                            className="w-full h-full object-cover rounded-lg border-b-solid border-6 border-[#102F5D]"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto mb-6">
                        <img
                            src={ProductImg}
                            alt="Product Repair App Screenshot"
                            className="w-full h-full object-cover rounded-lg border-solid border-8 border-[#102F5D]"
                        />
                    </div>

                    <div className="md:w-2/3 mb-6 md:mb-0 text-right"> {/* Added text-right and pr-12 */}
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#1787b4] ">Product Repair Application</h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm">Using Python, Llama3.1 8B, ChromaDB and LangChain</p>
                        <p className="mt-6 lg:text-lg md:text-lg sm:text-xs lg:ml-6 text-[#1787b4]">
                            An application that takes in a picture of a device as well as a prompt of the problem user is facing with the device and returns actionable steps to fix the product from a database of repair manuals or by searching the web.
                        </p>
                        <div className="flex">
                            <button className="mt-6 mr-0 ml-auto px-4 py-2 border border-[#1787b4] text-[#1787b4] rounded-full hover:bg-[#1787b4] hover:text-white transition"
                                onClick={() => window.open('https://www.canva.com/design/DAGPJIe9ZA8/aGUPZcBR4oIfknAbvU71Cw/view?utm_content=DAGPJIe9ZA8&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank')}>
                                CHECK OUT THE DEMO
                            </button>

                            <a
                                href="https://github.com/SiddhiApraj7/ProductRepairAppProject" // 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#1787b4] mt-6 pt-2.5 px-2.5 hover:bg-[#1787b4]  transition duration-300 ml-4"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#1787b4] hover:text-white" />
                            </a>

                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start bg-sky-100 sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#102F5D]">Pairs Trading Strategies using Machine Learning</h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm sm:text-left">Using Python</p>
                        <p className="mt-6 lg:text-lg md:text-lg sm:text-xs text-[#102F5D] lg:pr-6">
                            Exploration of pre-existing strategies of pair selection: Distance Method, Cointegration Method and Copula Method with their implementation on the Indian NSE stock market
                            and research into a new strategy using Gaussian Process Regression to increate profitability of trades.
                        </p>
                        <button className="mt-6 px-4 py-2 border border-[#102F5D] text-[#102F5D] rounded-full hover:bg-[#102F5D] hover:text-sky-100 transition"
                            onClick={() => window.open('https://drive.google.com/file/d/1Q5U6cfG8CYYFcINSi8GKWum3bvgZuGgF/view?usp=sharing', '_blank')}>
                            CHECK OUT THE REPORT
                        </button>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto">
                        <img
                            src={PairsImg}
                            alt="Pairs Trading Screenshot"
                            className="w-full h-full object-cover rounded-lg border-b-solid border-8 border-[#102F5D]"
                        />
                    </div>
                </div>
            </div>

            {/* Tabs or Categories */}
            <div className="bg-sky-100 mb-0">
                <div className="border-b-2 border-gray-400 w-1/4 mx-auto pt-10 mb-12"></div>
                <div className="flex justify-center sm:space-x-6 md:space-x-6 lg:space-x-6 text-gray-600">
                    <span className="text-lg font-semibold text-[#1f91be] mx-12 pb-6">App / Web Development</span>
                    <span className="mt-0.5 mr-6 pb-6">Using React, Tailwind, AWS and more.</span>
                </div>
            </div>

            <div>
                {/* Project Card 1 */}
                <div className="flex flex-col md:flex-row items-start bg-sky-100 sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#102F5D]">American Express Makeaton '23: DigiRupi Mobile Wallet</h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm sm:text-left">Using React Native Expo, Tailwind, AWS Amplify, AWS RDS and Prisma ORM</p>
                        <p className="mt-6 lg:text-lg md:text-lg sm:text-xs text-[#102F5D] lg:pr-6">
                            A mobile wallet solution that addresses the integration of a new E-Rupi government scheme into real-time and efficient day to day transactions with the ability to create E-Rupi vouchers for specific users and vendors, real-time updates on redeeming coupons, database connection, QR code generation and scanning with proper authentication and security.
                        </p>
                        <div className="flex">
                            <button className="mt-6 px-4 py-2 border border-[#102F5D] text-[#102F5D] rounded-full hover:bg-[#102F5D] hover:text-sky-100 transition"
                                onClick={() => window.open('https://youtu.be/SMb2W81xgX0?si=gMHqAG_UK8krXqH9', '_blank')}>
                                CHECK OUT THE DEMO
                            </button>

                            <a
                                href="https://github.com/SiddhiApraj7/Amex-collab" // replace with your GitHub link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#102F5D] ml-4 mt-6 sm:mt-6 md:mt-6 lg:mt-6 pt-2.5 px-2.5 hover:bg-[#102F5D]  transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#102F5D] hover:text-sky-100" />
                            </a>

                        </div>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto">
                        <img
                            src={DigiImg}
                            alt="Digi Rupi Screenshot"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto mb-6">
                        <img
                            src={GDSCImg}
                            alt="GDSC Portal Screenshot"
                            className="w-full h-full object-cover rounded-lg border-solid border-8 border-[#102F5D]"
                        />
                    </div>
                    <div className="md:w-2/3 mb-6 md:mb-0 text-right"> {/* Added text-right and pr-12 */}
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#1787b4] ">GDSC Management Portal</h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm">Using React, JavaScript, Node.js, Tailwind, Firebase and MongoDB</p>
                        <p className="mt-6 lg:ml-6 lg:text-lg md:text-lg sm:text-xs text-[#1787b4]">
                            A management portal to promote ideation, project hosting and collaboration for students' educational growth.
                        </p>
                        <div className="flex">
                            <button className="mt-6 mr-0 ml-auto px-4 py-2 border border-[#1787b4] text-[#1787b4] rounded-full hover:bg-[#1787b4] hover:text-white transition"
                                onClick={() => window.open('https://gdsc-management-portal.vercel.app/', '_blank')}>
                                CHECK OUT THE SITE
                            </button>

                            <a
                                href="https://github.com/SiddhiApraj7/GDSCManagementPortal" // replace with your GitHub link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#1787b4] mt-6 pt-2.5 px-2.5 hover:bg-[#1787b4]  transition duration-300 ml-4"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#1787b4] hover:text-white" />
                            </a>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start bg-sky-100 sm:p-8 md:p-16 lg:p-20 h-auto p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                        <h3 className="lg:text-xl md:text-lg sm:text-sm font-semibold text-[#102F5D]">LibConnect: Library Management App</h3>
                        <p className="text-gray-500 font-light mt-1 mb-4 lg:text-base md:text-base sm:text-sm sm:text-left">Using React Native, react-native-geolocation, JavaScript, Express JS and MongoDB</p>
                        <p className="mt-6 lg:text-lg md:text-lg sm:text-xs text-[#102F5D] lg:pr-6">
                            An all in one streamlined solution to simplify the library experience at IIT Ropar by providing real-time information on available seats along with an automated seat management system, simplify access to study resources, eliminate the need for manual entries and digitize retrieving misplaced belongings.
                        </p>
                        <div className="flex">
                            <button className="mt-6 px-4 py-2 border border-[#102F5D] text-[#102F5D] rounded-full hover:bg-[#102F5D] hover:text-sky-100 transition"
                                onClick={() => window.open('https://www.canva.com/design/DAF-hMplvQM/YBY2reWWQVSc6mgE6BTTTA/view?utm_content=DAF-hMplvQM&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank')}>
                                CHECK OUT THE DEMO
                            </button>

                            <a
                                href="https://github.com/SiddhiApraj7/DEP" // replace with your GitHub link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#102F5D] ml-4 mt-6 sm:mt-6 md:mt-6 lg:mt-6 pt-2.5 px-2.5 hover:bg-[#102F5D]  transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl text-[#102F5D] hover:text-sky-100" />
                            </a>

                        </div>
                    </div>
                    <div className="sm:w-1/2 md:w-1/2 h-auto my-auto lg:ml-8 sm:mx-auto">
                        <img
                            src={LibImg}
                            alt="LibConnect Screenshot"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>


                {/*<div className="flex flex-col md:flex-row items-start p-20 h-96">
                    <div className="md:w-1/3 bg-[#102F5D] rounded-lg h-48 mr-12"></div>
                    <div className="md:w-2/3 mb-6 md:mb-0 text-right"> 
                        <h3 className="text-xl font-semibold text-[#1787b4] ">Our Philosophy</h3>
                        <p className="mt-4 text-lg text-[#1787b4]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                        </p>
                        <button className="mt-6 mr-0 ml-auto px-4 py-2 border border-[#1787b4] text-[#1787b4] rounded-full hover:bg-[#1787b4] hover:text-white transition">
                            MEET THE TEAM
                        </button>
                    </div>
                </div>*/}

            </div>

        </section>
    );
}
