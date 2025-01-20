<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
        <!-- 錯誤代碼 -->
        <h1 class="text-9xl font-extrabold text-cyan-500">404</h1>

        <!-- 錯誤訊息 -->
        <p class="text-2xl text-gray-700 mt-4">Page Not Found</p>
        <p class="text-lg text-gray-500 mt-2">抱歉，我們無法找到您正在尋找的頁面。</p>

        <!-- 返回主頁按鈕 -->
        <router-link to="/"
            class="mt-6 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
            返回主頁
        </router-link>
    </div>
</template>