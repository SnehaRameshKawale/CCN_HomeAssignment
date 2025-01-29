<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/execute-command',function(Request $request){
    $command = $request->input('command');
     // Execute the CN command in the shell (ensure you sanitize input to avoid security risks)
     $output = shell_exec($command);
     return response()->json(['output'=> $output]);
});
