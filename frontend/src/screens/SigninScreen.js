import React, {useState, useContext, useEffect} from 'react'
import {Button, Container, Form, FormControl, FormLabel} from 'react-bootstrap'
import {Helmet} from 'react-helmet-async'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Store} from '../Store'

function SigninScreen() {
    const navigate = useNavigate()
    const {search} = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/'

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {state, dispatch:ctxDispatch} = useContext(Store)
    const {userInfo} = state
 
    const submitHandler = async(e) =>{
        e.preventDefault()
        try{
            const {data} = await axios.post('/api/users/signin',{email, password})
            ctxDispatch({type: "USER_SIGNIN", payload: data})
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate(redirect || '/')
        }catch(err){
            alert('invalid email or password');
        }
    }

    useEffect(() => {
      if (userInfo) {
        navigate(redirect)
      }
    }, [navigate, redirect, userInfo])
    

  return (
    <Container className='w-50'>
        <Helmet>
            <title>Sign in</title>
        </Helmet>
        <h1 className="my-3">Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email' className='mb-3'> 
                <FormLabel>Email</FormLabel>
                <FormControl type='email' required onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>,
            <Form.Group controlId='password' className='mb-3'> 
                <FormLabel>Password</FormLabel>
                <FormControl type='password' required onChange={(e) => setPassword(e.target.value)} />
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