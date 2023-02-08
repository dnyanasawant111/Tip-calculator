import React from 'react';
import { useState } from 'react';

export default function Tip() {
  const [state, setstate] = useState({
    bill: '',
    service: '',
    customer: '',
    tip: ""
  });
  const [add, setadd] = useState([]);

  const [totaltip, setTotaltip] = useState('');

  const [totalcustomer, setTotalcustomer] = useState('')

  function insert(event) {
    setstate({ ...state, [event.target.name]: event.target.value });
  }


  function adddata() {
    state.tip = (state.bill * state.service)
    setadd([...add, state]);
  }

  function adddata1() {
    let calculateTotalTip = 0;
    add.map((ele) => {
      calculateTotalTip = calculateTotalTip + ele.tip
    });

    setTotaltip(calculateTotalTip);
    setTotalcustomer(add.length)
  }

  return (
    <div className="tip">

      <h4> Enter your bill amount</h4>

      <div >
        <input type={'text'} value={state.bill} name={'bill'} onChange={insert} className="rounded-pill" />

        <h4> How was the service ?</h4>

        <select name={'service'} value={state.service} onChange={insert} className="rounded-pill">
          <option>Select from here</option>
          <option value="0.2"> Excellent-20%</option>
          <option value="0.1">Medium-10%</option>
          <option value="0.05">Not so good-5%</option>
        </select>


        <br /> <br />

        <input
          type={'text'}
          placeholder="Customer Name"
          value={state.customer}
          name={'customer'}
          onChange={insert}
          className="rounded-pill"
        />

        <br /> <br />

        <button onClick={adddata} className="btn btn-primary"> Add Customer </button>

        <br /> <br />

      </div>

      <div className="tip1">
        <h3 className="Customerlist">Customer LIst</h3>
        <ul>
          {add.map((ele) => (
            <li>{ele.customer}  {'offering a tip of'} {ele.tip} {''}  {'rupee'} </li>
          ))}
        </ul>

      </div>
      <br /> <br />


      <button onClick={adddata1} className="btn btn-success"> Calculate Tip and Customer </button>

      <br /><br />

      <table className="total" >
        <tr>
          <th>Total Customer</th>
          <th>Total Tip</th>

        </tr>
        <tr>
          <td>{totalcustomer}</td>
          <td>{totaltip}</td>

        </tr>

      </table>
    </div>
  );
}
