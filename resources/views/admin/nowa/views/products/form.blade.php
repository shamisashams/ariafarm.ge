<?php

$ids = $product->categories->pluck("id")->toArray();

//dd($attributes);


$traverse = function ($categories, $prefix = '-') use (&$traverse,$ids) {

    $html = '<ul style="margin: initial !important;padding: initial !important;">';
    foreach ($categories as $category) {
        if(in_array($category->id,$ids)) $checked = 'checked';
        else $checked = '';
        $html .= '<li style="margin-bottom: 5px"><label class="ckbox">
                        <input type="checkbox" name="categories[]" data-checkboxes="mygroup" class="custom-control-input" '. $checked .' id="'.$category->id.'" value="'.$category->id.'">
                        <span style="margin-left: 5px">'.$category->title.'</span>

                        </label></li>';


        if(count($category->children)){
            $html .= '<li class="child" style="padding-left: 20px;margin-bottom: 5px">';
            $html .= $traverse($category->children, $prefix.'-');
            $html .= '</li>';
        }

    }

    $html .= '</ul>';

    return $html;
};

?>
@extends('admin.nowa.views.layouts.app')

@section('styles')

    <!--- Internal Select2 css-->
    <link href="{{asset('assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">

    <!---Internal Fileupload css-->
    <link href="{{asset('assets/plugins/fileuploads/css/fileupload.css')}}" rel="stylesheet" type="text/css"/>

    <!---Internal Fancy uploader css-->
    <link href="{{asset('assets/plugins/fancyuploder/fancy_fileupload.css')}}" rel="stylesheet" />

    <!--Internal Sumoselect css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/sumoselect/sumoselect.css')}}">

    <!--Internal  TelephoneInput css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/telephoneinput/telephoneinput.css')}}">

    <link rel="stylesheet" href="{{asset('uploader/image-uploader.css')}}">

    <script src="{{asset('admin/assets/jscolor/jscolor.js')}}"></script>
    <link rel="stylesheet" href="{{asset('admin/croppie/croppie.css')}}" />

@endsection

@section('content')

    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">{{$product->created_at ? __('admin.product-update') : __('admin.product-create')}}</span>
        </div>
        <div class="justify-content-center mt-2">
            @include('admin.nowa.views.layouts.components.breadcrump')
        </div>
    </div>
    <!-- /breadcrumb -->
    <input name="old-images[]" id="old_images" hidden disabled value="{{$product->files}}">
    <!-- row -->
    {!! Form::model($product,['url' => $url, 'method' => $method,'files' => true]) !!}
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">

                    <div class="mb-4">


                        <div class="panel panel-primary tabs-style-2">
                            <div class=" tab-menu-heading">
                                <div class="tabs-menu1">
                                    <!-- Tabs -->
                                    <ul class="nav panel-tabs main-nav-line">
                                        @foreach(config('translatable.locales') as $locale)
                                            <?php
                                            $active = '';
                                            if($loop->first) $active = 'active';
                                            ?>

                                            <li><a href="#lang-{{$locale}}" class="nav-link {{$active}}" data-bs-toggle="tab">{{$locale}}</a></li>
                                        @endforeach

                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body main-content-body-right border">
                                <div class="tab-content">
                                    <div class="main-content-label mg-b-5">
                                    @lang('admin.productinfo')
                                    </div>
                                    @foreach(config('translatable.locales') as $locale)

                                        <?php
                                        $active = '';
                                        if($loop->first) $active = 'active';
                                        ?>
                                        <div class="tab-pane {{$active}}" id="lang-{{$locale}}">
                                            <div class="form-group">
                                                <label class="form-label">@lang('admin.title')</label>
                                                <input type="text" name="{{$locale.'[title]'}}" class="form-control" placeholder="Name" value="{{$product->translate($locale)->title ?? ''}}">
                                                @error($locale.'.title')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>



                                            <div class="form-group">
                                                {!! Form::label($locale.'[composition]',__('admin.composition'),['class' => 'form-label']) !!}
                                                {!! Form::textarea($locale.'[composition]',$product->translate($locale)->composition ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.composition')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                {!! Form::label($locale.'[recommendation]',__('admin.recommendation'),['class' => 'form-label']) !!}
                                                {!! Form::textarea($locale.'[recommendation]',$product->translate($locale)->recommendation ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.recommendation')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                {!! Form::label($locale.'[recipe]',__('admin.recipe'),['class' => 'form-label']) !!}
                                                {!! Form::textarea($locale.'[recipe]',$product->translate($locale)->recipe ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.recipe')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                {!! Form::label($locale.'[short_description]',__('admin.short_description'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[short_description]',$product->translate($locale)->short_description ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.short_description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>

                                            <div class="form-group">
                                                <label class="form-label" for="description">@lang('admin.description')</label>
                                                <textarea class="form-control" id="description-{{$locale}}"
                                                          name="{{$locale}}[description]'">
                                                    {!! $product->translate($locale)->description ?? '' !!}
                                                </textarea>
                                                @error($locale.'.description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>



                                            <div class="main-content-label mg-b-5 text-danger">
                                            @lang('admin.product_seo')
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_title]',__('admin.meta_title'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_title]',$product->translate($locale)->meta_title ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_title')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_description]',__('admin.meta_description'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_description]',$product->translate($locale)->meta_keyword ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_description')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                {!! Form::label($locale.'[meta_keyword]',__('admin.meta_keyword'),['class' => 'form-label']) !!}
                                                {!! Form::text($locale.'[meta_keyword]',$product->translate($locale)->meta_description ?? '',['class' => 'form-control']) !!}

                                                @error($locale.'.meta_keyword')
                                                <small class="text-danger">
                                                    <div class="error">
                                                        {{$message}}
                                                    </div>
                                                </small>
                                                @enderror
                                            </div>




                                        </div>

                                    @endforeach

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">

                    <div>
                        <h6 class="card-title mb-1">@lang('admin.prodcategoriesss')</h6>
                    </div>
                    <div class="mb-4">


                        <?=$traverse($categories);?>

                            @if($errors->has('categories'))
                                <small class="error text-danger">{{ $errors->first('categories') }}</small>
                            @endif


                    </div>

                    <div class="form-group">
                        {!! Form::label('slug',__('admin.slug'),['class' => 'form-label']) !!}
                        <input type="text" name="slug" class="form-control" placeholder="@lang('admin.slug')" value="{{$product->slug ?? ''}}">
                        @error('slug')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>


                    {{--<div class="form-group">
                        {!! Form::label('code',__('admin.code'),['class' => 'form-label']) !!}
                        {!! Form::text('code',$product->code,['class' => 'form-control']) !!}

                        @error('code')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>--}}

                    <div class="form-group">
                        {!! Form::label('price',__('admin.price'),['class' => 'form-label']) !!}
                        {!! Form::number('price',$product->price,['class' => 'form-control','step' => '0.01','min' => '0']) !!}

                        @error('price')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    <div class="form-group">
                        {!! Form::label('special_price',__('admin.special_price'),['class' => 'form-label']) !!}
                        {!! Form::number('special_price',$product->special_price,['class' => 'form-control','step' => '0.01','min' => '0']) !!}

                        @error('special_price')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>

                    {{--<div class="form-group">
                        {!! Form::label('code',__('admin.quantity'),['class' => 'form-label']) !!}
                        {!! Form::number('quantity',$product->quantity,['class' => 'form-control','min' => '0']) !!}

                        @error('code')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror
                    </div>--}}


                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="status"
                                   value="true" {{$product->status ? 'checked' : ''}}>
                            <span>{{__('admin.status')}}</span>
                        </label>
                    </div>

                    {{--<div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="popular"
                                   value="true" {{$product->popular ? 'checked' : ''}}>
                            <span>{{__('admin.popular')}}</span>
                        </label>
                    </div>



                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="new_collection"
                                   value="true" {{$product->new_collection ? 'checked' : ''}}>
                            <span>{{__('admin.new_collection')}}</span>
                        </label>
                    </div>



                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="day_product"
                                   value="true" {{$product->day_product ? 'checked' : ''}}>
                            <span>{{__('admin.day_product')}}</span>
                        </label>
                    </div>

                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="day_price"
                                   value="true" {{$product->day_price ? 'checked' : ''}}>
                            <span>{{__('admin.day_price')}}</span>
                        </label>
                    </div>--}}

                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="special_price_tag"
                                   value="true" {{$product->special_price_tag ? 'checked' : ''}}>
                            <span>{{__('admin.special_price_tag')}}</span>
                        </label>
                    </div>

                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="bunker"
                                   value="true" {{$product->bunker ? 'checked' : ''}}>
                            <span>{{__('admin.show_recipe')}}</span>
                        </label>
                    </div>

                    <div class="form-group">
                        <label class="ckbox">
                            <input type="checkbox" name="new"
                                   value="true" {{$product->new ? 'checked' : ''}}>
                            <span>{{__('admin.show_cards')}}</span>
                        </label>
                    </div>

                    {{--<div class="form-group">

                        {!! Form::label('sale',__('admin.sale')) !!}
                        {!! Form::number('sale',$product->sale ?? '',['step'=>'0.1','class' => 'form-control']) !!}

                        @error('sale')
                        <small class="text-danger">
                            <div class="error">
                                {{$message}}
                            </div>
                        </small>
                        @enderror

                    </div>--}}

                    {{--<div class="form-group">
                        <div class="main-content-label mg-b-5">
                            @lang('admin.product_attributes')
                        </div>
                    </div>--}}

                    <?php
                    $prod_attr = \Illuminate\Support\Arr::pluck($product->attribute_values,'integer_value','attribute_id');
                    $prod_attr_bool = \Illuminate\Support\Arr::pluck($product->attribute_values,'boolean_value','attribute_id');
                    //dd($prod_attr_bool,$prod_attr);
                    ?>

                    @foreach($attributes as $item)
                        <div class="form-group">
                            <label class="form-label">{{$item->name}}</label>

                            @if($item->type == 'select')
                                <select class="form-control" name="attribute[{{$item->id}}]">
                                    <option value=""></option>
                                    @foreach($item->options as $option)
                                        <?php
                                            if (isset($prod_attr[$item->id])){
                                                if($prod_attr[$item->id] == $option->id){
                                                    $selected = ' selected';
                                                } else $selected = '';
                                            } else $selected = '';
                                        ?>
                                        <option value="{{$option->id}}"{{$selected}}>{{$option->label}}</option>
                                    @endforeach
                                </select>
                            @else

                                <?php
                                if (isset($prod_attr_bool[$item->id])){
                                    if($prod_attr_bool[$item->id]){
                                        $checked = ' checked';
                                        $val = 1;
                                    } else {
                                        $checked = '';
                                        $val = 0;
                                    }
                                } else {
                                    $checked = '';
                                    $val = 0;
                                }
                                ?>

                                <label class="ckbox">
                                    <input type="hidden" name="attribute[{{$item->id}}]" value="{{$val}}">
                                    <input class="bool_ckbox" type="checkbox"{{$checked}}>
                                    <span></span>
                                </label>

                            @endif
                        </div>

                    @endforeach

                    <div class="form-group">
                        <div class="main-content-label mg-b-5">
                            @lang('admin.product_recipe_img')
                        </div>
                    </div>

                    <div class="form-group">

                        <input type="file" class="dropify" name="recipe_image" data-default-file="{{($product->recipe_img) ? asset($product->recipe_img) : ''}}" data-height="200"  />

                    </div>

                    <div class="form-group mb-0 mt-3 justify-content-end">
                        <div>
                            {!! Form::submit($product->created_at ? __('admin.update') : __('admin.create'),['class' => 'btn btn-primary']) !!}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>

    <!-- /row -->
    <!-- row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.prouctimages')</h6>
                    </div>
                    <div class="input-images"></div>
                    @if ($errors->has('images'))
                        <span class="help-block">
                                            {{ $errors->first('images') }}
                                        </span>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- row closed -->





    @if($product->created_at)
    <!-- /row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.product_image_crop_upload')</h6>
                    </div>

                    <div>
                        <p>Select a image file to crop</p>
                        <input type="file" id="inputFile" accept="image/png, image/jpeg">
                    </div>
                    <div id="actions" style="display: none;">
                        <button id="cropBtn" type="button">Crop & Upload</button>
                    </div>
                    <div id="croppieMount"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- row -->
    @endif
    <!-- /row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div>
                        <h6 class="card-title mb-1">@lang('admin.card_slider')</h6>
                    </div>
                    <div>
                        <div class="form-group">
                            <table id="options">
                                <tr>
                                    @foreach(config('translatable.locales') as $locale)


                                        <th>
                                            @lang('admin.text') - {{$locale}}
                                        </th>
                                    @endforeach
                                    <th>@lang('admin.color')</th>
                                </tr>

                                <?php
                                $i = 1;
                                ?>
                                @foreach($product->cards as $item)
                                    <tr>
                                        <input type="hidden" name="options[{{$item->id}}][isNew]" value="false">
                                        <input type="hidden" name="options[{{$item->id}}][isDelete]" value="false">
                                        @foreach(config('translatable.locales') as $locale)


                                            <td>
                                                <textarea class="form-control" type="text" name="options[{{$item->id}}][{{$locale}}][text]">{{$item->translate($locale)->text}}</textarea>
                                            </td>

                                        @endforeach
                                        <td>
                                            <input class="form-control" name="options[{{$item->id}}][color]" value="{{$item->color}}" data-jscolor="{}">
                                        </td>
                                        <td>
                                            <a href="javascript:void(0);" class="del-option"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                @endforeach


                            </table>


                        </div>
                        <button type="button" id="add_option_btn">add card</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- row -->




    <!-- row closed -->
    {!! Form::close() !!}

@endsection

@section('scripts')

    <!--Internal  Datepicker js -->
    <script src="{{asset('assets/plugins/jquery-ui/ui/widgets/datepicker.js')}}"></script>

    <!-- Internal Select2 js-->
    <script src="{{asset('assets/plugins/select2/js/select2.min.js')}}"></script>

    <!--Internal Fileuploads js-->
    <script src="{{asset('assets/plugins/fileuploads/js/fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fileuploads/js/file-upload.js')}}"></script>

    <!--Internal Fancy uploader js-->
    <script src="{{asset('assets/plugins/fancyuploder/jquery.ui.widget.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.iframe-transport.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fancy-fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/fancy-uploader.js')}}"></script>

    <!--Internal  Form-elements js-->
    <script src="{{asset('assets/js/advanced-form-elements.js')}}"></script>
    <script src="{{asset('assets/js/select2.js')}}"></script>

    <!--Internal Sumoselect js-->
    <script src="{{asset('assets/plugins/sumoselect/jquery.sumoselect.js')}}"></script>

    <!-- Internal TelephoneInput js-->
    <script src="{{asset('assets/plugins/telephoneinput/telephoneinput.js')}}"></script>
    <script src="{{asset('assets/plugins/telephoneinput/inttelephoneinput.js')}}"></script>

    <script src="{{asset('uploader/image-uploader.js')}}"></script>

    <script>
        let oldImages = $('#old_images').val();
        if (oldImages) {
            oldImages = JSON.parse(oldImages);
        }
        let imagedata = [];
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];
        if (oldImages && oldImages.length > 0) {
            oldImages.forEach((el, key) => {
                let directory = '';
                if (el.fileable_type === 'App\\Models\\Project') {
                    directory = 'project';
                }
                imagedata.push({
                    id: el.id,
                    src: `${baseUrl}${el.path}/${el.title}`
                })
            })
            $('.input-images').imageUploader({
                preloaded: imagedata,
                imagesInputName: 'images',
                preloadedInputName: 'old_images'
            });
        } else {
            $('.input-images').imageUploader();
        }
    </script>

    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script>
        @foreach(config('translatable.locales') as $locale)
        CKEDITOR.replace('description-{{$locale}}', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
        @endforeach
    </script>

    <script>
        $('[name="categories[]"]').click(function (e){
            let $this = $(this);


                let next = $this.closest('li').next('li');
                //console.log(next);
                if(next.hasClass('child')){
                    if($this.is(':checked')){

                        next.find('input[type=checkbox]').prop('checked',true);
                    } else {
                        next.find('input[type=checkbox]').prop('checked',false);
                    }
                }

                if($this.parents('li').hasClass('child')){

                    if($this.is(':checked')){

                        $this.parents('.child').prev('li').find('input[type=checkbox]').prop('checked',true);
                        //$this.parents('.child').find('input[type=checkbox]').prop('checked',true);
                    } else {
                        //$this.parents('.child').find('input[type=checkbox]').prop('checked',false);
                        $this.parents('.child').prev('li').find('input[type=checkbox]').prop('checked',false);
                    }
                }


        });

        $('.bool_ckbox').click(function (e){
            if($(this).is(':checked')){
                $(this).prev('input[type=hidden]').val(1);
            } else $(this).prev('input[type=hidden]').val(0);
        });


        let locales = @json(config('translatable.locales'));


        let ind = 1;

        $('#add_option_btn').click(function (){
            let tr = $('<tr></tr>');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isNew]" value="true">');
            tr.append('<input type="hidden" name="options[option_'+ ind +'][isDelete]" value="false">');
            Object.keys(locales).map((name, index) => {



                tr.append('<td> <textarea class="form-control" type="text" name="options[option_'+ ind +']['+ locales[name] +'][text]" value=""></textarea></td>');

            })

            tr.append('<td><input class="form-control" name="options[option_'+ ind +'][color]" value="#3399FF80" data-jscolor="{}"></td>')

            tr.append('<td><a href="javascript:void(0);" class="del-option"><i class="fa fa-trash-alt"></i></a></td>');

            $('#options').append(tr);

            ind++
            jscolor.install()

        });

        $(document).on('click','.del-option',function (e){

            let input = $(this).parents('tr').find('input[type=hidden]');

            if(input[0].value === 'true'){
                $(this).parents('tr').remove();
            } else {
                $(this).parents('tr').hide();
                input[1].value = 'true';
            }
        });

        $('select[name=type]').change(function (e){
            let value = $(this).val();

            if(value == 'select'){
                $('#option_row').show();
            } else {
                $('#option_row').hide();
            }
        });
    </script>
    <script src="{{asset('admin/croppie/croppie.js')}}"></script>
    <script>
        let croppie = null;
        let croppieMount = document.getElementById('croppieMount');

        let cropBtn = document.getElementById('cropBtn');

        let inputFile = document.getElementById('inputFile');

        let actions = document.getElementById('actions');

        function cleanUpCroppie() {
            croppieMount.innerHTML = '';
            croppieMount.classList.remove('croppie-container');

            croppie = null;
        }

        inputFile.addEventListener('change', () => {
            cleanUpCroppie();

            // Our input file
            let file = inputFile.files[0];

            let reader = new FileReader();
            reader.onloadend = function(event) {
                // Get the data url of the file
                const data = event.target.result;

                // ...
            }

            reader.readAsDataURL(file);

            reader.onloadend = function(event) {
                // Get the data ulr of the file
                const data = event.target.result;

                croppie = new Croppie(croppieMount, {
                    url: data,
                    viewport: {
                        width: 800,
                        height: 500,

                    },
                    boundary: {
                        width: 1000,
                        height: 700
                    },
                    mouseWheelZoom: false,
                    enableResize: true,
                });

                // Binds the image to croppie
                croppie.bind();

                // Unhide the `actions` div element
                actions.style.display = '';
            }
        })


        cropBtn.addEventListener('click', () => {
            // Get the cropped image result from croppie
            croppie.result({
                type: 'base64',
                circle: false,
                format: 'png',
                size: 'original'
            }).then((imageResult) => {
                // Initialises a FormData object and appends the base64 image data to it
                let formData = new FormData();
                formData.append('base64_img', imageResult);
                formData.append('_token', '{{csrf_token()}}');

                // Sends a POST request to upload_cropped.php
                fetch('{{route('product.crop-upload',$product)}}', {
                    method: 'POST',
                    body: formData
                }).then(() => {
                    location.reload()
                });
            });
        });


    </script>

@endsection
