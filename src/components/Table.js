import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ModalWindow from './ModalWindow'
import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Table = ({ users, handleDeleteRow, }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { (users.length > 0) ? users.map( (user, index) => {
             return (
              <tr key={ index }>
                <td>{ user.name.first}</td>
                <td>{ user.name.last}</td>
                <td>{ user.email}</td>
                <td>delete</td>
                <td><button onClick={handleShow}>Edit</button></td>
              
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body ><p>First name: </p>
        <p>Last Name: </p>
        <p>Email: </p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );

    
  }

export default Table
