import React from 'react';
import { useFormik } from 'formik';
import './SignupForm.css';

function SignupForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='signup-form-container'>
            <div className='signup-form-images-container'>
                <div className='signup-form-image-container'>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className='signup-form-image-container'>
                    <label htmlFor="member-id">Member ID</label>
                    <input
                        id="member-id"
                        name="member-id"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
            </div>
            <div className='signup-form-details-container'>
                <div className='left-container'>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <label htmlFor="member-id">Member ID</label>
                    <input
                        id="member-id"
                        name="member-id"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className='right-container'>
                    <div className='right-input-container'>
                        <label htmlFor="name1">Name1</label>
                        <input
                            id="name1"
                            name="name1"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className='right-input-container'>
                        <label htmlFor="pcw">PCW</label>
                        <input
                            id="pcw"
                            name="pcw"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className='right-input-container'>
                        <label htmlFor="group">group</label>
                        <input
                            id="group"
                            name="group"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className='signup-form-confirmation-container'>Confirm</button>
        </form>
    )
}

export default SignupForm