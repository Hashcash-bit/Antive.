import './budget.css';
import {Typography, makeStyles, Box } from "@material-ui/core"
import Balance from "../Budget/Balance"
import ExpenseCard from "../Budget/ExpenseCard"
import NewTransaction from "../Budget/NewTransaction"
import Transaction from "../Budget/Transaction"
import {useState, useEffect, useLayoutEffect} from "react"
import { HeaderAgenda } from "../Agenda/components/layout/HeaderAgenda";
import SideNavBar from "../Sidebar&Header/SideNavbar";
import db from '../Signin/firebase';
import { useAuth } from "../Signin/context/AuthContext";
import OfficialNav from '../OfficialNavbar/OfficialNav';


const useStyle= makeStyles({
  header:{
    color :"white",
    fontSize:35,
    margin : "40px 30px",
    textTransform : "uppercase",
    background : "blue",
    padding : "30"
  },
  box:{
    background: "#1F1F1F",
    width : "80%",
    margin :"10px 10px",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    // alignItems : "center",
    "&>*" :{
      width: "50%",
      padding: 10,
      height : "700",
    },
    flewDirection: "row",
  }
  })

function Budget() {
  const applyStyle = useStyle()
  let [bal, setBal] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  let [id, setId] = useState("id")
    // let bal = 0
    const { currentUser } = useAuth()
    
    // db
    // .collection("budget")
    // .get()
    // .then(function (querySnapshot) {
    //   querySnapshot.forEach(function (doc) {
    //     if (currentUser.uid === doc.data().userId) {
    //       console.log(doc.data().name, doc.data().amount)
    //       bal += parseInt(doc.data().amount, 10)
    //     }
    //   })
    // }) 
    // setBal(bal)

    useEffect(() => {
      db
      .collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (currentUser.uid === doc.data().userId) {
            // console.log(doc.data().name, doc.data().amount)
            console.log(typeof(doc.data().amount))
            bal += parseInt(doc.data().amount)
            if (parseInt(doc.data().amount) > 0) {
              income += parseInt(doc.data().amount)
            } else if (parseInt(doc.data().amount) < 0) {
              expense += parseInt(doc.data().amount)
            }
          }
        })
        console.log(bal)
        setBal(bal)
        setIncome(income)
        setExpense(expense)
      }) 
    }, []);

  const [transaction, setTransaction] = useState([])

  function deleteTransaction (name) {
    // const docId = "Zee7ocm7vmSTqugaVUEp"
    console.log("Ji")
    console.log(name)
    setTransaction(transaction.filter(tran => tran.id !==id));

    db
      .collection("budget")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (name === doc.data().name) {
              id = doc.id
              // console.log(id)
            }
        })
        setId(id) 
        db
        .collection('budget')
        .doc(id)
        .delete()
      })

    console.log(id)
  }

  const addTrans =(trans)=>{
         setTransaction(transaction=> [trans, ...transaction])
         console.log(typeof(trans))

  }

  return (
    <div className="">
        {/* <SideNavBar /> */}
        <OfficialNav />
        <div className="budget">
        <Box className={applyStyle.box} >
            <Box>
                <h2 style={{color:"white", marginTop: 0, marginBottom: 30}}>Hi, User</h2>
                <Balance bal={bal}/>
                <ExpenseCard transaction={transaction} income={income} expense={expense}/>
                <NewTransaction addTrans={addTrans}/>
            </Box>
            
            <Box>
                <Transaction transaction={transaction} deleteTransaction={deleteTransaction}/>
            </Box>
        </Box>
        </div>
    </div>
  );
}

export default Budget;