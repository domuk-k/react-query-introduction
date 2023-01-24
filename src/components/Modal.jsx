import ReactDOM from 'react-dom';

function Modal({ isOpen, children }) {
  return (
    isOpen && // Use react-dom to create a portal
    ReactDOM.createPortal(
      <section className="modal-overlay">
        <div className="modal-container">{children}</div>
      </section>,
      // set the portal element to the portalRef
      document.body
    )
  );
}

export default Modal;
