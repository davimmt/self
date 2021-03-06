@extends('layouts.app')

@section('content')
<div class="container">
    @if (Route::has('login'))
        <div class="w-100 text-right">
            @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Home</a>
            @else
                <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Log in</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="container">
        <div id="logo"></div>
        <div class="row d-flex align-items-center" style="height: 20vh">
            <div id="welcome-quote" class="col-lg-6"></div>
            <div id="welcome-text" class="col-lg-6"></div>
        </div>
        <div class="row d-flex align-items-center" style="height: 20vh">
            <div id="welcome-author" class="col-lg-6"></div>
            <div id="welcome-book" class="col-lg-6"></div>
        </div>
    </div>
    <p class="w-100 text-right text-sm text-muted m-0" style="position: absolute; bottom: 10px; right: 10px">
        Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
    </p>
@endsection
