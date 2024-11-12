export default function About() {
    return (
        <section className="bg-white pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#102F5D]">About</h2>
                <div className="border-t-2 border-gray-400 my-4 w-3/4 sm:w-1/2 mx-auto"></div>
            </div>

            {/* About Content */}
            <div className="flex flex-col items-center text-gray-600 space-y-4">
                <p className="text-[#102F5D] text-base sm:text-sm lg:text-lg text-center max-w-3xl px-8">
                    Hi! I'm Siddhi Apraj. I'm a final year student at the Indian Institute of Technology, Ropar, and am pursuing my Bachelor of Technology in Mathematics & Computing. My primary interest is in Artificial Intelligence, Machine Learning, and Data Science, but I also really enjoy Web Development. I have interned at WashMetrix, American Express, and at IIT Bombay, all of which have been extremely unique and enlightening experiences. I am a really passionate and curious person and have big dreams, and this is just a glimpse of my journey.
                </p>
                <p className="text-[#102F5D] text-center mt-2 text-base sm:text-sm lg:text-lg px-8">Also, I have a lot of hobbies and I really like cats :)</p>
                <p className="text-[#102F5D] text-center mt-2 text-base sm:text-sm lg:text-lg px-8">Thank you for visiting my portfolio!</p>
            </div>
        </section>
    );
}
