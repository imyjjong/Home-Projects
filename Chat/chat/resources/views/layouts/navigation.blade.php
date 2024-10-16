<header class="header">
    <a href="{{ route('chat.index') }}">Chat</a>
    <p class="header__name">{{ Auth::user()->name }}</p>
</header>