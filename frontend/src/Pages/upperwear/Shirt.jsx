import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon, HeartIcon } from 'lucide-react';
import first from '../../assets/Shirt/first.png'
import second from '../../assets/Shirt/second.png'
import third from "../../assets/Shirt/three.png"
import fourth from "../../assets/Shirt/fourth.png"
import five from "../../assets/Shirt/five.webp"
import six from "../../assets/Shirt/six.webp"
import seven from "../../assets/Shirt/seven.webp"
import eight from "../../assets/Shirt/eight.jfif"


const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['White', 'lightBlue', 'Pink', 'Black', 'Navy'];
const fits = ['Slim', 'Regular', 'Relaxed'];

let imagesdata = [
  {
    id: 1,
    image: first,
    title: "Stylish Casual Shirt"
  },
  {
    id: 2,
    image: second,
    title: "Elegant Formal Shirt"
  },
  {
    id: 3,
    image: third,
    title: "Classic Oxford Button-Down"
  },
  {
    id: 4,
    image: fourth,
    title: "Slim Fit Dress Shirt"
  },
  {
    id: 5,
    image: five,
    title: "Relaxed Fit Plaid Shirt"
  },
  {
    id: 6,
    image: six,
    title: "Modern Denim Shirt"
  },
  {
    id: 7,
    image: seven,
    title: "Linen Summer Shirt"
  },
  {
    id: 8,
    image: eight,
    title: "Premium Cotton Shirt"
  }
];


const Shirt = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedFit, setSelectedFit] = useState('Regular');
  const [mainImage, setMainImage] = useState(0);

  // Array of image URLs (using placeholders)
  const images = [
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y=",
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y=",
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y=",
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y=",
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y=",
    "https://media.istockphoto.com/id/2143792902/photo/a-mannequin-wearing-a-red-plaid-shirt-is-displayed-in-a-store.jpg?s=612x612&w=0&k=20&c=bjrF0Ib2g7mxV8Dv8b4NMnkeG1XIC4873sLHGS-bc8Y="
  ];

  return (
    <div>
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col lg:flex-row">
        {/* Product Images */}
        <div className="lg:w-2/3  lg:mb-0 lg:pr-8">
          <img 
            src={images[mainImage]} 
            alt={`Shirt view ${mainImage + 1}`} 
            className="w-full h-3/5 rounded-lg shadow-lg"
          />
          {/* <div className="grid grid-cols-6 gap-2 mt-3">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Shirt thumbnail ${index + 1}`} 
                className={`w-full h-24 object-cover rounded cursor-pointer ${index === mainImage ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div> */}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Classic Oxford Dress Shirt</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(89 reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$59.99</p>
          <p className="text-gray-600 mb-6">
            Our classic Oxford dress shirt is perfect for any formal or semi-formal occasion. Made from premium cotton for comfort and durability.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Color</h2>
            <div className="flex flex-wrap gap-2">
         
         
               {colors.map(color => (
               <button
                 key={color}
                 className={`w-8 h-8 rounded-full border-2 ${
                   selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                 }`}
                 style={{ backgroundColor: color.toLowerCase() }}
                 onClick={() => setSelectedColor(color)}
               />
             ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Fit Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Fit</h2>
            <div className="flex flex-wrap gap-2">
              {fits.map(fit => (
                <button
                  key={fit}
                  className={`px-4 py-2 border rounded ${
                    selectedFit === fit
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedFit(fit)}
>
                  {fit}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart and Wishlist Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 flex items-center justify-center">
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Additional Information */}
          <div className="">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>100% premium cotton</li>
              <li>Button-down collar</li>
              <li>Adjustable cuffs</li>
              <li>Chest pocket</li>
              <li>Machine washable</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div> 
        <h1>hwllo</h1>
        <h1>hwllo</h1>
        <h1>hwllo</h1>
        <h1>hwllo</h1>
        <h1>hwllo</h1>
        <h1>hwllo</h1>
      </div>
    </div>
    </div>
  );
};

export default Shirt;