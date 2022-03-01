<template>
    <div class="container mx-auto py-24 px-8 flex justify-center">
        <div class="grid gap-y-16 gap-x-16 grid-cols-[fit-content(100%)] md:grid-cols-[fit-content(100%)_fit-content(100%)] lg:grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)]">
            <div class="about-card">
                <div>
                    <div class="profile-image-wrapper">
                        <img src="@/assets/contact/yojahuang.jpg" />
                    </div>
                    <h2 class="profile-name">Yoja Huang</h2>
                    <p class="intro-wrapper">
                        <span class="badge bg-blue-500">Frontend</span>
                        <a class="link" href="https://github.com/Yojahuang" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="about-card">
                <div>
                    <div class="profile-image-wrapper">
                        <img src="@/assets/contact/SiriusKoan.jpg" />
                    </div>
                    <h2 class="profile-name">Sirius Koan</h2>
                    <p class="intro-wrapper">
                        <span class="badge bg-blue-500">DevOps</span>
                        <a class="link" href="https://github.com/SiriusKoan" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="about-card">
                <div>
                    <div class="profile-image-wrapper">
                        <img src="@/assets/contact/linlee.jpeg" />
                    </div>
                    <h2 class="profile-name">Lin Lee</h2>
                    <p class="intro-wrapper">
                        <span class="badge bg-blue-500">Backend</span>
                        <a class="link" href="https://linlee.cat" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>

            <div class="about-card">
                <div>
                    <div class="profile-image-wrapper">
                        <img src="@/assets/contact/wdzeng.jpeg" />
                    </div>
                    <h2 class="profile-name">Hyperbola</h2>
                    <p class="intro-wrapper">
                        <span class="badge bg-red-500">Sponsor</span>
                        <a class="link" href="https://github.com/wdzeng" target="_blank" rel="noopener noreferrer">
                            <fa icon="link" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.about-card {
    @apply py-8 px-4 border rounded shadow-xl aspect-[3/4] flex items-center;

    .profile-image-wrapper {
        @apply flex justify-center mb-4 shadow-xl;

        img {
            @apply w-[200px] md:w-[280px] aspect-square object-cover;
        }
    }

    .profile-name {
        @apply text-3xl font-medium text-center mb-4;
    }

    .intro-wrapper {
        @apply flex justify-center items-stretch;

        .badge {
            @apply inline-flex justify-center w-24 rounded text-white mr-2 cursor-pointer;
        }

        .link {
            @apply inline-flex items-center text-sm text-gray-700 hover:text-black text-xl;
        }
    }
}
</style>
