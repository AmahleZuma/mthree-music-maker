
function Interface() {
    return(
        <div className="form-container">
            <form action="http://localhost:5173/" className="link-insert" method="POST">
                <label htmlFor="link-input">Insert "YT" link to Convert to Music:</label>
                <input type="url"></input>
            </form>
        </div>
    );
}

export default Interface