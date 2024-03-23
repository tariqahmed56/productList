// ContactUs.js
import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-full mx-auto p-8 bg-white rounded-lg mt-4 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          <div>
            <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" alt="Contact Us" 
            
            className="w-[70%] h-auto  m-auto rounded-lg" />
          </div>
          <div>
            <p className="text-lg mb-4">
              We'd love to hear from you! Please feel free to reach out to us with any questions, comments, or concerns you may have.
            </p>
            <p className="text-lg mb-4">
              For general inquiries, you can contact our customer support team by filling out the form below or by sending an email to <strong>info@example.com</strong>. We strive to respond to all inquiries within 24 hours.
            </p>
            <p className="text-lg mb-4">
              Our office hours are Monday to Friday, 9:00 AM to 5:00 PM (local time). We're closed on weekends and public holidays.
            </p>
            <p className="text-lg mb-4">
              If you have any urgent matters or need immediate assistance, please call us at <strong>(123) 456-7890</strong>.
            </p>
            <p className="text-lg mb-4">
              You can also visit us in person at our office:
            </p>
            <address className="text-lg mb-4">
              123 Main Street<br />
              Cityville, State 12345<br />
              United States
            </address>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold">Name:</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold">Email:</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold">Message:</label>
                <textarea id="message" name="message" required rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
