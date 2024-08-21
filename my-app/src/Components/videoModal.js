"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Reproduciendo Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {videoUrl ? (
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="auto"
          />
        ) : (
          <p>No hay video disponible.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;
