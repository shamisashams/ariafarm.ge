<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\CardSlider;
use App\Models\Faq;
use App\Models\Page;
use App\Models\Product;
use App\Models\Slider;
use App\Repositories\Eloquent\CardSliderRepository;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;


class HomeController extends Controller
{


    public function index()
    {


        $page = Page::where('key', 'home')->with('sections.file')->firstOrFail();

        $images = [];
        /*foreach ($page->sections as $sections){
            if($sections->file){
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }

        }*/

        $files = [];
        if($page->images) $files = $page->files;

        //dd($files);

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
//        dd($page->file);
//        dd(App::getLocale());
        $_products = app(ProductRepository::class)->getHomePageProducts();

        $products = [];
        $products['new_collection'] = [];
        $products['bunker'] = [];
        $products['day_product'] = [];
        $products['day_price'] = [];
        $products['special_price_tag'] = [];
        $products['popular'] = [];
        foreach ($_products as $product){
            $product_attributes = $product->attribute_values;

            $_result = [];

            foreach ($product_attributes as $item){
                $options = $item->attribute->options;
                $value = '';
                foreach ($options as $option){
                    if($item->attribute->type == 'select'){
                        if($item->integer_value == $option->id) {
                            $_result[$item->attribute->code] = $option->label;
                        }

                    }
                }

            }
            $product['attributes'] = $_result;

            if($product->new_collection) $products['new_collection'][] = $product;
            if($product->bunker) $products['bunker'][] = $product;
            if($product->day_product) $products['day_product'][] = $product;
            if($product->day_price) $products['day_price'][] = $product;
            if($product->special_price_tag) $products['special_price_tag'][] = $product;
            if($product->popular) $products['popular'][] = $product;
        }

        $cards = CardSlider::query()->with('translation')->get();

        $blogs = Blog::query()->orderBy('created_at','desc')->limit(4)->with(['translation','latestImage'])->get();

        $faqs = Faq::query()->with('translation')->get();

        $special = Product::query()->where('special_price_tag',1)->inRandomOrder()->with(['translation','latestImage'])->first();
        dd($files);

        return Inertia::render('Home/Home', [
            "sliders" => $sliders->get(),
            "page" => $page,
            'cards' => $cards,
            'social_slider' => $files,
            'blogs' => $blogs,
            'faqs' => $faqs,
            'special' => $special,
            "seo" => [
            "title"=>$page->meta_title,
            "description"=>$page->meta_description,
            "keywords"=>$page->meta_keyword,
            "og_title"=>$page->meta_og_title,
            "og_description"=>$page->meta_og_description,

//            "image" => "imgg",
//            "locale" => App::getLocale()
        ],'products' => $products,'images' => $images])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);

    }


}
