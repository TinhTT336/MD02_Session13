import React, { useEffect, useState } from 'react'
import "./formAdd.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, updateProduct } from '../services/productService';
// import axios from 'axios';

export default function FormAdd({ handleCloseEdit, idEdit }) {
    const dispatch = useDispatch();
    const listProduct = useSelector(state => state.product.data)
    // console.log(listProduct);
    const [product, setProduct] = useState({
        ProductName: "",
        Price: 0,
        From: "",
    });

    // ham lay du lieu tu o input
    const handleChange = (e) => {
        const { value, name } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }

    // ham thong tin san pham theo id duoc truyen tu cha xuong thong qua props idEdit
    const getProductById = () => {
        const productEdit = listProduct.find(p => p.id === idEdit);
        setProduct(productEdit);
    }
    useEffect(() => {
        getProductById();
    }, [])
    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // goi API cap nhat
        dispatch(updateProduct(product));//ban action kem thong tin len reducer de xu ly
        dispatch(getAllProduct());//load lai du lieu
        handleCloseEdit();
    }
    return (
        <>
            <div className="product-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Cập nhật sản phẩm</h2>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Tên sản phẩm
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="productName"
                            name="ProductName"
                            value={product.ProductName}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Giá
                        </label>
                        <input
                            onChange={handleChange}
                            type="number"
                            className="form-control"
                            id="price"
                            name="Price"
                            value={product.Price}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from" className="form-label">
                            Xuất xứ
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="from"
                            name="From"
                            value={product.From}
                        />
                    </div>
                    <div className="d-flex gap-3 justify-content-center">
                        <button type="submit" className="btn btn-primary">
                            Cập nhật
                        </button>
                        <button
                            onClick={handleCloseEdit}
                            type="button"
                            className="btn btn-danger"
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}
