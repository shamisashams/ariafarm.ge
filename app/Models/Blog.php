<?php

namespace App\Models;

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



class Blog extends Model implements Searchable
{
    use SoftDeletes, Translatable, HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'products';

    /**
     * @var string[]
     */
    protected $fillable = [
        'slug',
        'status',
        'popular',
        'sale',
        'stock',
        'code',
        'price',
        'quantity',
        'special_price',
        'new',
        'new_collection',
        'bunker',
        'day_price',
        'day_product',
        'special_price_tag'
    ];

    /** @var string */
    protected $translationModel = ProductTranslation::class;

    //protected $with = ['translation'];

    /** @var array */
    public $translatedAttributes = [
        'title',
        'short_description',
        'description',
        'meta_title',
        'meta_description',
        'meta_keyword',
    ];

    //protected $with = ['translation'];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'slug' => [
                'hasParam' => true,
                'scopeMethod' => 'slug'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ],
            'category_id' => [
                'hasParam' => true,
                'scopeMethod' => 'categoryId'
            ]
        ];
    }

    public function getSearchResult(): SearchResult
    {
        $url = locale_route('client.product.show', $this->slug);

        return new SearchResult(
            $this,
            $this->title,
            $url
        );
    }

    /**
     * @return BelongsTo
     */
    /*public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }*/

    /**
     * The categories that belong to the product.
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }

    /**
     * Get the product attribute values that owns the product.
     */
    public function attribute_values(): HasMany
    {
        return $this->hasMany(ProductAttributeValue::class);
    }

    /**
     * @return MorphMany
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }

    /**
     * @return MorphOne
     */
    public function file(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable');
    }


    public function latestImage()
    {
        return $this->morphOne(File::class, 'fileable')->latestOfMany();
    }

}
