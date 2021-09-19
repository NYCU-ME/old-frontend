<template>
    <domainRegister> </domainRegister>
    <Suspense>
        <template #default>
            <domainManage></domainManage>
        </template>
        <template #fallback> Loading...</template>
    </Suspense>

</template>

<script>
// @ is an alias to /src
import state from '@/share/state'
import config from '@/share/config'
import domainRegister from '@/components/domainRegister.vue'
import domainManage from '@/components/domainManage.vue'


export default {
    name: 'domain',
    components: {
        domainRegister,
        domainManage
    },
    setup() {
        const {isLogin} = state;
        if (isLogin() == false) {
            alert("尚未登入")
            location.replace(config.getHomepageURL())
        }
    }
}
</script>
