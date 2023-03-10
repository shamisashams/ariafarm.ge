<?php
/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->withoutMiddleware('web')->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/category');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('category.destroy');
//
                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');
                Route::post('product/{product?}/upload-cropped',[\App\Http\Controllers\Admin\ProductController::class, 'uploadCropped'])->name('product.crop-upload');
//                // Gallery
                Route::resource('gallery', GalleryController::class);
                Route::get('gallery/{gallery}/destroy', [GalleryController::class, 'destroy'])->name('gallery.destroy');


                Route::resource('blog', \App\Http\Controllers\Admin\BlogController::class);
                Route::get('blog/{blog}/destroy', [\App\Http\Controllers\Admin\BlogController::class, 'destroy'])->name('blog.destroy');

                Route::resource('faq', \App\Http\Controllers\Admin\FaqController::class);
                Route::get('faq/{faq}/destroy', [\App\Http\Controllers\Admin\FaqController::class, 'destroy'])->name('faq.destroy');

                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');


                Route::get('setting/active',[SettingController::class,'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');

                Route::get('subscribers', [\App\Http\Controllers\Admin\SubscriberController::class,'index'])->name('subscriber.index');;


                Route::resource('order', \App\Http\Controllers\Admin\OrderController::class);
                //Route::get('order/{order}/destroy', [\App\Http\Controllers\Admin\OrderController::class, 'destroy'])->name('order.destroy');

                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('attribute', \App\Http\Controllers\Admin\AttributeController::class);
                Route::get('attribute/{attribute}/destroy', [\App\Http\Controllers\Admin\AttributeController::class, 'destroy'])->name('attribute.destroy');


                Route::post('category/sort-sub',[\App\Http\Controllers\Admin\CategoryController::class,'sortSub'])->name('category.sortSub');

            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index');



            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');


            // About Page
            Route::get('about', [AboutUsController::class, 'index'])->name('client.about.index');

            // Product Page
            Route::get('products', [\App\Http\Controllers\Client\ProductController::class, 'index'])->name('client.product.index');
           Route::get('product/{product}', [\App\Http\Controllers\Client\ProductController::class, 'show'])->name('client.product.show');

           Route::get('category/{category}',[\App\Http\Controllers\Client\CategoryController::class,'show'])->name('client.category.show');
            Route::get('popular',[\App\Http\Controllers\Client\CategoryController::class,'popular'])->name('client.category.popular');
            Route::get('special',[\App\Http\Controllers\Client\CategoryController::class,'special'])->name('client.category.special');
            Route::get('new',[\App\Http\Controllers\Client\CategoryController::class,'new'])->name('client.category.new');


            // Gallery Page
            Route::get('gallery', [\App\Http\Controllers\Client\GalleryController::class, 'index'])->name('client.gallery.index');

            // Blogs Page
            Route::get('blog', [\App\Http\Controllers\Client\BlogController::class, 'index'])->name('client.blog.index');
            Route::get('blog/{blog}', [\App\Http\Controllers\Client\BlogController::class, 'show'])->name('client.blog.show');

            // Special offer Page
            Route::get('special-offer', [\App\Http\Controllers\Client\SpecialOfferController::class, 'index'])->name('client.special-offer.index');

            Route::get('search', [\App\Http\Controllers\Client\SearchController::class, 'index'])->name('client.search.index');

            Route::get('farm', [\App\Http\Controllers\Client\FarmController::class, 'index'])->name('client.farm.index');
            Route::get('enterprise', [\App\Http\Controllers\Client\EnterpriseController::class, 'index'])->name('client.enterprise.index');
            Route::get('shops', [\App\Http\Controllers\Client\ShopController::class, 'index'])->name('client.shop.index');

            //checkout
            Route::get('cart',[\App\Http\Controllers\Client\CartController::class,'index'])->name('client.cart.index');
            Route::get('checkout',[\App\Http\Controllers\Client\OrderController::class,'index'])->name('client.checkout.index');
            Route::post('checkout',[\App\Http\Controllers\Client\OrderController::class,'order'])->name('client.checkout.order');
            Route::get('order/success',[\App\Http\Controllers\Client\OrderController::class,'statusSuccess'])->name('order.success');

            Route::post('subscribe',[\App\Http\Controllers\Client\SubscribeController::class,'subscribe'])->name('client.subscribe.subscribe');


        });
    });


