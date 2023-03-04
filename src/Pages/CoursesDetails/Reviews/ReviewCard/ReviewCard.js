import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/UserContext';
import { useNavigate } from 'react-router-dom';


const ReviewCard = ({details}) => {
    const navigate = useNavigate();
    const {_id, title, course_id} = details;
    const {user} = useContext(AuthContext);
    const handleReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.FirstName.value} ${form.LastName.value}`;
        const email = user.email;
        const review = form.review.value;

        const postReview = {
            course_id: course_id,
            course_title: title,
            Reviewer_name: name,
            Reviewer_email: email,
            Review: review
        }
        console.log(name,email,review);
        form.reset();
        fetch('https://musicademy-server.vercel.app/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(er => console.error(er));
        window.location.reload(true);
    }
    return (
        <div className=' mx-auto w-3/5 my-5'>
            <form onSubmit={handleReviews}>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your First Name?</span>
            </label>
            <input name='FirstName' type="text" placeholder="FirstName" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your Last Name?</span>
            </label>
            <input name='LastName' type="text" placeholder="LastName" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">What is your Email?</span>
            </label>
            <input name='Email' type="Email" defaultValue={user.email} placeholder="Email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Opinion</span>
            </label>
            <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Review" required></textarea>
            </div>
            <div className='my-5'>
                <input type='submit' value='Post your Review' className='border-2 border-violet-600 text-2xl font-light p-2 rounded-lg text-white hover:bg-violet-600 hover:text-black hover:border-black cursor-pointer'/>
            </div>
            </form>
        </div>
    );
};

export default ReviewCard;