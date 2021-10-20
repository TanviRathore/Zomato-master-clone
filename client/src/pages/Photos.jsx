import React, { useEffect, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import PhotoCollection from '../Components/Restaurant/PhotoCollection';

import {useDispatch, useSelector} from 'react-redux';
import {getImage} from '../Redux/Reducer/Image/Image.action';

function Photos() {

    const [photos, setPhotos] = useState([]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => {
        setIsMenuOpen(false);
    };

    const openViewer = () => {
        setIsMenuOpen(true);
    };

    const dispatch = useDispatch();

    const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);

    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.photos)).then((data) => {
                const images = [];
                data.payload.image.images.map(({location}) => images.push(location));
                setPhotos(images);
            });
        }
    }, [reduxState]);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer 
                    src={photos}
                    currentImage={currentImage}
                    onClose={closeViewer}
                    disableScroll={false}
                />
            )}
            <div className="flex flex-wrap md:gap-2 items-center justify-around gap-1">
                {photos.map((photo) => (
                    <PhotoCollection image={photo} openViewer={openViewer} />
                ))}
            </div>
        </>
    );
}

export default Photos;
