let client_id = "29ZuGjlHp2R4ctu7lKc6jwLLJjfxrXnuK7LzD55Z"
let loginUrl = "https://id.nycu.edu.tw/o/authorize/?client_id=" + client_id + "&response_type=code&scope=profile"

export default {
    getLoginUrl: function() {
        return loginUrl
    }
}
