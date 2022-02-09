<template>
    <div class="container mx-auto py-24 flex justify-center">
        <div class="grid gap-y-16 gap-x-8 grid-cols-[fit-content(100%)] md:grid-cols-[fit-content(100%)_fit-content(100%)] lg:grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)]">
            <div class="py-8 px-4 border rounded shadow-xl aspect-[3/4] flex items-center">
                <div>
                    <div class="flex justify-center mb-4 shadow-xl">
                        <img class src="@/assets/contact/yojahuang.jpg" width="280" />
                    </div>
                    <h2 class="text-3xl font-medium text-center mb-4">Yoja Huang</h2>
                    <p class="flex justify-center items-stretch">
                        <span class="inline-flex justify-center w-24 bg-blue-500 rounded text-white mr-2 cursor-pointer">Frontend</span>
                        <a class="inline-flex items-center text-sm text-gray-700 hover:text-black" href="https://github.com/Yojahuang" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="py-8 px-4 border rounded shadow-xl aspect-[3/4] flex items-center">
                <div>
                    <div class="flex justify-center mb-4 shadow-xl">
                        <img class src="@/assets/contact/SiriusKoan.jpg" width="280" />
                    </div>
                    <h2 class="text-3xl font-medium text-center mb-4">Sirius Koan</h2>
                    <p class="flex justify-center items-stretch">
                        <span class="inline-flex justify-center w-24 bg-blue-500 rounded text-white mr-2 cursor-pointer">DevOps</span>
                        <a class="inline-flex items-center text-sm text-gray-700 hover:text-black" href="https://github.com/SiriusKoan" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="py-8 px-4 border rounded shadow-xl aspect-[3/4] flex items-center">
                <div>
                    <div class="flex justify-center mb-4 shadow-xl">
                        <img class src="@/assets/contact/linlee.jpeg" width="280" />
                    </div>
                    <h2 class="text-3xl font-medium text-center mb-4">Lin Lee</h2>
                    <p class="flex justify-center items-stretch">
                        <span class="inline-flex justify-center w-24 bg-blue-500 rounded text-white mr-2 cursor-pointer">Backend</span>
                        <a class="inline-flex items-center text-sm text-gray-700 hover:text-black" href="https://linlee.cat" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="py-8 px-4 border rounded shadow-xl aspect-[3/4] flex items-center">
                <div>
                    <div class="flex justify-center mb-4 shadow-xl">
                        <img class src="@/assets/contact/wdzeng.jpeg" width="280" />
                    </div>
                    <h2 class="text-3xl font-medium text-center mb-4">Hyperbola</h2>
                    <p class="flex justify-center items-stretch">
                        <span class="inline-flex justify-center w-24 bg-red-500 rounded text-white mr-2 cursor-pointer">Sponsor</span>
                        <a class="inline-flex items-center text-sm text-gray-700 hover:text-black" href="https://github.com/wdzeng" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'about',
    setup() {

    }
}
</script>
