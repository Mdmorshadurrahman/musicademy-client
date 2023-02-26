import React from 'react';
import { AuthContext } from '../../../../context/UserContext';

const {user} = AuthContext(AuthContext);
const ReviewCard = () => {
    return (
        <div className=' mx-auto w-3/5 my-5'>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your First Name?</span>
            </label>
            <input type="text" placeholder="FirstName" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your Last Name?</span>
            </label>
            <input type="text" placeholder="LastName" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your Email?</span>
            </label>
            <input type="Email" defaultValue={user.email} placeholder="Email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Review</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" placeholder="Review" required></textarea>
            </div>
        </div>
    );
};

export default ReviewCard;