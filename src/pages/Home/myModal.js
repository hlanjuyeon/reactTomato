import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export const MyModal = () => {
    const [showModal, setShowModal] = useState(false);

    // 컴포넌트가 마운트될 때 모달 상태를 true로 설정하여 자동으로 모달을 표시
    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={showModal}
            onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">WELCOME ! ^Country^ USER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                What you nedd today may be a small trip.
                Have a time of healing.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowModal(false)}>
                    Shall we depart now?
                </Button>
            </Modal.Footer>
        </Modal>
    );
};