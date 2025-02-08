<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800">Welcome to Inertia.js</h1>
            <p class="mt-4 text-lg text-gray-600">
                Your Laravel + Inertia.js application is running successfully.
            </p>
            <div class="mt-6">
                <button
                    @click="goToDashboard"
                    class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Welcome",
    methods: {
        goToDashboard() {
            this.$inertia.visit('/dashboard'); // Redirige al dashboard o cualquier ruta
        },
    },
};
</script>

<style>
/* Estilos personalizados si los necesitas */
</style>
