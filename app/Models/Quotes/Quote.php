<?php

namespace App\Models\Quotes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotes\Book;

class Quote extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'book_id',
        'text',
        'theme',
        'pages',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the book where the quote's from.
     * 
     * @return App\Models\Quotes\Book
     */
    public function book()
    {
        return $this->belongsTo(Book::class, 'book_id');
    }

    /**
     * Get the authors of the quote.
     * 
     * @return App\Models\Quotes\Author
     */
    public function authors()
    {
        return $this->book()->authors();
    }
}
