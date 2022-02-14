import ExpenseForm from "./ExpenseItems/ExpenseForm"
import ExpenseItems from "./ExpenseItems/ExpenseItems"
import { useState } from "react"
import './Home.css'


let properDate = new Date()
let dateString = properDate.getDate() + '-' + (properDate.getMonth() + 1) + '-' + properDate.getFullYear()

let ei_data = [
    {
        ID: "1",
        Name: "test name 1",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    },
    {
        ID: "2",
        Name: "test name 2",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    },
    {
        ID: "3",
        Name: "test name 3",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    },
    {
        ID: "4",
        Name: "test name 4",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    },
    {
        ID: "5",
        Name: "test name 5",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    },
    {
        ID: "6",
        Name: "test name 6",
        ShopName: "",
        Description: "test description",
        Date: dateString,
        Price: "1"
    }
]

const Home = () => {
    const [expenses , setExpenses] = useState(ei_data)
    const addHandler = (e) => {
        console.log(e)
         setExpenses((prevExp) => {
             return (
                 [e, ...expenses]
             )
         })
    }
    const deleteHandler = (e) => {
        console.log(e)
         setExpenses((prevExp) => {
             return (
                 expenses.filter(function(item){
                     return item.ID !== e
                 })
             )
         })
    }
    return (
        <div className="home_class">
            <div>
                <ExpenseForm onAddHandler={addHandler}/>
            </div>
            <div>
                <ExpenseItems ed={expenses} onDelete={deleteHandler}/>
            </div>
        </div>
    )
}

export default Home