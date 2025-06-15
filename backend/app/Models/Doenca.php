<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doenca extends Model
{
    protected $table = "doencas";

    protected $fillable = [
        "nome",
        "url_image"
    ];

}
