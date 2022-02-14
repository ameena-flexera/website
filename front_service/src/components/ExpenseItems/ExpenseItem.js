import Card from '../Card/Card'
import DeleteIcon from '@mui/icons-material/Delete';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    const removeHandler = (e) => {
        console.log('removing: ' + props.ID)
        props.onDelete(props.ID)
    }

    return (
            <tr>
                    <td>
                        <div className="date_ei">
                            {props.Date}
                        </div>
                    </td>
                    <td>
                        <div className="name_ei">
                            {props.Name}
                        </div>
                    </td>
                    <td>
                        <div className="shop_name_ei">
                            {props.ShopName}
                        </div>
                    </td>
                    <td>
                        <div className="descr_ei">
                        {props.Description}
                        </div>
                    </td>
                    <td>
                        <div className="price_ei">
                            {props.Price}$
                        </div>
                    </td>
                    <td>
                        <div className="ei_button_class">
                            <DeleteIcon onClick={removeHandler}> Remove </DeleteIcon>
                        </div>
                    </td>
            </tr>
    )
};

export  default  ExpenseItem;