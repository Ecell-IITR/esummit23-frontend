import React, { useEffect } from 'react';
import Head from './Navbar';
import MobHead from './mobileHeader';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

export default function Header() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  return (
    <>
      {/* {useMobile().isMobile ? <MobHead /> : <Head />} */}
      if({useMobile().isMobile}){<MobHead />}else{<Head />}
    </>
  );
}

// const finalNav = () => {
//   return (
//     <div>
//       <div className='mobHead'>
//         <MobHead/>
//       </div>
//       <div className='headerHead'>
//         <Head/>
//       </div>
//     </div>
//   )
// }

// export default finalNav
