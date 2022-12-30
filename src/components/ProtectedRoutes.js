import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminLayout from '../layout/adminLayout'
const ProtectedRoute = ({ component: Component, ...rest }) => {
    if (true) {
        return (
            <AdminLayout>
                <Component />
            </AdminLayout>
        )
    } else {
        return <Navigate to={"/"} /* to={{ pathname: '/', state: { from: location } }} */ />
    }
}
export default ProtectedRoute;
