import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';

const ShowReviews = ({review}) => {
    const [updatedMessageBox, setUpdatedMessageBox] = useState('');
    const [editableStatus, setEditableStatus] = useState(false);
    const [updateButtonStatus, setUpdateButtonStatus] = useState(false);
    const {user} = useContext(AuthContext)
    const {_id,course_id,course_title,Reviewer_name,Reviewer_email,Review} = review;
    // console.log('review',review)
    const handleDelete = (id) =>{
        console.log(id)
        const acknowledgement = window.confirm('Do you want to delete this item?');
        if(acknowledgement){
            fetch(`https://musicademy-server.vercel.app/myreviews/${id}`, {
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
    const handleUpdatedMessage = event => {
        setUpdatedMessageBox(event.target.value);
        console.log(updatedMessageBox);
    }
    const handleEdit = (id) =>{
        setEditableStatus(true);
        setUpdateButtonStatus(true);
    }
    const handleUpdate = (id) => {
        console.log(id);
        fetch(`https://musicademy-server.vercel.app/myreviews/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMessageBox)
        })
        .then(res => res.json())
        .then(data =>{
                console.log(data);
        })
        window.location.reload(true);
    }

    console.log(editableStatus);
    return (
        <div className='my-10 rounded-lg w-3/5 mx-auto' >
            <div className="card shadow-xl w-full " style={{ backgroundImage: `url("https://i.ibb.co/wyzvft3/top-view-hand-holding-pencil-with-copy-space.jpg")`, backgroundPosition:'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="card-body ">
                <h1 className="text-3xl text-left "><span className='text-violet-600'>Course: </span>{course_title}</h1>
                <h2 className="text-2xl text-left"><span className='text-violet-600'>Reviewer: </span> {Reviewer_name}</h2>
                <p className='text-xl text-left my-5'><span className='text-violet-600'>Review: </span> {!editableStatus?[Review]:<textarea name='updatedReview' onChange={handleUpdatedMessage} defaultValue={Review} className="textarea textarea-bordered h-24" placeholder="Review" required></textarea>}</p>
                {user?.email===Reviewer_email && <div className="card-actions justify-end my-2">
                <button onClick={() => handleDelete(_id)} className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Delete</button>
                {!updateButtonStatus?<button onClick={() => handleEdit(_id)} className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Edit</button>:
                <button onClick={() => handleUpdate(_id)} className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Update</button>}
                </div>}
            </div>
            </div>
        </div>
    );
};

export default ShowReviews;