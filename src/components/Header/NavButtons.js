import styles from "./NavButtons.module.css";
const NavButtons= ()=>{

    return(
       <div className={styles.span}>
            <span className={styles.nav}>Home</span>
            <span className={styles.nav}>Services</span> 
            <span className={styles.nav}>Join us</span>       
            <span className={styles.nav}>About</span>       
            <span className={styles.nav}>Contacts</span>
            
       </div>
       
    )
}

export default NavButtons;