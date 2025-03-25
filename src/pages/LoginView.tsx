import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/requests';
import { Button, Card, Container, Form } from 'react-bootstrap';

interface FormErrorFields {
  name?: string;
  email?: string;
}

const LoginView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrorFields>({});

  const navigate = useNavigate();
  const { mutate: login, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      navigate('/search');
    }
  }, [isSuccess, navigate]);

  const validateForm = () => {
    const errors: FormErrorFields = {};
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    login({ name, email });
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Card className="p-4 shadow-lg border-0">
        <Card.Body>
          <h3 className="text-center mb-4 custom-fr">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1">
              <Form.Control
                className="login-input border-fr"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!formErrors.name}
              />
              <div className="mh-24">
                <Form.Control.Feedback
                  type="invalid"
                  className="d-block text-start"
                >
                  {formErrors.name}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                className="login-input border-fr"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!formErrors.email}
              />
              <div className="mh-24">
                <Form.Control.Feedback
                  type="invalid"
                  className="d-block text-start"
                >
                  {formErrors.email}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Button
              type="submit"
              variant="outline-warning"
              className="w-100 rounded-pill"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginView;
