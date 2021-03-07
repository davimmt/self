<?php

namespace App\Models\Quotes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotes\Book;

class Author extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'title',
        'presentation',
        'image',
        'biography',
        'created_at',
        'updated_at'
    ];


    /**
     * Get the books that belongs to the author.
     * 
     * @return App\Models\Quotes\Book
     */
    public function books()
    {
        return $this->belongsToMany(
            Book::class,
            'author_book',
            'author_id',
            'book_id');
    }

    /**
     * Get the quotes that belongs to the author.
     * 
     * @return App\Models\Quotes\Quote
     */
    public function quotes()
    {
        return $this->books()->quotes();
    }
}
