<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    public $animals = ['kucing', 'ayam'];

   function index() {
       foreach ($this->animals as $animal){
           echo $animal, '<br>';
       }
       
   }

   function store (Request $request) {
       echo "menambahkan data animals";
       array_push($this->animals, $request->nama);
       $this->index();
   }

   function update(Request $request, $id){
       $this->animals[$id] = $request->animals;
       $this->index();
   }

   function delete($id){
       unset($this->animals[$id]);
       echo "Data Ini Terhapus $id"; 
   }
}
