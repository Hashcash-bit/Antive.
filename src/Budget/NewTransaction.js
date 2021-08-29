import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { MailOutlineSharp } from "@material-ui/icons";
import "./styles.css";
import { useAuth } from "../Signin/context/AuthContext";
import db from "../Signin/firebase";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
    },
    color: "white",
  },
  button: {
    background: "#445A6F",
    color: "#fff",
  },
  multilineColor:{
    color:'white'
  }
});
function NewTransaction({ addTrans }) {
  const apply = useStyle();
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const { currentUser } = useAuth();

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = newDate.getFullYear();
  let fulldate = `${date}/${month}/${year}`;
  let balance = 0
  
  const newTrans = () => {
    // let total = 0
    // db
    //   .collection("budget")
    //   .onSnapshot((querySnapshot) => {
    //     const items = [];
    //     querySnapshot.forEach((doc) => {
    //       items.push(doc.data());
    //     });
    //     for (let i = 0; i < items.length; i++ ) {
    //       total += parseInt(items[i].amount)
    //       console.log(items[i].amount)
    //     }
    //     console.log(total)
    //     total = 0
    //   });

    
    console.log(balance) 

    const transaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
    };
    
    if (amount >= 0 || amount <= 0) {
      if (text == undefined) {
        db
          .collection("budget")
          .add({
            name: "",
            amount: transaction.amount,
            userId: currentUser.uid,
            date: fulldate,
          })
      } else {
        db
          .collection("budget")
          .add({
            name: transaction.text,
            amount: transaction.amount,
            userId: currentUser.uid,
            date: fulldate
          })
      }
    }

    addTrans(transaction);
  };

  return (
    <Box className={apply.container}>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter Expense"
        InputLabelProps={{
            style: { color: '#fff' },
        }}
        InputProps={{
            className: apply.multilineColor
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Total Amount"
        InputLabelProps={{
            style: { color: '#fff' },
        }}
        InputProps={{
            className: apply.multilineColor
        }}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="btnbackground">
        <button className="addbtn" onClick={newTrans} variant="contained">
          {" "}
          +{" "}
        {/* {window.location.reload(false)} */}
        </button>
        <div className="textbtn">
          <h5 className="text">Add Income or Expense</h5>
          <h6 className="text1">Date: {fulldate}</h6>
        </div>
      </div>
      {/* <Button className={apply.button} onClick={newTrans} variant="contained">Add New Transaction</Button> */}
    </Box>
  );
}

export default NewTransaction;