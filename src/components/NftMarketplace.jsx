import React, { useState } from 'react';
import { AuroraBackground } from './ui/aurora-background';
import { FileUpload } from './ui/file-upload';
import CardOne from './cards/CardOne';
import CardTwo from './cards/CardTwo';
import CardThree from './cards/CardThree';

const NftMarketplace = () => {
  // State to store the form values
  const [formData, setFormData] = useState({
    itemName: '',
    website: '',
    royalties: '',
    size: '',
    property: '',
    price: '',
    collection: '', // exclusive, premium, deluxe
  });

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle card selection
  const handleCardSelection = (collectionType) => {
    setFormData((prevData) => ({
      ...prevData,
      collection: collectionType,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Perform additional actions like sending data to a server here
  };

  return (
    <>
      <div className="relative h-screen">
        <AuroraBackground />
        <div className='absolute inset-0 flex flex-col items-center justify-start z-10 p-8'>
          {/* Main content wrapper */}
          <div className='flex flex-col text-white gap-6'>
            {/* Section: Create New NFT */}
            <div className='flex flex-col text-white gap-4'>
              <h1 className='text-4xl font-valo'>Create New NFT</h1>
              <h2 className='text-lg font-alata'>You can set preferred display name, create your profile URL and manage other personal settings.</h2>
              <hr className='w-full border-gray-500' />
            </div>

            {/* Section: File Types */}
            <div className='flex flex-col text-white gap-4 mt-8'>
              <h1 className='text-4xl font-valo'>Image, Video, Audio, or 3D Model</h1>
              <h2 className='text-lg font-alata'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.</h2>
              <hr className='w-full border-gray-500' />
            </div>

            {/* File Upload Component */}
            <FileUpload />

            {/* Input Fields */}
            <div className='mt-12'>
              <h1 className='text-white text-2xl'>Item Name</h1>
              <input
                type='text'
                name='itemName'
                placeholder='Your Name'
                value={formData.itemName}
                onChange={handleInputChange}
                className='p-2 w-80 bg-gray-700 text-white rounded-lg border border-gray-500 focus:outline-none'
              />
            </div>

            <div className='mt-12'>
              <h1 className='text-white text-2xl'>Website</h1>
              <input
                type='text'
                name='website'
                placeholder='https://website'
                value={formData.website}
                onChange={handleInputChange}
                className='p-2 w-80 bg-gray-700 text-white rounded-lg border border-gray-500 focus:outline-none'
              />
            </div>

            {/* Nested div with details about the NFT */}
            <div className="w-full mt-12 p-8 bg-neutral-900 rounded-lg shadow-lg">
              <div className="w-full max-w-7xl p-6 bg-neutral-800 rounded-lg">
                <p className="text-white text-2xl font-alata w-full z-10 mb-8">
                  Ciscrypt will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
                </p>

                <h1 className="text-3xl font-bold text-white mb-4">Choose Collection</h1>
                <h2 className="text-lg text-gray-300 mb-8">
                  Choose an existing collection or create a new one
                </h2>

                {/* Card section */}
                <div className="flex items-center justify-around mb-8 space-x-4">
                  <CardOne onClick={() => handleCardSelection('exclusive')} />
                  <CardTwo onClick={() => handleCardSelection('premium')} />
                  <CardThree onClick={() => handleCardSelection('deluxe')} />
                </div>

                {/* Form inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <label className="flex flex-col text-white">
                    <span className="mb-2">Royalties</span>
                    <input
                      type="number"
                      name="royalties"
                      placeholder="20%"
                      value={formData.royalties}
                      onChange={handleInputChange}
                      className="p-2 rounded border border-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex flex-col text-white">
                    <span className="mb-2">Size</span>
                    <input
                      type="text"
                      name="size"
                      placeholder="165 MB"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="p-2 rounded border border-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex flex-col text-white">
                    <span className="mb-2">Property</span>
                    <input
                      type="text"
                      name="property"
                      placeholder="Property"
                      value={formData.property}
                      onChange={handleInputChange}
                      className="p-2 rounded border border-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <label className="flex flex-col text-white">
                    <span className="mb-2">Price</span>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="p-2 rounded border border-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none"
                  >
                    Upload
                  </button>
                  <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition focus:outline-none">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftMarketplace;
