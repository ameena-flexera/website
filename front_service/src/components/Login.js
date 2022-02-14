import {useState} from 'react';
import './Login.css'

const Login = (props) => {
    const [username , setUsername] = useState("")
    const userChangehandler = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }
    const [password , setPassword] = useState("")
    const passwordHandler = (e) => {
        console.log("password:" + e.target.value)
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        console.log('submitting data')
        if (username === 'admin' && password === 'admin') {
            console.log("logged in...")
           
        } else {
            console.log('not logged in ...')
        }
    }
    return (
        <div className="form_class">
            <h1>Login to Admin Dashboard</h1>
            <form>
                <div className="user_class">
                    <label htmlFor="username" name="username" className="user_label_class">Username:</label>
                    <input type="text" id="username" value={username} placeholder="username" onChange={userChangehandler}></input>
                </div>
                <div className="pass_class">
                    <label htmlFor="password" name="password" className="pass_label_class">Password:</label>
                    <input type="password" id="password" value={password} placeholder="password" onChange={passwordHandler}></input>
                </div>
                <div className="clear"></div>
                <div className="submit_button">
                    <input type="button" value="Submit" onClick={submitHandler} ></input>
                </div>
            </form>
        </div>
    )
};

export default Login; 