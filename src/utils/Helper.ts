export const createBrandData =(data:any)=>{
    
let brand =[]

brand = data.map((d:any)=>{
    let a={
        id:d._id,
        name:d.brand,
        image:d.image
    }
    return a
})

return brand;

}