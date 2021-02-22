import React from 'react'
import Modal from 'react-bootstrap/Modal'

export const ModalWindow = (users) => {

  
    return (
        <>
        <Modal show={true}>
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>
        <p>First name: { users.name.first}</p>
        <p>Last Name: { users.name.last}</p>
        <p>Email: { users.email}</p>
        </Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalWindow