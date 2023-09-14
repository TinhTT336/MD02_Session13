import React from 'react'
import "./modal.css"

export default function Modal({ onCancel, title, onOk, idDelete }) {
    return (
        <>
            <div className='t-modal-container'>
                <div className="t-modal-item">
                    <div className="t-modal-header">
                        <span>Xác nhận</span>
                        <i className='fa-solid fa-xmark' onClick={onCancel}></i>
                    </div>
                    <div className="t-modal-body">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        <div>{title}</div>
                    </div>
                    <div className="t-modal-footer">
                        <button onClick={onCancel} className='btn btn-secondary'>Huỷ</button>
                        <button onClick={() => onOk(idDelete)} className='btn btn-danger'>Xoá</button>

                    </div>
                </div>
            </div>
        </>
    )
}
