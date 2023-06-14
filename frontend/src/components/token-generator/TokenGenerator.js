import { useEffect, useState } from 'react';
import { uid, suid } from 'rand-token';

const TokenGenerator = () => {
   const [token, setToken] = useState('');

   useEffect(() => {
      const generateToken = () => {
         const token = suid(16);
         setToken(token);
      };

      generateToken();
   }, []);

   return (
      <div>Generated Token: {token}</div>
   );
};

export default TokenGenerator;