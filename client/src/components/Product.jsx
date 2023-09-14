import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import { deleteById, getAllProduct } from '../services/productService';
import Modal from './base/modal/Modal';

export default function Product() {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const dispatch = useDispatch();
    const listProduct = useSelector(state => state.product.data)
    // console.log(listProduct);

    useEffect(() => {
        dispatch(getAllProduct());
    }, [])

    // ham show modal xoa
    const handleShowDelete = (id) => {
        setShowModal(true);
        setIdDelete(id);
    }
    // ham xoa 1 product theo id
    const handleDelete = (id) => {
        dispatch(deleteById(id));
        setShowModal(false);

    }
    // ham dong modal
    const handleCancel = () => {
        setShowModal(false);
    }

    // ham hien form add
    const handleShowAdd = () => {
        setShowAdd(true);
    }

    // ham an form add
    const handleCloseForm = () => {
        setShowAdd(false);
    }

    // ham hien form edit
    const handleEdit = (id) => {
        setShowEdit(true);
        setIdEdit(id);
    }

    // ham an form edit
    const handleCloseEdit = () => {
        setShowEdit(false);
    }

    return (
        <>
            {showAdd && <FormAdd handleCloseForm={handleCloseForm} />}
            {showEdit && <FormEdit handleCloseEdit={handleCloseEdit} idEdit={idEdit} />}
            {/* Modal confirm */}
            {showModal && <Modal title={"Bạn có chắc chắn muốn xoá sản phẩm này?"} onOk={handleDelete} onCancel={handleCancel} idDelete={idDelete} />}
            <h2>List Product</h2>
            <button onClick={handleShowAdd} className='btn btn-primary mb-2 text-start'> + Thêm mới sản phẩm</button>
            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>From</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    {listProduct.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.Price}</td>
                            <td>{product.From}</td>
                            <td><button onClick={() => handleEdit(product.id)} className='btn btn-warning'>Edit</button></td>
                            <td><button onClick={() => handleShowDelete(product.id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}

                </thead>
            </table>
        </>
    )
}
