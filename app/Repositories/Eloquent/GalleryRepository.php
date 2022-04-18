<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Repositories\Eloquent;


use App\Models\File;
use App\Models\Gallery;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\GalleryRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class GalleryRepository extends BaseRepository implements GalleryRepositoryInterface
{
    /**
     * @param \App\Models\Gallery $model
     */
    public function __construct(Gallery $model)
    {
        parent::__construct($model);
    }

    public function getClient(){
        return $this->model->where('status',1)->with('files')->get();
    }


    public function saveVideos(int $id, $request): Model{
        foreach ($request->post('youtube') as $key => $file) {
            $this->model->files()->create([
                'title' => null,
                'path' => null,
                'format' => null,
                'type' => 1,
                'youtube' => $file
            ]);
        }
    }

}
