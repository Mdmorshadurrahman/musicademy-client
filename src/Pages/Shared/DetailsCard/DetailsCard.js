import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import '../DetailsCard/DetailsCard.css';

const DetailsCard = ({details}) => {
    const {user} = useContext(AuthContext);
    const {image,description,duration,price,title,total_lesson,course_id,_id} = details;
    const infoForMyCourse ={
        user_email : user?user.email:"unregistered",
        image,
        description,duration,price,title,total_lesson,course_id,_id
    }
    const navigate = useNavigate();
    const handleAddToCart = () => {
        if(user){
            fetch('https://musicademy-server.vercel.app/mycourses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoForMyCourse)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(er => console.error(er));
        alert('has been successfully added!')
        window.location.reload(true);
        }
        else{
            alert('Log in first to add any courses');
            navigate('/login');
        }
    }
    const handleDelete = (id) =>{
        console.log(id)
        const acknowledgement = window.confirm('Do you want to delete this item?');
        if(acknowledgement){
            fetch(`https://musicademy-server.vercel.app/mycourses/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('inside',data);
            })    
            window.location.reload(true);
        }
        else{
            window.location.reload(true);
        }
    }

    return (
        <div className={`mx-auto w-3/5 py-20 ${details.user_email?'bg-transparent':'mycourse-bgimage'}`} >
            {details.user_email?<></>:<h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg'>Course Details</h1>}
            <div className="card w-4/5 mx-auto my-10 bg-base-100 shadow-xl">
             <figure><img src={image} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-5">
                {course_id}. {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="overflow-x-auto my-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead className=''>
                        <tr>
                            <th>Lesson</th>
                            <th>Duration</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>{total_lesson}</td>
                            <td>{duration} Weeks</td>
                            <td className=' font-bold'>{price} €</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {details.user_email?<div><button onClick={() => handleDelete(_id)} className="text-2xl hover:text-4xl font-light hover:border-2 hover:border-violet-600 hover:bg-black hover:text-violet-600 p-3 rounded-lg">Delete</button></div>
                :<div className="card-actions justify-center">
                    <NavLink ><button onClick={handleAddToCart} className="font-light hover:border-2 hover:rounded-lg hover:border-violet-600 text-2xl hover:text-4xl hover:text-violet-600 hover:bg-black p-2">Add To Cart</button></NavLink>
                </div>}   
            </div>
        </div>
        </div>
    );
};

export default DetailsCard;