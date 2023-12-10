import { useState } from 'react';
import { database } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Button, Form, CardBody } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

export const ReristerLogin = () => {
  const [logIn, setLogIn] = useState(false);
  const nav = useNavigate();

  const handleSub = (e, type) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log('data signup:', data);
          nav('/home');
        })
        .catch(error => {
          alert(error.code);
          setLogIn(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log('data signin:', data);
          nav('/home');
        })
        .catch(error => {
          alert(error.code);
        });
    }
  };

  return (
    <CardBody>
      <h1 className="title">{logIn ? 'SignIn' : 'SignUp'}</h1>

      <Form onSubmit={e => handleSub(e, logIn ? 'signin' : 'signup')}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>
        <Button type="submit" className="m-1">
          {logIn ? 'SignIn' : 'SignUp'}
        </Button>
      </Form>
    </CardBody>
  );
};
