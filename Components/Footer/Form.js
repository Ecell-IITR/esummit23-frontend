import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FetchApi from '../../utils/fetchAPI';
import { FOOTER_QUERY_API } from '../../utils/APIs';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone_number: contact,
      message: message,
    };

    FetchApi('post', FOOTER_QUERY_API, data, null)
      .then((res) => {
        toast.success('Query Submitted !');
        setName('');
        setEmail('');
        setMessage('');
        setQuery();
        setContact(null);
      })
      .catch((err) => {
        toast.error('Query Unsuccessful!');
      });
  };

  return (
    <>
      <Form className='footer_Form'>
        <div className='name_footer'>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              style={{ backgroundColor: '#311C00', color: 'white' }}
              placeholder='Enter your full name'
              type='text'
              name='name'
              value={name}
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className='emailAddress_footer'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='email'
              style={{ backgroundColor: '#311C00', color: 'white' }}
              placeholder='Enter your E-mail address'
              name='email'
              value={email}
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className='phoneNoAndQuery_footer'>
          <div className='phoneNo_footer'>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                style={{ backgroundColor: '#311C00', color: 'white' }}
                type='phoneNo'
                placeholder='Phone No'
                name='contact'
                value={contact}
                autoCorrect='off'
                autoComplete='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={(event) => setContact(event.target.value)}
                required
              />
            </Form.Group>
          </div>
          <div className='query_footer'>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                style={{ backgroundColor: '#311C00', color: 'white' }}
                placeholder='Query Details'
                name='query'
                value={query}
                autoCorrect='off'
                autoComplete='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={(event) => setQuery(event.target.value)}
                required
              />
            </Form.Group>
          </div>
        </div>

        <div className='message_footer'>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              style={{
                backgroundColor: '#2F1A09',
                color: 'white',
                height: '90px',
              }}
              placeholder='Type your message here'
              name='message'
              value={message}
              rows='5'
              autoCorrect='off'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </Form.Group>
        </div>
        <div className='buttonSubmitDiv'>
        <Button
          onClick={handleSubmit}
          // variant='primary'
          type='submit'
          className='button_footer'
        >
          Submit
        </Button>
        </div>
      </Form>
    </>
  );
};

export default Forms;
