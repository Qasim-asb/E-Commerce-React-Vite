import styles from './Contact.module.css'
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa'
import Button from '../../components/Button/Button'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <form action="">
        <div className={styles.formGroup}>
          <label htmlFor="username"><FaUser /> Your Name</label>
          <div className={styles.inputWrapper}>
            <FaUser className={styles.inputIcon} />
            <input type="text" id="username" name="username" placeholder="Enter Your Name" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email"><FaEnvelope /> Email Address</label>
          <div className={styles.inputWrapper}>
            <FaEnvelope className={styles.inputIcon} />
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message"><FaComment /> Your Message</label>
          <textarea id="message" name="message" cols="30" rows="10" placeholder="How can we help you?" required></textarea>
        </div>

        <Button type='submit'><FaPaperPlane /> Send Message</Button>
      </form>
    </section>
  )
}

export default Contact