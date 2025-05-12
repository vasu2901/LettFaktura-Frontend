import React, { useState, useEffect } from 'react';

const Form = ({ initialData = null, mode = "create", modalId = "productModal" }) => {
    const [editdata, seteditData] = useState({
        article_no: '',
        product_service: '',
        in_price: 0,
        price: 0,
        unit: '',
        in_stock: 0,
        description: '',
    });

    useEffect(() => {
        if (initialData) {
            seteditData({
                article_no: initialData.article_no || '',
                product_service: initialData.product_service || '',
                in_price: initialData.in_price || 0,
                price: initialData.price || 0,
                unit: initialData.unit || '',
                in_stock: initialData.in_stock || 0,
                description: initialData.description || '',
            });
        }
    }, [initialData]);

    const handleSubmit = async () => {
        const url =
            mode === 'edit'
                ? `https://lettfaktura-backend-8u3e.onrender.com/products/${initialData.id}`
                : `https://lettfaktura-backend-8u3e.onrender.com/products`;

        const method = mode === 'edit' ? 'PUT' : 'POST';

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editdata),
        });

        if (!res.ok) {
            alert(`Error ${mode === 'edit' ? 'updating' : 'adding'} product`);
        } else {
            alert(`Product ${mode === 'edit' ? 'updated' : 'added'} successfully`);
            window.location.reload();
        }
    };

    return (
        <>
            <button
                type="button"
                className={mode !== 'edit' ? "btn btn-outline-success border rounded-pill d-flex align-items-center" : "btn btn-outline-success                    "}
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            >
                {mode === 'edit' ? 'Edit' : 'New Product +'}
            </button>

            <div
                className="modal fade"
                id={modalId}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby={`${modalId}Label`}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${modalId}Label`}>
                                {mode === 'edit' ? 'Edit Product' : 'New Product'}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {['article_no', 'product_service', 'unit', 'description'].map((field) => (
                                <div className="mb-3" key={field}>
                                    <label htmlFor={field} className="form-label">
                                        {field.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase())}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={field}
                                        value={editdata[field] || ''}
                                        onChange={(e) =>
                                            seteditData({ ...editdata, [field]: e.target.value })
                                        }
                                    />
                                </div>
                            ))}

                            {['in_price', 'price', 'in_stock'].map((field) => (
                                <div className="mb-3" key={field}>
                                    <label htmlFor={field} className="form-label">
                                        {field.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase())}
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id={field}
                                        value={editdata[field] || ''}
                                        onChange={(e) =>
                                            seteditData({
                                                ...editdata,
                                                [field]: parseFloat(e.target.value) || 0,
                                            })
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
