function AlertButton(props) {

        const handleClick = () => {
                alert(props.message);
        }

return (
        <button onClick={ handleClick }>{props.children}</button>
)
}

export default AlertButton