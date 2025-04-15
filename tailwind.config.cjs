// filepath: c:\Users\Devanshu\OneDrive\Documents\SDC\student-dev-cell\tailwind.config.js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FirstCry Clone</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="text-2xl font-bold text-pink-600">FirstCry</div>
      <nav class="space-x-4 hidden md:block">
        <a href="#" class="hover:text-pink-600">Shop</a>
        <a href="#" class="hover:text-pink-600">Brands</a>
        <a href="#" class="hover:text-pink-600">Offers</a>
        <a href="#" class="hover:text-pink-600">New Arrivals</a>
      </nav>
      <div class="flex items-center gap-4">
        <input type="text" placeholder="Search" class="px-2 py-1 border rounded-md hidden md:block" />
        <button class="text-pink-600 hover:underline">Login</button>
        <button class="relative">
          🛒
          <span class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-pink-100 to-yellow-100 py-12">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Everything Your Baby Needs</h1>
      <p class="text-lg text-gray-700 mb-6">Shop top brands in baby care, clothing, toys, and more!</p>
      <a href="#" class="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700">Shop Now</a>
    </div>
  </section>

</body>
</html>
