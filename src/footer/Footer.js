import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='grid'>
        <Row>
            <Col>
               <h5 className='px-5'>NEWZ</h5>
               <div className='grid-content'>
                <p className='grid-title'>Duo stet consetetur elitr sed diam amet eos. Est voluptua voluptua erat clita gubergren tempor, voluptua sed elitr sit aliquyam.</p>
                </div>

                <div className="icons-bar">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagramSquare /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
              </Col>
           <Col>
            <h5 className='px-4'>Useful Links</h5>
            <div className='grid-content'>
            <ul>
            <p className='abc'><a href='#'>Contact us</a> </p>
            <p  className='abc'><a href='#'>News</a> </p>
            <p className='abc'><a href='#'>Privacy and Policy</a> </p>
            <p className='abc'><a href='#'>Terms & Conditions</a> </p>
            <p className='abc'><a href='#'>Business</a> </p>
            <p className='abc'><a href='#'>Technology</a> </p>
            <p className='abc'><a href='#'>Sports</a> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-4'>Mobile</h5>
            <div className='apple'>
            <i class="fa-brands fa-apple"></i>
              <p className='apple-title'>Download on the</p>
              <p className='apple-subtitle'>Apple Store</p>
            </div>

            <div className='apple'>
            <i class="fa-brands fa-google-play"></i>
              <p className='apple-title'>Get in on</p>
              <p className='apple-subtitle'>Google Play</p>
            </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer