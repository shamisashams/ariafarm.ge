<?php

namespace App\Models;

use App\Models\Translations\BlogTranslation;
use App\Models\Translations\ProductCardTranslation;
use App\Models\Translations\ProductTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;



class ProductCard extends Model
{
    use Translatable, HasFactory;

    /**
     * @var string
     */
    protected $table = 'product_cards';

    /**
     * @var string[]
     */
    protected $fillable = [
        'product_id',
        'color',

    ];

    /** @var string */
    protected $translationModel = ProductCardTranslation::class;

    //protected $with = ['translation'];

    /** @var array */
    public $translatedAttributes = [
        'text',

    ];

    //protected $with = ['translation'];











    /**
     * Get the product that owns the card.
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

}
