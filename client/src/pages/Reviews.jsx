import React, {useEffect, useState} from 'react';
import AddReviewCard from '../Components/Restaurant/Reviews/AddReviewCard';
import ReviewCard from '../Components/Restaurant/ReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import {getReviews} from '../Redux/Reducer/Reviews/reviews.action';

function Reviews() {

    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      reduxState &&
        dispatch(getReviews(reduxState?._id)).then((data) => {
          setReviews(data.payload.reviews);
        });
    }, [reduxState]);

    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="w-full md:w-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {reviews.map((review) => (
                        <ReviewCard {...review} />
                    ))}
                </div>
                <aside style={{height:"fit-content"}}
                    className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white shadow-md p-3 flex-col gap-3">
                        <AddReviewCard />
                </aside>
            </div>
        </>
    );
}

export default Reviews;
