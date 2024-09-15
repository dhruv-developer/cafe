import h1 from './1.jpeg';
import h2 from './2.jpeg';
import h3 from './3.jpeg';
import h4 from './4.jpeg';
import h5 from './5.jpeg';
import h6 from './6.jpeg';
import h7 from './8.jpeg';
import h8 from './9.jpeg';

import h10 from './11.jpeg';

const FoodGallery = () => {
  const foodImages = [h1, h2, h3, h4, h5, h6, h7,h8,h10];

  return (
    <section id="gallery" className="py-16 bg-custom-back">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {foodImages.map((image, index) => (
          <div key={index} className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
            <img src={image} alt={`Food ${index}`} className="w-full h-64 object-cover md:h-80" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodGallery;
