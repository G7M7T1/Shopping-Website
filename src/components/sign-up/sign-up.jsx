import {useState} from "react";

const formDefault = {
    displayName: '',
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [formInfo, setFormInfo] = useState(formDefault)
    const {displayName, email, password, confirmPassword} = formInfo

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInfo({...formInfo, [name]: value})
    }

    return (
        <div>
            <h1>Signup with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display</label>
                <input type="text" name="displayName" value={displayName} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} required />

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp