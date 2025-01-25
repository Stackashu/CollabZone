import React, { useState } from 'react'
import style from "../../styles/Landing/Contact.module.css";
import "../../App.css";
import contactimg from "../../assests/images/newcontact.png";
import contactarrow from "../../assests/images/contactarrow.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [describe, setDescribe] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault(); 
  
  }
 
  return ( 
    <div className={`${style.box}`}>

      <h1 className={`${style.heading}`}>Contact Us</h1>

      <div className={`${style.innerbox}`}>

        <div className={`${style.left}`}>
          <h2>Our team will connect with you shortly to assist you with your inquiries.</h2>
          <img src={contactimg} alt={contactimg} />
        </div>
 
        <div className={`${style.right}`}>
          <form className={`${style.formm1}`} onSubmit={handleSubmit}>
            <div className={`${style.formbox1}`}>
              <label>Name</label>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            </div>
            <div className={`${style.formbox1}`}>
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' />
            </div>
            <div className={`${style.formbox}`}>
              <label>Subject</label>
              <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Enter subject' />
            </div>
            <div className={`${style.formbox2}`}>
              <label>Describe</label>
              <textarea rows={8} type="text" name="describe" value={describe} onChange={(e) => setDescribe(e.target.value)} placeholder='Enter decsription' />
            </div>

            <button>
              <h3>Send Message</h3>
              <img src={contactarrow} alt={contactarrow} />
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact