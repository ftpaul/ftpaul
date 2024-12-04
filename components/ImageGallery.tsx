import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '/images/gallery/20211217-Lisbon-Airplane.jpg', alt: 'Lisbon Airplane' },
    { src: '/images/gallery/20220521-San-Francisco-Golden-Bridge.jpg', alt: 'San Francisco Golden Bridge' },
    { src: '/images/gallery/20221016-Berlin-Victory-Column.jpg', alt: 'Berlin Victory Column' },
    { src: '/images/gallery/20230630-Greece-European-Flag.jpg', alt: 'Greece European Flag' },
    { src: '/images/gallery/20230826-Italy-Wedding-Car.jpg', alt: 'Italy Wedding Car' },
  ];

  images.sort(() => Math.random() - 0.5);
  
  return (
    <div className="flex justify-center items-center space-x-12 xs:space-x-3 py-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-64 max-h-64  rounded-lg overflow-hidden shadow-lg transform ${
            index % 2 === 0 ? 'rotate-2' : '-rotate-2'
          } transition-transform duration-300 hover:scale-105
        ${index == 0 || index == (images.length-1)? "xs:hidden" : " -translate-x-2 xs:w-1/3"} `}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
