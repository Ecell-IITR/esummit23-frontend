import styles from './Footer.module.css'


function Footer() {
  return (
    <div>


 <div className={styles.Parent}>
      
    <div className={styles.footerLeft}>
         <div className={styles.logo}>
            <div className={styles.esummitLogo}>
            </div>
            <div className={styles.ecellLogo}>
            </div>
         </div>
         <div className={styles.contactLeft}>
            <div className={styles.email}>
            <div className={styles.headings}>Email:</div>esummitiitr@gmail.com
            </div>
            <div className={styles.phone}>
                    <div className={styles.headings}>Phone no :</div>
                    <div>Sarvesh-1234567890</div>
                    <div>Shashank-1234567890</div>
            </div>
         </div>
         <div className={styles.address}>
         <div className={styles.headings}>Our Address :</div>
         <div>E cell office, SAC, IIT Roorkee, Roorkee, Uttrakhand-2XXXXX</div>
         </div>

    </div>
    <div className={styles.footerRight}>
        <div className={styles.name}>
        <div className={styles.nameInput}>Name</div>
        </div>
        <div className={styles.contactRight}>
            <div className={styles.emailId}>Email Id
            </div>
            <div className={styles.type}>Type
            </div>


        </div>
        <div className={styles.message}>
            <div className={styles.writeMessage}>
            Write Your Message
            </div>
            <div className={styles.button}>
            Submit
            </div>
        
        </div>
        <div className={styles.socialHandles}>
            <div className={styles.about}><a href="www.google.com">About the team</a></div>
            <div className={styles.iconFacebook}></div>
            <div className={styles.iconInstagram}></div>
            <div className={styles.iconLinkedin}></div>
            <div className={styles.iconTwitter}></div>
        </div>
    </div>
      
      
      </div>
</div>





  )
}

export default Footer
