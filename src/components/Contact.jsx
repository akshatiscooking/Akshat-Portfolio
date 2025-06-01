const Contact = () => {
    return (
      <div className="w-[600px] mx-auto mt-15 p-12 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-4xl font-extrabold text-center text-sky-600 mb-3">Get in Touch</h1>
        <p className="text-center text-[#DF73FF] mb-10">
          Have a project in mind? Let’s make it happen.
        </p>
  
        <form className="space-y-7">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-sky-900 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Full Name"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF73FF] transition-all duration-150"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-sky-900 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF73FF] transition-all duration-150"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-sky-900 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF73FF] transition-all duration-150"
            ></textarea>
          </div>
  
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-[#DF73FF] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-75 transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Contact;
  