<?php

use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index']);

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');
