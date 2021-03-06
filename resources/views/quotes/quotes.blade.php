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
        <div class="h3 font-weight-bolder">Banco de Citações</div>
        <div id="quotes-search"></div>
    </div>
@endsection
