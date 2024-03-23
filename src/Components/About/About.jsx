// About.js
import React from 'react';

const About = () => {
  let url = 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div className="container mx-auto px-4 py-8 min-h-[100dvh] flex items-center justify-center">
      <div className="flex flex-col  items-center">
        <div className="md:w-1/2 md:pr-8 mb-4">
          <img src={url} alt="About Us" className="w-full h-[350px] object-cover object-top rounded-lg shadow-md"  />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our e-commerce store! We are passionate about providing high-quality products and excellent
            customer service to our valued customers.
          </p>
          <p className="text-lg mb-4">
            Our mission is to offer a wide range of products, from clothing and accessories to electronics and home
            goods, at competitive prices.
          </p>
          <p className="text-lg mb-4">
            At our store, customer satisfaction is our top priority. We strive to ensure that every shopping experience
            is smooth, convenient, and enjoyable for our customers.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing our store for your online shopping needs. We look forward to serving you and
            exceeding your expectations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
