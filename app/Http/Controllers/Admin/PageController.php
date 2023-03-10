<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageRequest;
use App\Models\CardSlider;
use App\Models\Page;
use App\Repositories\Eloquent\CardSliderRepository;
use App\Repositories\Eloquent\PageSectionRepository;
use App\Repositories\PageRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;

class PageController extends Controller
{

    /**
     * @var PageRepositoryInterface
     */
    private $pageRepository;

    private $pageSectionRepository;

    private $cardSliderRepository;


    /**
     * @param PageRepositoryInterface $pageRepository
     */
    public function __construct(
        PageRepositoryInterface  $pageRepository,
        PageSectionRepository $pageSectionRepository,
        CardSliderRepository $cardSliderRepository
    )
    {
        $this->pageRepository = $pageRepository;
        $this->pageSectionRepository = $pageSectionRepository;
        $this->cardSliderRepository = $cardSliderRepository;
    }


    /**
     * @param PageRequest $request
     * @return Application|Factory|View
     */
    public function index(PageRequest $request)
    {
        /*return view('admin.pages.page.index', [
            'pages' => $this->pageRepository->getData($request, ['translations'])
        ]);*/

        return view('admin.nowa.views.page.index', [
            'data' => $this->pageRepository->getData($request, ['translations'])
        ]);
    }


    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Page $page
     * @return Application|Factory|View
     */
    public function show(string $locale, Page $page)
    {
        return view('admin.pages.page.show', [
            'page' => $page,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Page $page
     * @return Application|Factory|View
     */
    public function edit(string $locale, Page $page)
    {
        $url = locale_route('page.update', $page->id, false);
        $method = 'PUT';

        $page = $page->where('id',$page->id)->with(['sections'])->first();

        $cards = CardSlider::all();
        //dd($cards);

        /*return view('admin.pages.page.form', [
            'page' => $page,
            'url' => $url,
            'method' => $method,
        ]);*/

        return view('admin.nowa.views.page.form', [
            'page' => $page,
            'url' => $url,
            'method' => $method,
            'cards' => $cards
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PageRequest $request
     * @param string $locale
     * @param Page $page
     * @return Application|RedirectResponse|Redirector
     */
    public function update(PageRequest $request, string $locale, Page $page)
    {
        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['images'] = isset($saveData['images']) && (bool)$saveData['images'];
        $this->pageRepository->update($page->id,$saveData);
        $this->pageRepository->saveFiles($page->id, $request);

        $this->pageSectionRepository->saveFile($page->id, $request);

        if (isset($saveData['options'])) {
            foreach ($saveData['options'] as $optionId => $optionInputs) {
                $isNew = $optionInputs['isNew'] == 'true' ? true : false;

                if ($isNew) {
                    $this->cardSliderRepository->create($optionInputs);
                } else {
                    $isDelete = $optionInputs['isDelete'] == 'true' ? true : false;

                    if ($isDelete) {
                        $this->cardSliderRepository->delete($optionId);
                    } else {
                        $this->cardSliderRepository->update($optionId,$optionInputs);
                    }
                }
            }
        }



        return redirect(locale_route('page.index'))->with('success', __('admin.update_successfully'));
    }

}
