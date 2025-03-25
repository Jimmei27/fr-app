import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/requests';
import { Button, Card, Container, Form } from 'react-bootstrap';
var LoginView = function () {
  var _a = useState(''),
    name = _a[0],
    setName = _a[1];
  var _b = useState(''),
    email = _b[0],
    setEmail = _b[1];
  var _c = useState({}),
    formErrors = _c[0],
    setFormErrors = _c[1];
  var navigate = useNavigate();
  var _d = useLogin(),
    login = _d.mutate,
    isSuccess = _d.isSuccess;
  useEffect(
    function () {
      if (isSuccess) {
        navigate('/search');
      }
    },
    [isSuccess, navigate]
  );
  var validateForm = function () {
    var errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid Email';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  var handleSubmit = function (e) {
    e.preventDefault();
    if (!validateForm()) return;
    login({ name: name, email: email });
  };
  return _jsx(Container, {
    className: 'vh-100 d-flex justify-content-center align-items-center',
    children: _jsx(Card, {
      className: 'p-4 shadow-lg border-0',
      children: _jsxs(Card.Body, {
        children: [
          _jsx('h3', {
            className: 'text-center mb-4 custom-fr',
            children: 'Login',
          }),
          _jsxs(Form, {
            onSubmit: handleSubmit,
            children: [
              _jsxs(Form.Group, {
                className: 'mb-1',
                children: [
                  _jsx(Form.Control, {
                    className: 'login-input border-fr',
                    type: 'text',
                    placeholder: 'Name',
                    value: name,
                    onChange: function (e) {
                      return setName(e.target.value);
                    },
                    isInvalid: !!formErrors.name,
                  }),
                  _jsx('div', {
                    className: 'mh-24',
                    children: _jsx(Form.Control.Feedback, {
                      type: 'invalid',
                      className: 'd-block text-start',
                      children: formErrors.name,
                    }),
                  }),
                ],
              }),
              _jsxs(Form.Group, {
                className: 'mb-2',
                children: [
                  _jsx(Form.Control, {
                    className: 'login-input border-fr',
                    type: 'text',
                    placeholder: 'Email',
                    value: email,
                    onChange: function (e) {
                      return setEmail(e.target.value);
                    },
                    isInvalid: !!formErrors.email,
                  }),
                  _jsx('div', {
                    className: 'mh-24',
                    children: _jsx(Form.Control.Feedback, {
                      type: 'invalid',
                      className: 'd-block text-start',
                      children: formErrors.email,
                    }),
                  }),
                ],
              }),
              _jsx(Button, {
                type: 'submit',
                variant: 'outline-warning',
                className: 'w-100 rounded-pill',
                children: 'Login',
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
export default LoginView;
