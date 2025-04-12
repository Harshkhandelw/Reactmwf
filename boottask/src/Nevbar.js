import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function Nevbar() {
    return (
        <div>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className='d-flex flex-xxl-row justify-content-evenly'>
                            <div>
                                <h1>TOOLM5</h1>
                            </div>
                            <div className='d-flex flex-xxl-row'>
                                <h2>About us</h2>
                                <h2>Services</h2>
                                <h2>contect</h2>

                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>

                                <button className='p-2 rounded-5'>Get started</button>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </Container>

        </div>
    )
}

export default Nevbar
