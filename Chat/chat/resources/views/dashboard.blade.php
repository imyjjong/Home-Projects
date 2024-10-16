<x-app-layout>
    <x-slot name="header">
        <h2 class="dashboard">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="dashboard__wrapper">
        <div class="dashboard__text">
            {{ __("You're logged in!") }}
        </div>
    </div>
</x-app-layout>
