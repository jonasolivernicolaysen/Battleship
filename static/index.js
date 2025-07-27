const vm = new Vue({
    // set Vue instance name to vm (viewmodel)
    el: "#vm",
    delimiters: ["[[", "]]"],
    data: {
        greeting: "hello, vue!!"
    }
})