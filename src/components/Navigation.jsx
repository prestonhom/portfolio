import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import wallpaper from '../../public/images/blockchainwallpaper.jpg' 
import home from '../../public/images/home.svg' 
import flask from '../../public/images/flask.svg' 
import letter from '../../public/images/letter.svg' 
import user from '../../public/images/user.svg' 
import '../styles/Navigation.css'

const Navigation=()=>{
    return(
        <div>   
            <Navbar className='navBar'style={{
                backgroundImage:`url(${wallpaper})`,
                position:'fixed',
                padding:'0 4%'
            }} expand="lg">

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
            backgroundColor:`pink`,
            cursor:`pointer`,
        }} /> */}
        <Navbar.Collapse style={{    
        }}>     
                <Nav className="NavContent" style={{
                    display:'flex',
                    flexDirection:'column',
                    height: '100vh',
                    borderColor:'white'
                }}>
                    <h1 style={{color:'yellow', textShadow:'white 0px 0px 10px'}}> P&nbsp;R&nbsp;E&nbsp;S&nbsp;T&nbsp;O&nbsp;N &nbsp; H&nbsp;O&nbsp;M</h1>
                    <Navbar.Brand>  
                        <img src='https://ca.slack-edge.com/T0351JZQ0-UKTV5SY4B-047fb18c7ae7-512' style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'100px',
                            border:'3px white solid',
                        }}/>
                    </Navbar.Brand>
                    <h1 style={{color:'lightBlue', fontSize:'150%'}}>fullStackDeveloper <span style={{fontSize:'180%', color:'pink',textShadow:'pink 0px 0px 10px'}}> : </span><span style={{fontSize:'180%', color:'pink',textShadow:'pink 0px 0px 10px'}}> {'{'} </span> 
                    <br></br> 
                    <span style={{color:'yellow'}}>&nbsp; &nbsp; &nbsp; &nbsp;<span style={{color:'lightBlue'}}>stack</span><span style={{fontSize:'180%', color:'pink',textShadow:'pink 0px 0px 10px'}}> : </span>'MERN'  </span>
                    <br></br>
                    <span style={{fontSize:'180%', color:'pink',textShadow:'pink 0px 0px 10px'}}> {'}'} </span> 
                    </h1>
                    <Nav.Link
                    href='/'
                    style={{
                        margin:'14% 0 0 3rem',
                
                    }}
                    >
                        <img className='navIcons' src={home} alt='home' />
                    </Nav.Link>
                    <Nav.Link
                    href='/about'
                    style={{
                        margin:'14% 0 0 3rem'
                    }}
                    >
                       <img className='navIcons' src={user} alt='user' ></img>
                    </Nav.Link>
                    <Nav.Link
                    href='/projects'
                    style={{
                        margin:'14% 0 0 3rem'
                    }}
                    >
                        <img className='navIcons' src={flask} alt='flask' ></img>
                    </Nav.Link>
                    
                    <Nav.Link
                    href='/contact'
                    style={{
                        margin:'14% 0 0 3rem'
                    }}
                    >
                        <img className='navIcons' src={letter} alt='letter' ></img>
                    </Nav.Link>
                </Nav>
        </Navbar.Collapse>
    </Navbar>
        </div>

    )
}

export default Navigation;

