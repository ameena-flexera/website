import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card'
import './Expenses.css'

const ExpenseItems = (props) => {
    const deleteHandler = (e) => {
        console.log('from expense items ' + e )
        props.onDelete(e)
    }
   let edata = props.ed.map((item) => {
            return (<ExpenseItem key={item.ID} ID={item.ID} Name={item.Name} Description={item.Description} DhopName={item.ShopName} Date={item.Date} Price={item.Price} onDelete={deleteHandler}/>)
    })
    return (
        <Card className="expenses">
            <table>
                <thead className='header_class'>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>ShopName</th>
                        <th>Description</th>
                        <th>Price ($)</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {edata}
                </tbody>
            </table>
        </Card>
    )
}

export default ExpenseItems