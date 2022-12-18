import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from  '../Components/Footer/Footer'
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import {Navbar} from  '../Components/Navbar/Navbar'
import {mobNavbar} from  '../Components/Navbar/mobileHeader'

export default function Header() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  return <>{useMobile().isMobile ? <mobNavbar /> : <Navbar />}</>;
}


// export default function Home() {
//   return (
//     <>
//     <Footer/>
  

//     </>









