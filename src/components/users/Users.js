import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg';


function Users() {
   const url = "http://localhost:3000/users";
   const [users, setUsers] = useState([]);
   const [searchValue, setSearchValue] = useState('');

   const getUsers = async () => {
      try {
         const response = await axios.get(url)
         setUsers(response.data);
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getUsers()
   }, []);

   return (
      <div className='page-section '>
         <h2 className='page-header'>SmartIDy Users</h2>
         <div className='page-body'>
            <div className="col">
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Search by Individual Name..."
                     value={searchValue}
                     class="form-control"
                     onChange={(e) => setSearchValue(e.target.value)}
                  />
               </div>
            </div>
            <div className="table-responsive">
               <table>
                  <thead>
                     <tr>

                        <th>Individual Name</th>
                        <th>Business Name</th>
                        <th>Individual Email</th>
                        <th>Individual Mobile</th>
                        <th>User ID</th>
                        <th width="100px" >Status</th>
                        <th width="50px"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.filter((user) =>
                        user.individual.name.toLowerCase().includes(searchValue.toLowerCase())
                     ).map((user) => {
                        return (
                           <tr key={user.id}>
                              <td>
                                 <div className='user-details'>
                                    <img className='pic' src={user.profilePic != null ? user.profilePic : ProfilePhotoDefault} />
                                    <span className='name'>{user.individual.name}</span>
                                 </div>
                              </td>
                              <td>{user.business.name}</td>
                              <td>{user.individual.email}</td>
                              <td>{user.individual.call}</td>
                              <td>{user.userId}</td>
                              <td>
                                 {user.status ? <div class="status active">Active</div> : <div class="status inactive">Inactive</div>}
                              </td>
                              <td><button type='button' title='Edit' className='btn btn-primary'><i className='fal fa-pencil'></i></button></td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
export default Users;
