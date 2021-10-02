import React from 'react';
import {AiOutlineCamera, AIOutlineCamera} from 'react-icons/ai';

function ImageGrid(props) {
    return (
        <>
          <div className="w-full h-60 md:hidden">
            <img 
              src={props.images.length && props.images[0]}
              alt="restaurant"
              className="w-full h-full object-cover rounded-lg"
            />    
          </div>  
          <div className="hidden w-full h-96 md:flex gap-1">
              <div className="w-full h-full overflow-hidden rounded-lg">
                  <img 
                    src={props.images.length && props.images[0]}
                    alt="restaurant"
                    className="w-full h-full object-cover rounded-lg transition duration-700 transform hover:scale-110"
                  />
              </div>
              <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden rounded-lg">
                <img 
                    src={props.images.length > 1 && props.images[1]}
                    alt="restaurant"
                    className="w-full h-1/2 object-cover rounded-lg transition duration-700 transform hover:scale-110"
                />
                <img 
                    src={props.images.length > 2 && props.images[2]}
                    alt="restaurant"
                    className="w-full h-1/2 object-cover rounded-lg transition duration-700 transform hover:scale-110"
                />
              </div>
              <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden rounded-lg">
                  <div className="w-full h-1/2 relative">
                    <img
                        src={props.images.length > 3 && props.images[3]}
                        alt="restaurant"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-opacity-40 w-full h-full rounded-lg bg-black" />
                    <h4 className="absolute inset-y-1/2 z-20 w-full h-full text-center text-white font-semibold">
                        View Gallery
                    </h4>
                  </div>
                  <div className="w-full h-1/2 relative rounded-lg">
                    <img
                      src={props.images.length > 4 && props.images[4]}
                      alt="restaurant"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gray-400 w-full h-full rounded-lg bg-opacity-90" />
                    <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
                      <div className="bg-black p-3 rounded-full bg-opacity-50">
                        <AiOutlineCamera />
                      </div>
                      <h4>View Gallery</h4>
                    </div>
                  </div>
              </div>
          </div>
        </>
    );
}

export default ImageGrid;
