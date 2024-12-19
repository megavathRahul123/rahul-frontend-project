const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#producTemplate");

export const showproductsContainter = (products)=>{
    if(!products){
        return false;
    }

    products.forEach((curPro)=>{
        const{brand,category,description,id,image,name,price,stock}=
        curPro;

        const productClone = document.importNode(productTemplate.Content,true);
        productClone.querySelector(".productName").textContainer = name;

        productContainer.append(productClone);
    });



};

