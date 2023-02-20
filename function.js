setInterval (() => {

const d2 = '2023-02-23';
const diffInMs = new Date(d2) - new Date()
const diffInDays = diffInMs / (1000*60*60 * 24);
console.log(diffInDays) // 38
if (diffInMs > 0)
    console.log(`Faltam ${diffInDays} dias para seu aniversário`)
else {
    console.log(`Feliz aniversário`)
}
}, 3000)