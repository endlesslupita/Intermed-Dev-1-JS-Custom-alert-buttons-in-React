import './AlertButton.css'

function AlertButton(props) {

        const handleClick = () => {
                alert(props.message);
        }

return (
        <button className='button' style={{ backgroundColor: props.bgColor }} onClick={ handleClick }>{props.children}</button>
)
}

export default AlertButton