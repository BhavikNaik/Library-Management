import React from 'react';
import {Card,CardBody,CardHeader,CardText} from 'reactstrap';

function UserDetail() {
return(
      <div className='records'>
        <div className="mt-6 text-center align-self-center">
            <div className="row text-center justify-content-center">
            
            <Card className="heading">
                
        <CardHeader><h3 className='cardwala'>User Details</h3></CardHeader>
        <CardBody>
          <CardText className='cardwal'>
          <h5> Username : {'bhavik.naik'}</h5>
          <h5> Roll No.: {'87'}</h5>
          <h5> Admin Id : {'hkfkduf'}</h5>
          <h5> Email : {'bhavik.naik@somaiya.edu'}</h5>
          </CardText>
        </CardBody>
          </Card>
            </div>
            </div>
        </div>
        );
}

export default UserDetail;