

// 1.Soru customer objesi oluşturalım. Ve objenin içerisindeki companyName ekranda gösterelim.
// (Id,CompanyName,ContactName,ContactTitle,Address)

let customer = [
    {
        "id": 1,
        "companyName": "Maho Holding",
        "contactName": "Mahmut Bet",
        "contactTitle": "Şirket Sahibi",
        "address": {
            "street": "120 Hanover Sq.",
            "city": "London",
            "region": "NULL",
            "postalCode": "WA1 1DP",
            "country": "UK",
            "phone": "(171) 555-7788"
        }
    },
    {
        "id": 2,
        "companyName": "Bilo Holding",
        "contactName": "Bilo bey",
        "contactTitle": "Tek yetkili adam",
        "address": {
            "street": "Berguvsvägen  8",
            "city": "Luleå",
            "region": "NULL",
            "postalCode": "S-958 22",
            "country": "Sweden",
            "phone": "0921-12 34 65"
        }
    },
    {
        "id": 3,
        "companyName": "Hasso Holding",
        "contactName": "Mahmut Bet",
        "contactTitle": "Şirket Sahibi",
        "address": {
            "street": "120 Hanover Sq.",
            "city": "London",
            "region": "NULL",
            "postalCode": "WA1 1DP",
            "country": "UK",
            "phone": "(171) 555-7788"
        }
    },
    {
        "id": 4,
        "companyName": "Sülo Holding",
        "contactName": "Bilo bey",
        "contactTitle": "Tek yetkili adam",
        "address": {
            "street": "Berguvsvägen  8",
            "city": "Luleå",
            "region": "NULL",
            "postalCode": "S-958 22",
            "country": "Sweden",
            "phone": "0921-12 34 65"
        }
    },
    {
        "id": 5,
        "companyName": "Cano Holding",
        "contactName": "Mahmut Bet",
        "contactTitle": "Şirket Sahibi",
        "address": {
            "street": "120 Hanover Sq.",
            "city": "London",
            "region": "NULL",
            "postalCode": "WA1 1DP",
            "country": "UK",
            "phone": "(171) 555-7788"
        }
    },
    {
        "id": 6,
        "companyName": "Haşo Holding",
        "contactName": "Bilo bey",
        "contactTitle": "Tek yetkili adam",
        "address": {
            "street": "Berguvsvägen  8",
            "city": "Luleå",
            "region": "NULL",
            "postalCode": "S-958 22",
            "country": "Sweden",
            "phone": "0921-12 34 65"
        }
    }
]


let filter = customer.filter(q =>q.companyName)
        filter.forEach(item => {
            var lielement = document.createElement("li")
            lielement.innerHTML = "CompanyName: " + item.companyName
            document.getElementById("companyNamelistesi").appendChild(lielement)
        })

// 2.Soru axios kütüphanesini kullanarak products dataları çekelim prdocut nameleri ekranda gösterelim.

    axios.get("https://northwind.vercel.app/api/products")
    .then(res =>{
        let producslist = res.data;
        producslist.forEach(item => {
            var lielement = document.createElement("li")
            lielement.innerHTML = "Product Name: " + item.name
            document.getElementById("productlistesi").appendChild(lielement)
    });
    })

   // 3.Soru Product formu oluşturalım formun alanları ProductName - Price -Stock olsun kullanıcıdan alanınan degerleri ekranda gösterelim.

function productpush(){
    var productname = document.getElementById("ProductNametext").value;
    var productprice = document.getElementById("Pricetext").value;
    var productstock = document.getElementById("Stocktext").value;
    var newproduct ={
        name : productname,
        price : productprice,
        stock : productstock
    };
    var lielement = document.createElement("li");
    lielement.innerHTML = "Product Name: " + newproduct.name + "<br>" + "Product Price:" + newproduct.price  + "<br>" + "Product Stock:" + newproduct.stock; 
    document.getElementById("productpushh").appendChild(lielement);
}

// 4.Soru select içerisine option olarak inputtan girilen degerler eklensin.

function cityAdd(){
    var cityname = document.getElementById("cityName").value;
    var optionelement = document.createElement("option");
    optionelement.innerHTML = cityname;    
    document.getElementById("sehir").appendChild(optionelement);
}

// 5.Soru İnputlardan girilen 5 sayıyı sayı dizisi olarak oluşturalım.[0] 35 , [1] 63 gibi her bir index bir sayı tutucak. Sayı dizisindeki her bir sayıyı ekrana yazdıralım ve sayılara border ve font size verelim indexsi 3 olan sayının rengi mavi olsun.

function sayis() {
    let sayilar = [];
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let numberThree = document.getElementById("numberThree").value;
    let numberFour = document.getElementById("numberFour").value;
    let numberFive = document.getElementById("numberFive").value;

    sayilar.push(numberOne);
    sayilar.push(numberTwo);
    sayilar.push(numberThree);
    sayilar.push(numberFour);
    sayilar.push(numberFive); 
  
    let output = document.getElementById("output");
    for (let i = 0; i < sayilar.length; i++) {
      let lielement = document.createElement("li");
  
      if (i === 3) {
        lielement.style.border = "2px solid black";
        lielement.style.fontSize = "24px";
        lielement.style.color = "blue";
      } else {
        lielement.style.border = "2px solid black";
        lielement.style.fontSize = "24px";
      }
  
      lielement.innerText = sayilar[i];
      output.appendChild(lielement);
    }
  }
  
//6.Soru isim- soyisim - yas bilgilerini formdan alıp oluşturulan tablonun içerisine ekletelim.

  function isimbilgisi(){
    var Name = document.getElementById("name").value;
    var LastName = document.getElementById("lastname").value;
    var Age = document.getElementById("age").value;
    const trelement = document.createElement("tr");
    trelement.innerHTML = "<tr><td><ul>" + Name + "</ul></td><td><ul> " + LastName + "</ul></td><td><ul> " + Age + "</ul></td></tr>";
    document.getElementById("list").appendChild(trelement);

  }


  //  7.Soru  Axios kütüphanesi kullanarak get- post - put - delete işlemlerini yapınız (orders üzerinden)

function orderget(){
    document.getElementById('orderdatelist').innerHTML = ""
    axios.get("https://northwind.vercel.app/api/orders")
    .then(res =>{
        let orderlist = res.data;
        orderlist.sort((a, b) => a.id - b.id).reverse();
        orderlist.forEach(item => {
            var lielement = document.createElement("li")
            var litwoelement = document.createElement("li")
            lielement.innerHTML = item.id + "  -  " + item.customerId 
            litwoelement.innerHTML = "id: "+ item.id +" Tarih: " + new Date(item.orderDate).getDate() + " / " + new Date(item.orderDate).getMonth() + " / " + new Date(item.orderDate).getFullYear();
            document.getElementById("ordergetlist").appendChild(lielement)
            document.getElementById("orderdatelist").appendChild(litwoelement)
            
    });
    })
}

function orderPost(){

    let orderdate = document.getElementById("orderdate").value;
    let newdate = {
        orderDate: orderdate
    }
    axios.post("https://northwind.vercel.app/api/orders", newdate)
    .then(res =>{
        alert("Success");
        console.log("başarılı")
        orderget()
     
    })
}


function orderput() {
    let orderId = document.getElementById("selectid").value;
    let orderDate = document.getElementById("putdate").value;

    axios.get("https://northwind.vercel.app/api/orders/")
      .then(res => {
        let orderlistdata = res.data;
        let filter = orderlistdata.find(q => q.id == orderId );
        filter.orderDate = orderDate;
        axios.put("https://northwind.vercel.app/api/orders/" + orderId, filter)
          .then(res => {
            alert("Success");
          })
          orderDateload()
      })
}
  
function orderdelete() {
    document.getElementById('orderdatelist').innerHTML = ""
    let orderId = document.getElementById("selectid").value;  
    axios.delete("https://northwind.vercel.app/api/orders/" + orderId)
      .then(res => {
        alert("Success");
      })
      orderget()
      orderDateload()
  }


  function orderDateload(){
    document.getElementById('orderdatelist').innerHTML = ""
    axios.get("https://northwind.vercel.app/api/orders")
    .then(res =>{
        let orderlist = res.data;
        orderlist.sort((a, b) => a.id - b.id).reverse();
        orderlist.forEach(item => {
            var lielement = document.createElement("li")
            litwoelement.innerHTML = "id: "+ item.id +" Tarih: " + new Date(item.orderDate).getDate() + " / " + new Date(item.orderDate).getMonth() + " / " + new Date(item.orderDate).getFullYear();
            document.getElementById("orderdatelist").appendChild(lielement)
            
    });
    })
  }