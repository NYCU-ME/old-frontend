<template>
    <domainRegister> </domainRegister>
    <Suspense>
        <template #default>
            <profileData></profileData>
        </template>
        <template #fallback> Loading...</template>
    </Suspense>

</template>

<script>
import profileData from '@/components/profileData.vue'


export default {
    name: 'profile',
    components: {
        profileData
    },
    setup() {
    
    }
}
</script>
