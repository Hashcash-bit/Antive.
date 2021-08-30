import { Box, Divider, makeStyles, Typography, List } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import TransactionIterate from "./TransactionIterate"
import "./styles.css";
import { useAuth } from "../Signin/context/AuthContext";
import db from "../Signin/firebase";
import Balance from './Balance';
import { useHistory } from 'react-router'


const useStyle = makeStyles({
    component :{
       "& >*":{
           marginBottom : 10,
           color: "white",
        //    overflowY: "scroll",
       }
    },
    text :{
        marginTop: 0,
        // position: "relative",
        // overflowY: "scroll",
        alignItems : "start",
    },
    overflow : {
        overflowY: "auto",
        maxHeight: "200px",
        marginLeft: "10px",
    }
})

function TransactionDash({transaction, deleteTransaction}) {
    let [name, setName] = useState([])
    let [amount, setAmount] = useState([])
    let [date, setDate] = useState([])
    let [values, setValues] = useState([])
    let [docId, setDocId] = useState("")
    const { currentUser } = useAuth()

    useEffect(() => {
        setName([])
        setAmount([])
        setDate([])
        setValues([])
      db
      .collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (currentUser.uid === doc.data().userId) {
                name.push(doc.data().name)
                amount.push(doc.data().amount)
                date.push(doc.data().date)
                console.log(doc.data())
            }
        })
        setName([])
        setAmount([])
        setDate([])
        setValues([])
        setName(name)
        setAmount(amount)
        setDate(date) 
      })           
      }, [transaction]);

    const apply = useStyle()
    const history = useHistory()
    // history.go(0)
    // window.location.reload(false);
    return (
        <div>
            <Box className={apply.component}>
                <Typography className={apply.text} variant="h5">Transaction History</Typography>
                <Divider />   
                <List className={apply.overflow}>
                    {/* <h1>{name} {amount}</h1> */}
                    {/* {amount.map(function(item, i){
                        return <li key={i}>{name} {amount}</li>
                    })
                    } */}
                    {/* <ul>
                        {amount.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                    </ul> */}
                    {
                        amount.map((value, index) =>{
                            return <TransactionIterate key={index} name={name[index]} amount={value} date={date[index]} deleteTransaction={deleteTransaction}/>
                        })
                    }
                </List> 
            </Box>
        </div>
    )
}

export default TransactionDash