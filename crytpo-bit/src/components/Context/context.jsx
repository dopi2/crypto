/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import './context.css'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjevepz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<div className="container text-center" id='wholee'>
  <div className="row" id='made'>
    <div className="col" id='time'>
      <h1> Contact Us</h1>

      <h4>Get in touch</h4>
      <p><span>Email:</span>info@exelon.ng</p>
      <p><span>Phone Number:</span>+234 (0) 802 320 2769</p>
      <p><span>Address:</span>6th Floor, Re-Insurance House<br/>
46 Marina, Lagos Island
Lagos
Nigeria</p>
    </div>
    <div className="col" id='dami'>
     <form onSubmit={handleSubmit}>


<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label" htmlFor="email">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" id="email"
       type="email" 
       name="email"/>
             <ValidationError 
    prefix="Email" 
        field="email"
    errors={state.errors}
  />
</div>




<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  id="message"
        name="message"></textarea>
         <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>

<button type="submit" disabled={state.submitting} className="btn">
        Submit
        </button>
     
    </form>
    </div>
  </div>

</div>





    //   <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     Email Address
    //   </label>
    //   <input
    //     id="email"
    //     type="email" 
    //     name="email"
    //   />
    //   <ValidationError 
    //     prefix="Email" 
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError 
    //     prefix="Message" 
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

