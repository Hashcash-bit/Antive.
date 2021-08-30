//React Shit
import React, { useEffect, useState } from "react";

//Database
import db from "../Signin/firebase";

//Styles
import {
  Card,
  CardContent,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import "../Budget/styles.css";

//Context
import { useAuth } from "../Signin/context/AuthContext";

function DashboardExpenseCard() {
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  const { currentUser } = useAuth();



  const useStyle = makeStyles({

    container: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },

    header: {
      color: "white",
      fontSize: 35,
      margin: "40px 30px",
      textTransform: "uppercase",
      background: "blue",
      padding: "30",
    },
    box: {
      background: "#1F1F1F",
    //   width: "80%",
      margin: "10px 10px",
      padding: 10,
      borderRadius: 20,
      display: "flex",
      // alignItems : "center",
      "&>*": {
        width: "50%",
        padding: 10,
        height: "700",
      },
      flewDirection: "row",
    },
  });

  const applyStyle = useStyle();

  useEffect(() => {
    db.collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (currentUser.uid === doc.data().userId) {
            // console.log(doc.data().name, doc.data().amount)
            if (parseInt(doc.data().amount) > 0) {
              income += parseInt(doc.data().amount);
            } else if (parseInt(doc.data().amount) < 0) {
              expense += parseInt(doc.data().amount);
            }
          }
        });
        setIncome(income);
        setExpense(expense);
      });
  }, []);

  return (
    <div>
      <Box className={applyStyle.container}>
        <Card>
          <CardContent>
            <Typography>Income</Typography>
            <Typography className={applyStyle.income}> $ {income}</Typography>
            {/* <div class="distribution">
              <div class="skill" style={incomeCss}>
                ${income}
              </div>
            </div> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>Expense</Typography>
            <Typography className={applyStyle.expense}> $ {expense}</Typography>
            {/* <div class="distribution">
              <div class="skill" style={expenseCss}>
                ${expense}
              </div>
            </div> */}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default DashboardExpenseCard;
