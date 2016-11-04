<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('Detox', function (){
	$people = ['taylor','matt','jeffery'];
	return view('pages.about' , compact($people)); // resources/views/about.blade.php

});

Route::get('/',function () {
	$people = ['taylor','matt','jeffery'];
	return view('welcome', compact($people));
});

Route::get('/app', 'HomeController@index');
