// components/ApplicationModal.jsx
import { useState, useEffect } from "react";
import "./ApplicationModal.css";
import MainForm from "../mainForm/MainForm";

function ApplicationModal({ onClose, messageApi, children }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => onClose(), 300);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-200 transition-opacity duration-300 ${show ? "bg-[#242424]/80 opacity-100" : "opacity-0"}`}>
            <div className={`border border-amber-400 p-5 rounded bg-[#242424] w-[90%] max-w-2xl transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>

                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-6 text-white cursor-pointer"
                >
                    ✖
                </button>

                <MainForm
                    messageApi={messageApi}
                    onSuccess={handleClose}
                >
                    {children}
                </MainForm>

            </div>
        </div>
    );
}

export default ApplicationModal;
