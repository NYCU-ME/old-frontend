let clientIndex = "29ZuGjlHp2R4ctu7lKc6jwLLJjfxrXnuK7LzD55Z"
let loginURL = "https://id.nycu.edu.tw/o/authorize/?client_id=" + clientIndex + "&response_type=code&scope=profile"
let baseURL = "https://api.nycu.me"


export default {
    getLoginURL: function() {
        return loginURL
    },
    getBaseURL: function() {
        return baseURL
    }
}
