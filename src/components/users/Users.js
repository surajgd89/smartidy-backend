import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';




function Users() {
   const url = "http://localhost:3000/userList"
   const [users, setUsers] = useState([]);
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const { data } = await axios.get(url)
            setUsers(data)
            console.log(data)
         } catch (error) {
            console.log(error)
         }
      }

      fetchUsers()
   }, []);


   const columns = [
      {
         name: 'ID',
         selector: row => row.id,
      },

      {
         name: 'Name',
         selector: row => row.name,
      },

      {
         name: 'Business Name',
         selector: row => row.businessName,
      },

      {
         name: 'Email',
         selector: row => row.email,
      },

      {
         name: 'Mobile',
         selector: row => row.mobile,
      },

      {
         name: 'User ID',
         selector: row => row.userId,
      },

      {
         name: 'Status',
         selector: row => row.status,
      }
   ];



   if (users.length === 0) {
      return <div>Loading Data</div>
   }

   return (
      <div className='page-section '>
         <h2 className='page-header'>Users</h2>
         <div className='page-body'>




            {/* <table className='table'>
               <tr>
                  <th>Name</th>
                  <th>Business Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>UserID</th>
                  <th>Status</th>
                  <th></th>
               </tr>
               <tr>
                  <td>Suraj Patil</td>
                  <td>Shreesha Digital</td>
                  <td>suraj.gd89@gmail.com</td>
                  <td>9594415153</td>
                  <td>SurajPatil5153</td>
                  <td>Active</td>
                  <td>
                     <button type='button' title='Delete' className='btn'><i className='fal fa-pencil'></i></button>
                  </td>
               </tr>
            </table> */}
         </div>
      </div>
   )
}
export default Users;
