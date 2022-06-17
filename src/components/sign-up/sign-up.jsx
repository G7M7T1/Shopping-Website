import {useContext, useState} from "react";
import {
    auth,
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    UpdateProfile
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./sign-up.scss"
import Button from "../button/button";
import {UserContext} from "../../context/user.context";

const formDefault = {
    displayName: '',
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [formInfo, setFormInfo] = useState(formDefault)
    const {displayName, email, password, confirmPassword} = formInfo

    const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormInfo(formDefault)
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            )

            await createUserDocumentFromAuth(user, {displayName, password})
            await UpdateProfile(displayName)
            setCurrentUser(user)

            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormInfo({...formInfo, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Signup with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName}
                           onChange={handleChange} required/>

                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required/>

                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange}
                           required/>

                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword}
                           onChange={handleChange} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp