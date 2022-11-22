import React from 'react';
import { Table } from 'reactstrap';

const Books = () => {
  return(
    <div className='records'>
        <div className="container sma">
        <div className="row">
            <div className="col-12">
            <h3 align="center" className='headingss'>List of All books</h3>
            <Table className='tab' striped bordered hover responsive>
        <thead>
        <tr>
            <th className='th2'>S.No.</th>
            <th className='th2'>Name of Book</th>
            <th className='th2'>ISBN number</th>
            <th className='th2'>Authors</th>
            <th className='th2'>Copies available</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td className='th2'>1</td>
                <td className='th2'>React</td>
                <td className='th2'>56282</td>
                <td className='th2'>Myself</td>
                <td className='th2'>4</td>
            </tr>
            <tr>
                <td className='th2'>2</td>
                <td className='th2'>Express</td>
                <td className='th2'>45468</td>
                <td className='th2'>You</td>
                <td className='th2'>10</td>
            </tr>
        </tbody>
        </Table>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Books;