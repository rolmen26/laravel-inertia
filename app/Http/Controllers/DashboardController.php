<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'ventas' => 150,
            'usuarios' => 22,
            'proyectos' => 5,
        ]);
    }
}
