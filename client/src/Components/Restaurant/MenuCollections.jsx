import React, { useState } from 'react';
import ImageViewer from  'react-simple-image-viewer';

function MenuCollections(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openViewer = () => { setIsMenuOpen(true) };
    const closeViewer = () => { setIsMenuOpen(false) };

    return (
        <>
            {isMenuOpen && (
                <ImageViewer  
                    src={props.images} 
                    currentIndex={currentImage}
                    onClose={closeViewer}  
                />
            )}   
            <div className="w-32 md:w-48 h-32 md:h-48 flex flex-col" onClick={openViewer}>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img 
                        src={props.images[0]} 
                        alt="menu"
                        className="w-full rounded-lg transition duration-500 transform hover:scale-110"
                    />
                </div>
                <div>
                    <strong>{props.menuTitle}</strong>
                    <p>{props.pages} Pages</p>
                </div>
            </div>
        </>
    );
}

export default MenuCollections;
