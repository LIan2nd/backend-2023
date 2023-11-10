<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $input = [
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];

        $user = User::create($input);

        $data = [
            'message' => 'User is created successfully'
        ];

        return response()->json($data, 200);
    }
    public function login(Request $request)
    {
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // Cara pertama
        // $user = User::where('email', $input['email'])->first();

        // $isLoginSuccessfully = (
        //     $input['email'] == $user->email && Hash::check($input['password'], $user->password)
        // );

        // if (!$isLoginSuccessfully) {
        //     $data = [
        //         'message' => 'Email or Password is wrong'
        //     ];

        //     return response()->json($data, 401);
        // }
        // $token = $user->createToken('auth_token');

        // $data = [
        //     'message' => 'Login Successfully',
        //     'token' => $token->plainTextToken
        // ];

        // return response()->json($data, 200);

        // Cara Kedua
        if (!Auth::attempt($input)) {
            $data = [
                'message' => 'Email or Password is wrong'
            ];

            return response()->json($data, 401);
        }

        $token = Auth::user()->createToken('auth_token');

        $data = [
            'message' => 'Login Successfully',
            'token' => $token->plainTextToken
        ];

        return response()->json($data, 200);
    }
}
