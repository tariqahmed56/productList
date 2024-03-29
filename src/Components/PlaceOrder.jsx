import React, { useState } from "react";

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
    alert("Order sucessFully placed");
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full border-gray-300 rounded-md px-3 py-2  focus:border-blue-500 border-[2px]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 border-[2px]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-2"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your address"
            required
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none h-24 border-[2px]"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            placeholder="03111111111"
            id="phone"
            name="phone"
            required
            value={formData.comments}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none border-[2px]"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
