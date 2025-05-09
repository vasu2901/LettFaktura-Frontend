import React, { useState } from 'react';

const EditForm = (data) => {
    const [editdata, seteditData] = useState({
        article_no: '',
        product_service: '',
        in_price: 0,
        price: 0,
        unit: '',
        in_stock: 0,
        description: '',
    });

    return (
        <>
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"

                onClick={() => {
                    seteditData({
                        article_no: data.article_no,
                        product_service: data.product_service,
                        in_price: data.in_price,
                        price: data.price,
                        unit: data.unit,
                        in_stock: data.in_stock,
                        description: data.description,
                    })
                }}>
                Edit
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">New Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="article_no" className="form-label">Article No.</label>
                                <input type="text" className="form-control" id="article_no" value={editdata.article_no || ''} onChange={(e) => {
                                    seteditData({ ...editdata, article_no: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="product_service" className="form-label">Product/Service</label>
                                <input type="text" className="form-control" id="product_service" value={editdata.product_service || ''} onChange={(e) => {
                                    seteditData({ ...editdata, product_service: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inPrice" className="form-label">In Price</label>
                                <input type="number" className="form-control" id="inPrice" value={editdata.in_price || ''} onChange={(e) => {
                                    seteditData({ ...editdata, in_price: parseFloat(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" value={editdata.price || ''} onChange={(e) => {
                                    seteditData({ ...editdata, price: parseFloat(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="unit" className="form-label">Unit</label>
                                <input type="text" className="form-control" id="unit" value={editdata.unit || ''} onChange={(e) => {
                                    seteditData({ ...editdata, unit: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="in_stock" className="form-label">In Stock</label>
                                <input type="number" className="form-control" id="in_stock" value={editdata.in_stock || ''} onChange={(e) => {
                                    seteditData({ ...editdata, in_stock: parseInt(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="description" value={editdata.description || ''} onChange={(e) => {
                                    seteditData({ ...editdata, description: e.target.value })
                                }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={async () => {
                                const res = await fetch(`https://lettfaktura-backend-8u3e.onrender.com/products`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(editdata),
                                });

                                if (!res.ok) {
                                    alert("Error adding product");
                                } else {
                                    alert("Product added successfully");
                                    window.location.reload();
                                }
                            }}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">New Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="article_no" className="form-label">Article No.</label>
                                <input type="text" className="form-control" id="article_no" value={editdata.article_no || ''} onChange={(e) => {
                                    seteditData({ ...editdata, article_no: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="product_service" className="form-label">Product/Service</label>
                                <input type="text" className="form-control" id="product_service" value={editdata.product_service || ''} onChange={(e) => {
                                    seteditData({ ...editdata, product_service: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inPrice" className="form-label">In Price</label>
                                <input type="number" className="form-control" id="inPrice" value={editdata.in_price || ''} onChange={(e) => {
                                    seteditData({ ...editdata, in_price: parseFloat(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" value={editdata.price || ''} onChange={(e) => {
                                    seteditData({ ...editdata, price: parseFloat(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="unit" className="form-label">Unit</label>
                                <input type="text" className="form-control" id="unit" value={editdata.unit || ''} onChange={(e) => {
                                    seteditData({ ...editdata, unit: e.target.value })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="in_stock" className="form-label">In Stock</label>
                                <input type="number" className="form-control" id="in_stock" value={editdata.in_stock || ''} onChange={(e) => {
                                    seteditData({ ...editdata, in_stock: parseInt(e.target.value) || 0 })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="description" value={editdata.description || ''} onChange={(e) => {
                                    seteditData({ ...editdata, description: e.target.value })
                                }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={async () => {
                                const res = await fetch(`https://lettfaktura-backend-8u3e.onrender.com/products`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(editdata),
                                });

                                if (!res.ok) {
                                    alert("Error adding product");
                                } else {
                                    alert("Product added successfully");
                                    window.location.reload();
                                }
                            }}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditForm;