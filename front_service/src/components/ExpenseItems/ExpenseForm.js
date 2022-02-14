import { useState } from "react"
import  Card  from '../Card/Card'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [date , setDate ] = useState('')
    const dateChangehandler = (e) => {
        setDate(e.target.value)
    }
    const [name , setName ] = useState('')
    const nameChangehandler = (e) => {
        setName(e.target.value)
    }
    const [shopName , setShopName ] = useState('')
    const shopNameChangehandler = (e) => {
        setShopName(e.target.value)
    }
    const [description , setDesc ] = useState('')
    const descChangehandler = (e) => {
        setDesc(e.target.value)
    }
    const [price , setPrice ] = useState('')
    const priceChangehandler = (e) => {
        setPrice(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let properDate = new Date(date)
        let dateString = (properDate.getDate() + 1) + '-' + (properDate.getMonth() + 1) + '-' + properDate.getFullYear()
        let expenseData = {
            ID: crypto.randomUUID(),
            Date: dateString ,
            Name:  name, 
            ShopName: shopName,
            Description: description,
            Price: price
        }
        console.log(expenseData)
        props.onAddHandler(expenseData)
        setDate('')
        setShopName('')
        setName('')
        setDesc('')
        setPrice('')
    }

    return (
        <Card className="expense_form">
            <form onSubmit={submitHandler}>
                <div className="date_class">
                    <label htmlFor="date" name="date" className="date_label_class">Date:</label>
                    <input type="date" id="date" value={date} placeholder="date" required pattern="\d{4}-\d{2}-\d{2}" onChange={dateChangehandler}></input>
                </div>
                <div className="name_class">
                    <label htmlFor="mame" name="name" className="name_label_class">Name:</label>
                    <input className="name_ph" type="text" id="name" value={name} placeholder="name" onChange={nameChangehandler}></input>
                </div>
                <div className="shop_class">
                    <label htmlFor="shop" name="shop" className="shop_label_class">Shop Name:</label>
                    <input type="text" id="shopname" value={shopName} placeholder="shop name" onChange={shopNameChangehandler}></input>
                </div>
                <div className="desc_class">
                    <label htmlFor="desc" name="desc" className="desc_label_class">Description:</label>
                    <input type="text" id="desc" value={description} placeholder="description" onChange={descChangehandler}></input>
                </div>
                <div className="price_class">
                    <label htmlFor="price" name="price" className="price_label_class">Price:</label>
                    <input type="number" id="price" value={price} placeholder="price in $" onChange={priceChangehandler}></input>
                </div>
                <div className="clear"></div>
                <div className="submit_button">
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </Card>
    )
}

export default ExpenseForm