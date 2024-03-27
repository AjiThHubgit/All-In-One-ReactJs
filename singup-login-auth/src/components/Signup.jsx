import { useState } from "react";
import formValidation from "../utils/formValidation";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on input change
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        const validationErrors = formValidation(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const { name, email, password, confirm_password } = formData; // Extract values
                const res = await axios.post('https://65edfe1708706c584d9afbcd.mockapi.io/credentials', { name, email, password, confirm_password });
                console.log(res.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <form>
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleOnChange} placeholder="Enter name" />
            </div>
            <div>
                <input type="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Enter Email" />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <input type="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Enter Password" />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleOnChange} placeholder="Enter Confirm Password" />
                {errors.confirm_password && <p>{errors.confirm_password}</p>}
            </div>
            <div>
                <button onClick={handleOnClick}>Signup</button>
            </div>
        </form>
    );
}

export default Signup;
