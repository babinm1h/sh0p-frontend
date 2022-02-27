import React from 'react';
import AddBrandForm from '../../components/AdminForms/AddBrandForm';
import AddProductForm from '../../components/AdminForms/AddProductForm';
import AddTypeForm from '../../components/AdminForms/AddTypeForm';
import "./Admin.scss"

const Admin = () => {
    return (
        <div className="admin">
            <AddTypeForm />
            <AddBrandForm />
            <AddProductForm />
        </div>
    );
};

export default Admin;