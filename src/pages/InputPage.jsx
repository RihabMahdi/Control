// src/pages/InputPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, addItem, deleteItem, editItem } from '../features/inputSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputPage = () => {
    const dispatch = useDispatch();
    const inputValues = useSelector((state) => state.input.inputValues);
    const items = useSelector((state) => state.input.items);
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setInputValue({ field: name, value }));
    };

    const handleAddItem = () => {
        dispatch(addItem());
    };

    const handleEditItem = (index) => {
        const itemToEdit = items[index];
        dispatch(setInputValue({
            field: 'codeMateriel',
            value: itemToEdit.codeMateriel,
        }));
        dispatch(setInputValue({
            field: 'marque',
            value: itemToEdit.marque,
        }));
        dispatch(setInputValue({
            field: 'date',
            value: itemToEdit.date,
        }));
        dispatch(setInputValue({
            field: 'categorie',
            value: itemToEdit.categorie,
        }));
        setEditIndex(index);
    };

    const handleUpdateItem = () => {
        dispatch(editItem(editIndex));
        setEditIndex(-1);
    };

    const handleDeleteItem = (index) => {
        dispatch(deleteItem(index));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add Item to List</h1>
            <div className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Code Matériel</label>
                    <input
                        type="text"
                        name="codeMateriel"
                        value={inputValues.codeMateriel}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Code Matériel"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Marque</label>
                    <input
                        type="text"
                        name="marque"
                        value={inputValues.marque}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Marque"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={inputValues.date}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Catégorie</label>
                    <input
                        type="text"
                        name="categorie"
                        value={inputValues.categorie}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Catégorie"
                    />
                </div>
                <button onClick={editIndex >= 0 ? handleUpdateItem : handleAddItem} className="btn btn-primary w-100">
                    {editIndex >= 0 ? 'Update' : 'Confirmer'}
                </button>
            </div>

            <table className="table table-bordered mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Code Matériel</th>
                        <th>Marque</th>
                        <th>Date</th>
                        <th>Catégorie</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {editIndex === index ? (
                                    <>
                                        <td>
                                            <input
                                                type="text"
                                                name="codeMateriel"
                                                defaultValue={item.codeMateriel}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    dispatch(setInputValue({ field: 'codeMateriel', value }));
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="marque"
                                                defaultValue={item.marque}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    dispatch(setInputValue({ field: 'marque', value }));
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name="date"
                                                defaultValue={item.date}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    dispatch(setInputValue({ field: 'date', value }));
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="categorie"
                                                defaultValue={item.categorie}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    dispatch(setInputValue({ field: 'categorie', value }));
                                                }}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.codeMateriel}</td>
                                        <td>{item.marque}</td>
                                        <td>{item.date}</td>
                                        <td>{item.categorie}</td>
                                    </>
                                )}
                                <td>
                                    {editIndex === index ? (
                                        <button
                                            className="btn btn-success"
                                            onClick={handleUpdateItem}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => handleEditItem(index)}
                                        >
                                            Edit
                                        </button>
                                    )}
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">Aucun élément ajouté.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InputPage;
