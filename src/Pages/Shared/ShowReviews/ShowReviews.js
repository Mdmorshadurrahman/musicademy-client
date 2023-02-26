import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';

const ShowReviews = ({review}) => {
    const {user} = useContext(AuthContext)
    const {_id,course_id,course_title,Reviewer_name,Reviewer_email,Review} = review;
    // console.log('review',review)
    const handleDelete = (id) =>{
        console.log(id)
        const acknowledgement = window.confirm('Do you want to delete this item?');
        if(acknowledgement){
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })    
            window.location.reload(true);
        }
        else{
            window.location.reload(true);
        }
    }
    // const handleEdit = (id) =>{
    //     fetch(`http://localhost:5000/myreviews/${id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    // }
    return (
        <div className='my-10 rounded-lg w-3/5 mx-auto' >
            <div className="card shadow-xl w-full " style={{ backgroundImage: `url("https://i.ibb.co/wyzvft3/top-view-hand-holding-pencil-with-copy-space.jpg")`, backgroundPosition:'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="card-body ">
                <h1 className="text-3xl text-left "><span className='text-violet-600'>Course: </span>{course_title}</h1>
                <h2 className="text-2xl text-left"><span className='text-violet-600'>Reviewer: </span> {Reviewer_name}</h2>
                <p className='text-xl text-left my-5'><span className='text-violet-600'>Review: </span> {Review}</p>
                {user.email==Reviewer_email && <div className="card-actions justify-end my-2">
                <button onClick={() => handleDelete(_id)} className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Delete</button>
                <button className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Edit</button>
                </div>}
            </div>
            </div>
        </div>
    );
};

export default ShowReviews;