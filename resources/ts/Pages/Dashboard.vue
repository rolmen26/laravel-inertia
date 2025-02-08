<template>
    <v-app>
        <!-- Barra de navegación superior -->
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>My Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- Menú lateral (Drawer) -->
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-subheader>Menú Principal</v-list-subheader>
                <v-divider></v-divider>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.route"
                    link
                >
                    <v-list-item-title>
                        <v-icon class="me-3">{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Contenido principal -->
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="pa-4">
                            <v-card-title>Ventas Totales</v-card-title>
                            <v-card-text>
                                <h2 class="text-primary">$18,500</h2>
                                <p>Este mes</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="pa-4">
                            <v-card-title>Usuarios Activos</v-card-title>
                            <v-card-text>
                                <h2 class="text-primary">820</h2>
                                <p>Incremento del 8%</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="pa-4">
                            <v-card-title>Proyectos Completados</v-card-title>
                            <v-card-text>
                                <h2 class="text-primary">45</h2>
                                <p>Este trimestre</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Dashboard",
    data() {
        return {
            drawer: true, // Controla el estado del menú lateral
            menuItems: [
                { title: "Inicio", icon: "mdi-home", route: "/" },
                { title: "Perfil", icon: "mdi-account", route: "/profile" },
                { title: "Reportes", icon: "mdi-chart-bar", route: "/reports" },
                { title: "Configuración", icon: "mdi-cog", route: "/settings" },
            ],
        };
    },
});
</script>

<style scoped>
.text-primary {
    color: #1976d2;
}
.me-3 {
    margin-right: 1rem;
}
</style>
