import React, { useState } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    const onClickHandler = () => {
        setIsLogin(!isLogin)
    }
    return (
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                <Card className='p-3'>
                    <CardBody>
                        {isLogin
                            ? <Login />
                            : <Register />}

                    </CardBody>
                    <CardBody>
                        <a className='float-end' href='#' onClick={onClickHandler}>
                            {isLogin ? "Register" : "Login"}
                        </a>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Auth;