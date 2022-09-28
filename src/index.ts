export const fn = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },2000)
    })
}
export const add = (a:number,b:number) => {
    return a+b
}