import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const[bombMessage, setBombMessage] = useState('')

  function ErrorBoundaryTest(event){
    event.preventDefault()
    setBombMessage(event.target.value)
  }

  function Bomb(){  
      throw new Error('Something Went Wrong!!! Contact Our Team For Help')
  }
  return (
    <motion.div
      className="homepage"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <div
        className="homepage-div"
        data-aos="flip-up"
        data-aos-delay="130"
      >
        Welcome To The P-senger🦜 App.<br></br>
        Where You Find Details Of People That<br></br>
        Are Ready To Make Friends With You. 🥰<br></br>
        <a href="/users" className="btn find btn-primary">
          Find Now
        </a>
        <br></br>
        <br></br>
       
       <code>Error Boundary</code>
        <input className="form-control" type='text' placeholder="Type 'bomb' To See Error Boundary" onChange={ErrorBoundaryTest} value={bombMessage} />
        {bombMessage === 'bomb' ? <Bomb /> : ''}
      </div>
    </motion.div>
  );
}

export default Home;
