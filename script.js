// api url
const api_url = "https://dummyjson.com/products";

function getapi(url) {
  fetch(url)
    .then((response) => {
      //   console.log("response", response);
      //   console.log("response.json();", response.json());
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((responseJson) => {
      show(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
}

getapi(api_url);

function show(data) {
  let tab = "";
  // Loop to access all rows
  for (let r of data.products) {
    tab += `
        <div id="mainDiv" style="border:1px solid black;">
        <div id="productImg">
            
            <img src = ${r.thumbnail} height='280px' width='320px'>
        </div>
        <div id="productDetails" style="padding-left:3%">
        Name : ${r.title} <br>
        Id : ${r.id} <br>
        Price : ${r.price} <br>
        Discount % : ${r.discountPercentage}<br>
        Stock : ${r.stock}
        </div>
           </div>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("product").innerHTML = tab;
}
