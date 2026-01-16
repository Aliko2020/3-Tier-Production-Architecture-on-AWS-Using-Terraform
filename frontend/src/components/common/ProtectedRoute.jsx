import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuth(false);
            setLoading(false);
            return;
        }

        axios
        axios.get("http://44.200.162.125:3000/api/auth/verify", {
            headers: { Authorization: `Bearer ${token}` },
        })

            .then((res) => {
                if (res.data.valid) setIsAuth(true);
            })
            .catch(() => setIsAuth(false))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!isAuth) return <Navigate to="/login" replace />;

    return children;
};

export default ProtectedRoute;
