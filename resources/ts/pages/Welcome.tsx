import React from 'react';
import {Link} from "@inertiajs/react";
import {AccountCircle} from "@mui/icons-material";

const WelcomePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <i>
                    <AccountCircle />
                </i>
                <h1 className="mt-4 text-3xl font-bold text-gray-800">
                    Bienvenido a nuestra aplicación
                </h1>
                <div>
                    <Link href="/dashboard" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Ir al dashboard
                    </Link>
                </div>
                <p className="mt-2 text-lg text-gray-600">
                    ¡Gracias por visitarnos! Esperamos que disfrutes de tu estancia.
                </p>
            </div>
        </div>
    );
};

export default WelcomePage;
