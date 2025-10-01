console.log("Hello-1")
setTimeout(() => {
   console.log("Hello-2") 
}, 0);
console.log("Hello-3")

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    console.log(res);
    return res.json()
})
.then((data) => {
    console.log(data)
})