import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from '../Components/Loading'
import { motion } from "framer-motion";



function Users() {
const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100").then((response) => response.json()).then((result) =>
      setUsers(result.results),
      setLoading(true)
      );
      
  }, []);

  const pageCount = Math.ceil(users.length / usersPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <motion.div 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
      <h1 className='users-header' data-aos="fade-down" data-aos-delay="100">Active Users</h1>

      <div className="pagination">{

        loading ? users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
          return (
            <div key={user.email} className="li-div" data-aos="flip-up" data-aos-delay="200" >
              <img
                className="users-image"
                src={user.picture.thumbnail}
                alt="profile Picture"
              />
    
              <div >
                <p className="li">
                  <b>
                    Name: {user.name.title} {user.name.first} {user.name.last}
                  </b>
                </p>
                <p className="li">
                  <b>Username:</b> {user.login.username}
                </p>
                <p className="li">
                  <b>Email:</b> {user.email}
                </p>
                <p className="li">
                  <b>Gender: {user.gender}</b>
                </p>
                <p className="li">
                  <b>Phone No: {user.cell}</b>
                </p>
                <p className="li">
                  <b>Age: {user.dob.age}</b>
                </p>
                <p className="li">
                  <b>
                    Location: {user.location.street.number},{" "}
                    {user.location.street.name}, {user.location.city},{" "}
                    {user.location.state} {user.location.country}.
                  </b>
                </p>
              </div>
            </div>
          )
        }) : 
<Loading />
        

      }</div>

<div>

{
  loading ?       <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  disabledClassName={"paginationDisabled"}
  activeClassName={"paginationActive"}
/> : <Loading />
}

</div>

    </motion.div>
  );
}

export default Users;
