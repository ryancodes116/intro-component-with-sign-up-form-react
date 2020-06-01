import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Form.module.css';

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFormInput((prevFormInput) => {
        return {
          prevFormInput,
          firstName: value,
        };
      });
    }

    if (name === 'lastName') {
      setFormInput((prevFormInput) => {
        return {
          prevFormInput,
          lastName: value,
        };
      });
    }

    if (name === 'email') {
      setFormInput((prevFormInput) => {
        return {
          prevFormInput,
          email: value,
        };
      });
    }

    if (name === 'password') {
      setFormInput((prevFormInput) => {
        return {
          prevFormInput,
          password: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
    console.log(formInput);
  };

  return (
    <div className={classNames('container', styles.formSection)}>
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <p>
            <span>Try it free 7 days </span>then $20/mo. thereafter
          </p>
        </div>
      </div>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formInput.firstName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formInput.lastName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Email Address"
          name="email"
          value={formInput.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Password"
          name="password"
          value={formInput.password}
          onChange={handleChange}
        />
        <input
          className={classNames(styles.input, styles.submitBtn)}
          type="submit"
          value="Claim Your Free Trial"
          onClick={handleSubmit}
        />
        <small className={styles.terms}>
          By clicking the button, you are agreeing to our{' '}
          <span>Terms and Services</span>
        </small>
      </div>
    </div>
  );
};

export default Form;
