const Notification = ({successMessage, errorMessage}) => {
    if (!successMessage && !errorMessage) {
        return null
    }
    return (
        <div className={`message ${successMessage ? "success" : "error"} `}>
            {successMessage ? successMessage : errorMessage}
            {console.log('...returnd div from NOTIFICATION...')}
        </div>
    )    
}

export default Notification