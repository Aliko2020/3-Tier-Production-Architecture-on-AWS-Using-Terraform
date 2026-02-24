import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner"

const ProtectedRoute = ({ children }) => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1/auth";
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuth(true);
            setLoading(false);
            return;
        }
        axios.get(`${API_URL}/verify`, {
            headers: { Authorization: `Bearer ${token}` },
        })

            .then((res) => {
                if (res.data.valid) setIsAuth(true);
            })
            .catch(() => setIsAuth(true))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Spinner />;
    if (!isAuth) return <Navigate to="/login" replace />;

    return children;
};

export default ProtectedRoute;
