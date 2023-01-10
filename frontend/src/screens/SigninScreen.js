import React from 'react'
import {Button, Container, Form, FormControl, FormLabel} from 'react-bootstrap'
import {Helmet} from 'react-helmet-async'
import {Link, useLocation} from 'react-router-dom'

function SigninScreen() {
    const {search} = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/'
  return (
    <Container className='w-50'>
        <Helmet>
            <title>Sign in</title>
        </Helmet>
        <h1 className="my-3">Sign In</h1>
        <Form>
            <Form.Group controlId='email' className='mb-3'> 
                <FormLabel>Email</FormLabel>
                <FormControl type='email' required />
            </Form.Group>,
            <Form.Group controlId='password' className='mb-3'> 
                <FormLabel>Password</FormLabel>
                <FormControl type='password' required />
            </Form.Group>
            <div className="mb-3">
                <Button type='submit'>Sign in</Button>
            </div>
            <div className="mb-3">
                New Customer?{' '}
                <Link to={`/signup?redirect=${redirect}`} >Create Your Account</Link>
            </div>
        </Form>
    </Container>
  )
}

export default SigninScreen