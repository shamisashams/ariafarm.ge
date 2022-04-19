<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Repositories\Eloquent;


use App\Models\Attribute;
use App\Models\ProductCard;
use App\Repositories\AttributeRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\ProductAttributeValueRepositoryInterface;
use App\Repositories\ProductCardRepositoryInterface;
use Illuminate\Database\Eloquent\Model;


/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class ProductCardRepository extends BaseRepository implements ProductCardRepositoryInterface
{


    /**
     * @param \App\Models\Product $model
     */
    public function __construct(ProductCard $model)
    {
        parent::__construct($model);


    }



}
