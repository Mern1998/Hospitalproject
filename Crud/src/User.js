import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 function User (){
    const [users , setUsers]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000")
        .then(result=> setUsers(result.data))
        .catch(err => console.log(err))
    },[])
    const handleDelete =(id)=>{
     axios.delete("http://localhost:4000/deleteUser/"+id)
     .then(result=> {console.log(result)
        window.location.reload()
     })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <Link to="/Create" className="btn btn-success">Add +</Link>
             <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                            <Link to={`/update/${user._id}`}className="btn btn-success">Upadate</Link>

                            <button className="btn btn-danger" onClick={(e)=> handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }

                </tbody>
             </table>
            </div>
        </div>
    )
 }
 export default User