import React, { useState } from 'react'
import "./formAdd.css";
import { useDispatch } from 'react-redux';
import { createProduct } from '../services/productService';

export default function FormAdd({ handleCloseForm }) {
    const dispatch = useDispatch();

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

    // ham submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // goi API them moi
        dispatch(createProduct(product));
        handleCloseForm();
    }
    return (
        <>
            <div className="product-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>Thêm mới sản phẩm</h2>
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
                        />
                    </div>
                    <div className="d-flex gap-3 justify-content-center">
                        <button type="submit" className="btn btn-primary">
                            Thêm mới
                        </button>
                        <button
                            onClick={handleCloseForm}
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
