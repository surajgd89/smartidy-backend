

function Users() {

   return (
      <div className='page-section'>
         <h2 className='page-header'>Users</h2>
         <div className='page-body'>
            <table className='table'>
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
                     <button type='button'>Edit</button>
                     <button type='button'>Delete</button>
                  </td>
               </tr>
            </table>
         </div>
      </div>
   )
}
export default Users;
