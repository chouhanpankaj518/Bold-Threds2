import { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";

const Customized = ({ showcard }) => {
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };
  
  let   productinfo = [
    {
      Manufacturer :"Awesome Fab Shopping Pvt Ltd , Awesome Fab Shopping Pvt Ahmedabad -382405" ,
      Packer :"Awesome Fab Shopping Pvt Ltd",
      Importer :"Awesomefab Shopping Private Limited A-101 ANZ OPP BALHANUHAM NR CHRUCH, Nr , COZY HOSTEL STREET, Ahmedabad ,Gujarat 382405 ", 
      ItemWeight :"500g",
      ItemDimesionsLxWxH :"30 x 25 x 3 Centimeters",
      GenericName :"T-Shirt"
      
    }
  ]



 
  // ... existing code ...

  return (
    <div className='py-10'>
      {showcard.map((item, index) => (
        <div key={index} className="container mx-auto px-4 py-8 bg-white">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
               
                src={item.image}
                alt="Product"
                className="w-96 mx-auto bg-transparent h-96 rounded-lg shadow-lg  duration-200 ease-out hover:scale-105 transition-transform"
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">Stylish Leather Backpack</h1>
          <p className="text-gray-600 mb-4">
            High-quality leather backpack perfect for daily use or weekend getaways.
            Features multiple compartments and adjustable straps for comfort.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2">$79.99</span>
            <span className="text-sm text-gray-500 line-through">$99.99</span>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1 w-16 text-center"
              min="1"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center mb-4">
            <TiShoppingCart className="mr-2" size={20} />
            Add to Cart
          </button>
          <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center">
            {/* <Heart className="mr-2" size={20} /> */}
            Buy Now
          </button>
        </div>
          </div>
          <h1>Additional Information</h1>
        </div>
      ))}
    </div>
  );
};

export default Customized;