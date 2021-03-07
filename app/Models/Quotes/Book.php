<?php

namespace App\Models\Quotes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotes\Author;
use App\Models\Quotes\Quote;

class Book extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'subtitle',
        'cover',
        'publisher',
        'year',
        'city',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the authors of the book.
     * 
     * @return App\Models\Quotes\Author
     */
    public function authors()
    {
        return $this->belongsToMany(
            Author::class,
            'author_book',
            'book_id',
            'author_id');
    }

    /**
     * Get the quotes that belongs to the book.
     * 
     * @return App\Models\Quotes\Quote
     */
    public function quotes()
    {
        return $this->hasMany(Quote::class);
    }
}
