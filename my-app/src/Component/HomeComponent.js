import React from 'react';

function Home() {
    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center ko">
            <h1 align="center" style={{fontSize:"3rem"}}> Welcome to the KJSCE Library</h1>
            </div>
            <div className="row darkbg inner">          
            <h6>
            The Central Library of Indian Institute of Technology (Indian School of Mines) Dhanbad is the heart of the institute providing direct academic and research supports to all departments. The Central Library is an automated library in terms of records organisation and management of all its different sections, search and discovery, information retrieval and service delivery. The whole library operations run on LIBSYS integrated library management software.
            </h6>
            </div>
            <div className="row darkbg justify-content-center align-self-center">
            <br/>
            <table className='tabla'>
                <tr> <th colspan="2">Library Timings</th> </tr>
                <tr> <td>Opening Time </td> 
                <td> 9.00 A.M.</td></tr>
                <tr> <td>Closing Time </td> 
                <td> 6.00 P.M.</td></tr>
            </table><br/>
                </div>
                <br/><br/><br/>
            </div>
        </>
        );
}

export default Home;