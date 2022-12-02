import styles from './Footer.module.css'
import Formsaa from './Form'

function Footer() {
  return (
    <div>

 <div className={styles.Parent}>
      
    <div className={styles.footerLeft}>
      <div className={styles.logoNew}>
        <div className={styles.summitLogoAndName}>
          <div className={styles.esummitLogo}><img src="vector.webp" className={styles.image}></img></div>
          <div className={styles.collegeName}>
            <div className={styles.nameOfCollege}><img src="motto.webp" className={styles.motto}></img></div>
            
          </div>
        </div>
      <div className={styles.ecellLogo}><img src="cellLogo.webp" className={styles.cellLogo}></img></div>



    
      </div>
      <div className={styles.description}>E-Summit being the flagship event of ECell, is held annually brings together the academic community, venture capitalists, new age entrepreneurs and all those passionate about entrepreneurship to common grounds
      </div>
      <div className={styles.handlesNewUp}>Follow us at</div>
      
        <div className={styles.handlesNew}> 
            <div className={styles.iconFacebook}><img src="facebook.webp" className={styles.icon}></img></div>
            <div className={styles.iconInstagram}><img src="twitter.webp" className={styles.icon}></img></div>
            <div className={styles.iconLinkedin}><img src="instagram.webp" className={styles.icon}></img></div>
            <div className={styles.iconTwitter}><img src="linkedin.webp" className={styles.icon}></img></div>
            <div className={styles.iconYoutube}><img src="youtube.webp" className={styles.icon}></img></div>
      
    
        </div>

    </div>

    <div className={styles.footerMiddle}>
         <div className={styles.address}>
         Address
         </div>
         <div className={styles.text}>  E-cell Office, SAC Building</div>
         <div className={styles.text}>IIT Roorkee</div>
         <div className={styles.text}>Roorkee, Uttrakhand - 247667</div>
         <br></br>
        
         <div className={styles.email}>E-mail</div><div className={styles.text}>esummitiitr@gmail.com</div>
         <br></br>
         
         <div className={styles.contactNo}> Phone No.</div>
         <div className={styles.text}>Pratyush: +91 9799042645</div>
         <div className={styles.text}>Shashank: +91 9102100531</div>
         
         
         

     
    </div>
    <div className={styles.footerRight}>
    <div className={styles.formsParent}>Contact Us<Formsaa/></div>
      
       





















    </div>
      
      
 </div>
</div>





  )
}

export default Footer





















// <div className={styles.summitYear}>E-SUMMIT'23</div>
//             <div className={styles.motto}>ds</div>
//             <div className={styles.countryName}><img src="BHARAT.png" className={styles.Bharat}></img></div>

// <div className={styles.contactUs}>Contact Us</div>
// <div className={styles.name}><input type="text"></input></div>
// <div className={styles.emailAddress}></div>
// <div className={styles.phoneNoAndQuery}>
//   <div className={styles.phoneNo}></div>
//   <div className={styles.query}></div>

// </div>
// <div className={styles.message}></div>
// <div className={styles.button}></div>
