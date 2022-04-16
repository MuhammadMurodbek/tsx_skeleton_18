import React,{FC,useState} from 'react'
import Modal from "react-modal"
import "./modal.css"
const Index:FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    // const handleOpen = () => setOpen(true)
    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={()=>{}}
                contentLabel="Modal"
                className={{
                    base: 'modal-base',
                    afterOpen: 'modal-base_after-open',
                    beforeClose: 'modal-base_before-close'
                }}
                overlayClassName={{
                    base: 'overlay-base',
                    afterOpen: 'overlay-base_after-open',
                    beforeClose: 'overlay-base_before-close'
                }}
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={2000}
            >
                <h1>i'm a modal</h1>
                <p>------M-o-d-a-l-------</p>
                <br></br>

                <button>Close</button>
            </Modal>
        </div>
    )
}

export default Index
