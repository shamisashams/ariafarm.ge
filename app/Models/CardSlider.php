<?php

namespace App\Models;

use App\Models\Translations\CardSliderTranslation;
use App\Models\Translations\PageTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class CardSlider extends Model
{
    use Translatable, HasFactory, ScopeFilter;


    protected $table = 'card_slider';

    protected $fillable = [
        'color',
        'icon'
    ];

    //protected $with = 'sections';

    protected $translationModel = CardSliderTranslation::class;

    public $translatedAttributes = [
        'text',
    ];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'key' => [
                'hasParam' => true,
                'scopeMethod' => 'key'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ]
        ];
    }





}
