import React from 'react';

const Support = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12">
      <h1 className="text-2xl font-semibold">Hi, What can we help you with?</h1>
      <p className="text-center text-gray-600 max-w-lg mt-2">
        We're here to make your experience smooth and hassle-free. Whether you have questions, need support, 
        or just want to learn more, feel free to reach out. Our team is ready to help with anything you need, just let us know.
      </p>

      <div className="mt-6 w-full max-w-2xl">
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium">Name<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Please enter your name" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Contact Number</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Eg: 999 999 9999" />
            </div>
            <div>
              <label className="block font-medium">Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Ex: johnmercury@gmail.com" />
            </div>
          </div>

          <div>
            <label className="block font-medium">Support Type<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
              <option>Select the team you need assistance from.</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Subject<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Choose a subject that best matches your query." />
          </div>

          <div>
            <label className="block font-medium">Message/Inquiry<span className="text-red-500">*</span></label>
            <textarea className="w-full border border-gray-300 rounded-md p-2 mt-1 h-28" placeholder="Describe the issue or request you need help with."></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-md">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;