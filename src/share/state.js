import {reactive, computed} from "vue"
import {useCookie} from 'vue-cookie-next'

const uiState = reactive({
    isMobileMenuHidden: true
})


const toggleMobileMenu = function () {
    uiState.isMobileMenuHidden = !uiState.isMobileMenuHidden
}

const isMobileMenuHidden = computed(
    () => {
        return uiState.isMobileMenuHidden
    }
)

const isLogin = function() {
    const cookie = useCookie()
    if (cookie.isCookieAvailable("token")) return true;
    else return false;
}

const state = {
    toggleMobileMenu,
    isMobileMenuHidden,
    isLogin
}

export default state
