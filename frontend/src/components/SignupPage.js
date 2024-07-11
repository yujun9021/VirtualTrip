import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
    address: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission (e.g., send data to backend)
      console.log('Form data submitted:', formData);
      setErrors({});
    }
  };

  const checkUsernameAvailability = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/check-username?username=${formData.username}`);
      const result = await response.json();
      setIsUsernameAvailable(result.isAvailable);
    } catch (error) {
      console.error('Error checking username availability:', error);
      setIsUsernameAvailable(false);
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Required Information</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
            <button type="button" onClick={checkUsernameAvailability}>Check Availability</button>
            {isUsernameAvailable === null ? null : isUsernameAvailable ? (
              <span className="success">Username is available</span>
            ) : (
              <span className="error">Username is taken</span>
            )}
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Optional Information</legend>
          <div>
            <label htmlFor="profileImage">Profile Image:</label>
            <input type="file" id="profileImage" name="profileImage" onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </fieldset>
        
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
