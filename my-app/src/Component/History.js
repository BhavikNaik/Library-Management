import React from 'react';
import { Table } from 'reactstrap';

const History = () => {
  return (
    <div className='records'>
    <div className="mt-6 text-center align-self-center full sma">
            <div className="row text-center justify-content-center">
            <div className="col-12">
                <h3 className='headingss'>Issue History</h3>
                <Table className='tab' striped bordered hover responsive>
        <thead>
           <tr>
            <th className='th2'>S.No.</th>
            <th className='th2'>Name of Book</th>
            <th className='th2'>ISBN number</th>
            <th className='th2'>Issue Date</th>
            <th className='th2'>Return Deadline</th>
            <th className='th2'>Return status</th> 
            <th className='th2'>Fine (in Rs.)</th> 
           </tr>
        </thead>
        <tbody>
            <tr>
                <td className='th2'>1</td>
                <td className='th2'>python</td>
                <td className='th2'>35656543</td>
                <td className='th2'>20-11-2022</td>
                <td className='th2'>22-11-2022</td>
                <td className='th2'>pending</td>
                <td className='th2'>0 Rs</td>
            </tr>
            <tr>
                <td className='th2'>2</td>
                <td className='th2'>javascript</td>
                <td className='th2'>54645354</td>
                <td className='th2'>20-11-2022</td>
                <td className='th2'>22-11-2022</td>
                <td className='th2'>pending</td>
                <td className='th2'>0 Rs</td>
            </tr>
        </tbody>
        </Table>
            </div>
            </div>
            </div>
    </div>
  );
}

export default History;