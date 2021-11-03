<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    function index() {
        $students = Student::all();

        $data = [
            'message' => 'Get All Setudent',
            'data' => $students
        ];

        return response()->json($data,200);
    }

    function store(Request $request) {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $students = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $students
        ];

        return response()->json($students,200);

    }

    function show($id) {
        $students = Student::find($id);
        if ($students) {
            $data = [
                "massege" => "Data Detail",
                "data" => $students
            ];

            return response() -> json($data,200);
        } else {
            $data = [
                "massege" => "Data yang mana ?"
            ];

            return response() -> json($data,404);
        }
        

    }

    function update (Request $request, $id) {
        $students = Student::find($id);

        $students->update([
            'nama' => $request->nama ?? $students->nama,
            'nim' => $request->nim ?? $students->nim,
            'email' => $request->email ?? $students->email,
            'jurusan' => $request->jurusan ?? $students->jurusan
        ]);

        $data = [
            'message' => 'Data Di ubah',
            'data' => $students
        ];

        return response() -> json($data,200);
    }

    function destroy($id) {
        $students = Student::find($id);

        if ($students) {
            $students -> delete();

            $data = [
                'massege' => "data terhapus"
            ];
        
            return response() -> json($data,200);
        }

        else {
            $data = [
                'massege' => 'data yang mana ?'
            ];

            return response()-> json($data,404);
        }
    }
}
