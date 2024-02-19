"use client"
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void
}

const CustomModal = ({ children, isOpen, setIsOpen }: Props) => {
  return isOpen ?
    ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          <span className="absolute top-2 right-5 text-2xl cursor-pointer" onClick={() => setIsOpen(false)}>&times;</span>
          {children}
        </div>
      </div>,
      document.getElementById('modal-root') as HTMLElement // Type assertion
    )
    : null
}

export default CustomModal;