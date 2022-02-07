function App() {
  return (
    <body className="App font-Poppins overflow-x-hidden">

      {/* Header */}
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1"><img src="./images/logo-bookmark.svg" alt="logo" /></div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="fas fa-bars text-xl"></i>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              A Simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
              load instantly. Try it for free.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">Get it on Chrome</button>
              <button type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">Get it on Firefox</button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/hero-bg.png" alt="" />
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">

        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>  
          <p className="text-center text-bookmark-grey mt-4">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
            your devices so you can access them on the go.
          </p>
        </div>

        {/* Feature #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/illustration-features-tab-1.png" alt="" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
                over how you manage your favourite sites.
              </p>
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
        </div>

        {/* Feature #2 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">

            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/illustration-features-tab-2.png" alt="" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Intelligent search</h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
                of your bookmarks.
              </p>
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36"></div>
        </div>

        {/* Feature #3 */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">

            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/illustration-features-tab-3.png" alt="" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">Share your bookmarks</h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.
              </p>
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
        </div>

      </section>

      {/* Download */}
      <section className="py-20 mt-20">

        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">Download the extension</h1>  
          <p className="text-center text-bookmark-grey mt-4">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
            prioritize.
          </p>
        </div>

        {/* Cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">

          {/* Card #1 */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <img src="./images/logo-chrome.svg" alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
              <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add & Install Extension</button>
            </div>
          </div>

          {/* Card #2 */}
          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className="p-6 flex flex-col items-center">
              <img src="./images/logo-firefox.svg" alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
              <p className="mb-2 text-bookmark-grey font-light">Minimum version 59</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add & Install Extension</button>
            </div>
          </div>

          {/* Card #3 */}
          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="p-6 flex flex-col items-center">
              <img src="./images/logo-opera.svg" alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
              <p className="mb-2 text-bookmark-grey font-light">Minimum version 73</p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button type="button" className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">Add & Install Extension</button>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bookmark-white py-20">
        <div className="container">

          {/* Heading */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>  
            <p className="text-center text-bookmark-grey mt-4">
              Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">

            {/* Item #1 */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What is a Bookmark?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>

            {/* Item #2 */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How can I request a new browser?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>

            {/* Item #3 */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Is there a mobile app?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>

            {/* Item #4 */}
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What about other Chromium browsers?</span>
              <i className="fas fa-chevron-down text-bookmark-purple"></i>
            </div>

            <button type="button" className="flex self-center mt-12 btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>

          </div>

        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-bookmark-purple text-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">35,000+ Already joined</p>
            <h1 className="text-3xl text-center">Stay up-to-date with what we're doing</h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <input type="text" name="" id="" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" />
              <button type="button" className="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src="./images/logo-bookmark-white.png" alt="logo" />
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <ul className="flex gap-10 mt-12 md:mt-0">
            <li className=""><i className="text-white text-2xl fab fa-twitter"></i></li>
            <li><i className="text-white text-2xl fab fa-facebook-square"></i></li>
          </ul>
        </div>
      </footer>

    </body>
  )
}

export default App
