import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase";

const formDefault = {
    displayName: '',
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [formInfo, setFormInfo] = useState(formDefault)
    const {displayName, email, password, confirmPassword} = formInfo

    const resetFormFields = () => {
        setFormInfo(formDefault);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName, password});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInfo({...formInfo, [name]: value})
    }

    return (
        <div>
            <h1>Signup with your email and password</h1>
            <form onSubmit={handleSubmit}>
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