export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
