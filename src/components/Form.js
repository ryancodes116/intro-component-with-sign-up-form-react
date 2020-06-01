import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Form.module.css';
import icon from '../images/icon-error.svg';

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstName: '',
    firstNameError: '',
    firstNameStyles: {
      icon: 'none',
      border: 'lightgray',
    },
    lastName: '',
    lastNameError: '',
    lastNameStyles: {
      icon: 'none',
      border: 'lightgray',
    },
    email: '',
    emailError: '',
    emailStyles: {
      icon: 'none',
      border: 'lightgray',
    },
    password: '',
    passwordError: '',
    passwordStyles: {
      icon: 'none',
      border: 'lightgray',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          firstName: value,
        };
      });
    }

    if (name === 'lastName') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          lastName: value,
        };
      });
    }

    if (name === 'email') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          email: value,
        };
      });
    }

    if (name === 'password') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          password: value,
        };
      });
    }
  };

  const validateForm = () => {
    setFormInput((prevFormInput) => {
      return {
        ...prevFormInput,
        firstNameError: '',
        firstNameStyles: {
          icon: 'none',
          border: 'lightgray',
        },
        lastNameError: '',
        lastNameStyles: {
          icon: 'none',
          border: 'lightgray',
        },
        emailError: '',
        emailStyles: {
          icon: 'none',
          border: 'lightgray',
        },
        passwordError: '',
        passwordStyles: {
          icon: 'none',
          border: 'lightgray',
        },
      };
    });

    if (formInput.firstName === '') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          firstNameError: 'First Name cannot be empty',
          firstNameStyles: {
            icon: 'block',
            borderColor: 'hsl(0, 100%, 74%) ',
          },
        };
      });
    }

    if (formInput.lastName === '') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          lastNameError: 'Last Name cannot be empty',
          lastNameStyles: {
            icon: 'block',
            borderColor: 'hsl(0, 100%, 74%) ',
          },
        };
      });
    }

    if (formInput.email === '') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          emailError: 'Email cannot be empty',
          emailStyles: {
            icon: 'block',
            borderColor: 'hsl(0, 100%, 74%) ',
          },
        };
      });
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formInput.email !== '' && !re.test(formInput.email)) {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          emailError: 'Please enter a valid email',
          emailStyles: {
            icon: 'block',
            borderColor: 'hsl(0, 100%, 74%) ',
          },
        };
      });
    }

    if (formInput.password === '') {
      setFormInput((prevFormInput) => {
        return {
          ...prevFormInput,
          passwordError: 'Password cannot be empty',
          passwordStyles: {
            icon: 'block',
            borderColor: 'hsl(0, 100%, 74%) ',
          },
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
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
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formInput.firstName}
            onChange={handleChange}
            style={{ borderColor: formInput.firstNameStyles.borderColor }}
          />
          <img
            className={styles.errorIcon}
            src={icon}
            alt="error icon"
            style={{ display: formInput.firstNameStyles.icon }}
          />
          <em className={styles.errorMsg}>{formInput.firstNameError}</em>
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formInput.lastName}
            onChange={handleChange}
            style={{ borderColor: formInput.lastNameStyles.borderColor }}
          />
          <img
            className={styles.errorIcon}
            src={icon}
            alt="error icon"
            style={{ display: formInput.lastNameStyles.icon }}
          />
          <em className={styles.errorMsg}>{formInput.lastNameError}</em>
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email Address"
            name="email"
            value={formInput.email}
            onChange={handleChange}
            style={{ borderColor: formInput.emailStyles.borderColor }}
          />
          <img
            className={styles.errorIcon}
            src={icon}
            alt="error icon"
            style={{ display: formInput.emailStyles.icon }}
          />
          <em className={styles.errorMsg}>{formInput.emailError}</em>
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formInput.password}
            onChange={handleChange}
            style={{ borderColor: formInput.passwordStyles.borderColor }}
          />
          <img
            className={styles.errorIcon}
            src={icon}
            alt="error icon"
            style={{ display: formInput.passwordStyles.icon }}
          />
          <em className={styles.errorMsg}>{formInput.passwordError}</em>
        </div>

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
