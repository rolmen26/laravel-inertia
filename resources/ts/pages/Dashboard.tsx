import React, { useState } from "react";
import {
    Home as HomeIcon,
    Person as PersonIcon,
    Assessment as ReportIcon,
    Settings as SettingsIcon,
    ShoppingCart,
    People,
    Folder,
} from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
    Typography,
    Box,
} from "@mui/material";

interface DashboardProps {
    ventas: number;
    usuarios: number;
    proyectos: number;
}

const Dashboard: React.FC<DashboardProps> = ({ ventas, usuarios, proyectos }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const menuItems = [
        { title: "Inicio", icon: <HomeIcon />, route: "/" },
        { title: "Usuarios", icon: <PersonIcon />, route: "/users" },
        { title: "Reportes", icon: <ReportIcon />, route: "/reports" },
        { title: "Configuración", icon: <SettingsIcon />, route: "/settings" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Drawer
                variant="persistent"
                open={isDrawerOpen}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            button
                            key={item.title}
                            selected={selectedIndex === index}
                            onClick={() => setSelectedIndex(index)}
                            className="hover:bg-blue-50"
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <AppBar position="static" className="bg-white shadow-md">
                    <Toolbar>
                        <Typography variant="h6" className="flex-1 text-gray-800">
                            Panel de Control
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Metrics Cards */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ventas Card */}
                    <Card className="bg-blue-50 hover:shadow-lg transition-shadow">
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <ShoppingCart className="text-4xl text-blue-600" />
                                <div>
                                    <Typography variant="h6" className="text-gray-600">
                                        Ventas
                                    </Typography>
                                    <Typography variant="h4" className="font-bold">
                                        {ventas}
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Usuarios Card */}
                    <Card className="bg-green-50 hover:shadow-lg transition-shadow">
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <People className="text-4xl text-green-600" />
                                <div>
                                    <Typography variant="h6" className="text-gray-600">
                                        Usuarios
                                    </Typography>
                                    <Typography variant="h4" className="font-bold">
                                        {usuarios}
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Proyectos Card */}
                    <Card className="bg-purple-50 hover:shadow-lg transition-shadow">
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <Folder className="text-4xl text-purple-600" />
                                <div>
                                    <Typography variant="h6" className="text-gray-600">
                                        Proyectos
                                    </Typography>
                                    <Typography variant="h4" className="font-bold">
                                        {proyectos}
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
