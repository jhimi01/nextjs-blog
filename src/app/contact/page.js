// pages/contact.js

import Buttoncustom from '@/components/custombutton/Button';


export default function Contact() {
    return (
        <div className="custom-width min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <a href="/" className="text-sm text-black">&larr; Go back</a>
              <h1 className="text-5xl font-serif text-black mt-4">Here to <span className="underline text-black">help</span></h1>
              <form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="full-name" className="sr-only">Full name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder="Enter your full name..."
                      className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      placeholder="Enter your email address..."
                      className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-number" className="sr-only">Contact number</label>
                    <input
                      type="tel"
                      id="contact-number"
                      name="contact-number"
                      placeholder="Enter your contact number..."
                      className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows="4"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full btn-custom"
                  >
                    Send message &rarr;
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">Join our newsletter</h2>
              <p className="mt-2 text-black">Add your details and you’ll receive our quarterly email, including what’s happening with the wildlife, nature and communities around Lewa House.</p>
              <form className="mt-4">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletter-email"
                    placeholder="Enter your email address..."
                    className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                {/* <button
                  type="submit"
                  className="mt-4 bg-black text-white font-semibold py-2 px-4 rounded-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Sign up &rarr;
                </button> */}
                <div className='mt-4'>
                <Buttoncustom text={'Sign up &rarr'}/>
                </div>
              </form>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-black">For bookings, rates & reservations:</h3>
                <p className="mt-2 text-black">Bush and Beyond</p>
                <p className="mt-1 text-black">info@lewahoouse.com</p>
                <p className="mt-1 text-black">+254 (0)710 791303</p>
                <p className="mt-4 text-black">Lewa House Pimbi Ltd.</p>
                <p className="mt-1 text-black">P.O. Box 760</p>
                <p className="mt-1 text-black">Isiolo, 60300</p>
                <p className="mt-1 text-black">Kenya</p>
              </div>
            </div>
          </div>
        </div>
      );
}
