import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function SocialLinks() {
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#102F5D] mt-16">Contact</h2>
                <div className="border-t-2 border-gray-400 my-4 w-3/4 sm:w-1/2 mx-auto"></div>
            </div>
            <div className="flex flex-col items-center text-center py-16">
                <p className="text-gray-500 text-sm mb-4">Want to discuss more?</p>
                <h1 className="text-5xl font-bold text-[#102F5D]">Let’s Talk</h1>
            </div>
            <div className="flex space-x-6 mx-auto mb-32 justify-center">
                {/* GitHub Button */}
                <a
                    href="https://github.com/SiddhiApraj7" // replace with your GitHub link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 p-4 hover:bg-gray-100 transition duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub className="text-xl text-[#102F5D]" />
                </a>

                {/* LinkedIn Button */}
                <a
                    href="https://www.linkedin.com/in/siddhi-apraj/" // replace with your LinkedIn link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 p-4 hover:bg-gray-100 transition duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="text-xl text-[#102F5D]" />
                </a>

                {/* Email Button */}
                <a
                    href="mailto:siddhiapraj@gmail.com" // replace with your email address
                    className="rounded-full border border-gray-300 p-4 hover:bg-gray-100 transition duration-300"
                    aria-label="Email"
                >
                    <FaEnvelope className="text-xl text-[#102F5D]" />
                </a>
            </div>
        </div>
    );
}
