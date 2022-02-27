import React from 'react';
import { useDispatch } from 'react-redux';
import AddBrandForm from '../../components/AdminForms/AddBrandForm';
import AddProductForm from '../../components/AdminForms/AddProductForm';
import AddTypeForm from '../../components/AdminForms/AddTypeForm';
import { fetchBrands, fetchTypes } from '../../store/actions/shop';
import "./Admin.scss"

const Admin = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchTypes())
        dispatch(fetchBrands())
    }, [])

    return (
        <div className="admin">
            <AddTypeForm />
            <AddBrandForm />
            <AddProductForm />
        </div>
    );
};

export default Admin;