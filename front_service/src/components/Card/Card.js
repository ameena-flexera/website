import './Card.css'

const Card = (props) => {
    const ClassName = 'card ' + props.className 
    return (
        <div className={ClassName}>
            {props.children}
        </div>
    )
}

export default Card