<?php

class Animal {
    public $hewans;

    public function __construct($data){
        $this->hewans = $data;
    }
    public function index() {
        echo '<br>',"Hewan Sekarang..........",'<br>';
        foreach ($this->hewans as $hewan)
        echo '<br>',$hewan;
    }

    public function store($data) {
        array_push($this->hewans, $data);
    }

    public function update($index, $data) {
        $this->hewans[$index] = $data;
    }
    public function destroy($data) {
        unset($this->hewans[$data]); 
    }
}

$animal = new Animal(['Ayam','Ikan']);
$animal->index();
echo '<br>';

$animal->store('burung');
$animal->index();
echo '<br>';
$animal->update(0, 'kuning anggora');
$animal->index();
echo '<br>';
$animal->destroy(1);
$animal->index();
?>