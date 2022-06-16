import React from "react";
import "./pay.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pay() {
  const [debit, setDebit] = useState(false);
  const [otp, setOtp] = useState(false);
  const [error, setError] = useState(true);
  const [cvv, setCvv] = useState(0);
  const [car, setCar] = useState(0);
//   const [cod, setCod] = useState(false);

  let navigate = useNavigate();

  const payment = (e) => {
    e.preventDefault();
    
    setOtp(!otp);

    if (cvv.length != 3) {
      setError(true);
      alert("Invalid CVV");
    } else {
      setError(false);
    }
    if (car.length != 16) {
      setError(true);
      alert("Invalid Card Number");
    } else {
      setError(false);
    }
  };
//   var count = 0;
  const arfeenChange = (e) => {
    // count++;
    // console.log(count);
    // if (count === 16) {
    //   setError(false);
    // //   alert("Invalid Card Number");
    // } else {
    //     setError(true);
    //     // alert("Invalid Card Number");
    // }
    setCar(e.target.value);
  };

  const checkCvv = (e) => {
    setCvv(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.year);
  };
  return (
    <>
      {/* <h1 className="img_over">Payment</h1> */}
      <div
        style={{
          width: "40%",
          margin: "auto",
          lineHeight: "48px",
          height: "auto",
          marginTop: "50px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          paddingBottom: "25px",
          paddingTop: "30px",
        }}
      >
        <form action="" style={{marginLeft:'10px'}}>
          <input
            type="checkbox"
            onChange={() => setDebit(!debit)}
            style={{ cursor: "pointer" }}
          />
          <label htmlFor=""> Debit Card/ Credit Card</label>
        </form>
        <div>
          {debit ? (
            <div style={{ margin: "auto" }}>
              <form onSubmit={payment} style={{marginLeft:'10px'}}>
                <label htmlFor="">Card Number:</label> <br />
                <input style={{border:'2px solid black',marginLeft:'10px'}}
                  className="arfeen_class"
                  type="number"
                  onChange={(e) => arfeenChange(e)}
                />{" "}
                <br />
                <label htmlFor="">Valid thru</label> <br />
                <input
                  className="arfeen_class"
                  type="month"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label htmlFor="">CVV</label> <br />
                <input
                  style={{
                    borderRadius: "15px",
                    width: "400px",
                    fontSize: "20px",
                    marginLeft:'10px',
                    padding: "5px",
                    border: "2px solid black",
                  }}
                  className="arfeen_class"
                  type="text"
                  onChange={(e) => checkCvv(e)}
                />{" "}
                <br />
                <input style={{marginLeft:'10px',marginTop:'10px'}} className="bhushan_button" type="Submit" value="Pay" />
              </form>
            </div>
          ) : (
            ""
          )}

          {otp && !error ? (
            <div>
              <form style={{marginLeft:'10px'}}
                action=""
                onSubmit={() => {
                  if(error){alert('Invalid Credentials')}
                  else{ 
                    alert("Payment Successfull");
                    setOtp(false);
                    navigate(`/`);}}}>
                  
                <label htmlFor="">One Time Password</label> <br />
                <input
                  className="arfeen_class"
                  type="text"
                  style={{width: "180px",borderRadius: "15px",height: "40px",border: "1px solid black",}}/>{" "}
                <br />
                <input className="bhushan_button" type="Submit" value={"Confirm"}/>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Pay;
