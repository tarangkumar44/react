import { useState } from "react"

const ControlledForm1 = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!username || !email || !password){
            alert("All fields are required");
            return;
        }

        let formData = {username, email, password};
        console.log(formData);

        // STORE DATA IN LOCAL STRAGE
        const savedUser = JSON.parse(localStorage.getItem("user")) || []
        savedUser.push(formData)
        localStorage.setItem("users", JSON.stringify(savedUser))

        console.log("Form submitted");
        setEmail("")
        setUsername("")
        setPassword("")

    }
    return (
        <div>
            <h1>Learning Controlled Forms</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="" id="username" 
                        value={username} onChange={handleUsername}/>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="" id="password"
                        value={password} onChange={handlePassword}/>
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" value={email} onChange={handleEmail}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ControlledForm1