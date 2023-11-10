<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // Done
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    // Done
    public function store(Request $request)
    {
        // Membuat validasi
        $validatedData = $request->validate([
            'name' => 'required',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'jurusan' => 'required'
        ]);

        $student = Student::create($validatedData);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student
        ];

        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     */
    // Done
    public function show(string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }

        $data = [
            'message' => 'Show student',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    // Done
    public function update(Request $request, string $id)
    {

        $student = Student::find($id);

        if (!$student) {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }

        $input = [
            'name' => $request->name ?? $student->name,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan
        ];

        $student->update($input);

        $data = [
            'message' => 'Student successfully edited',
            'data' => $student
        ];

        return response()->json($data, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    // Done
    public function destroy(string $id)
    {
        $student = Student::find($id);

        // Menghandle data tidak ada
        if (!$student) {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }

        Student::destroy($id);
        $students = Student::all();
        $data = [
            'message' => 'Student was successfully deleted',
            'data' => $students
        ];

        return response()->json($data, 200);
    }
}