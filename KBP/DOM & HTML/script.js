const header1 = document.getElementById("h1");
const p = document.getElementsByTagName("p");

// memberikan warna untuk background header1
header1.style.backgroundColor = "Purple";

// mengubah arna tulisan paragraf indeks 0
p[0].style.color = "yellow";

// memberikan wrana pada div
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
container1.style.backgroundColor = "pink";
container2.style.backgroundColor = "blue";

//mengubah link menjadi www.google.com
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.google.com');

const list = document.querySelectorAll("li");
// perulangan untuk mengubah fonts dari list
list.forEach((list) =>{
    list.style.fontFamily = "Algerian";
    list.style.backgroundColor = "orange";
});

// mengatur ukuran dari paragraf (p1)
for(const parag of p ){
    parag.style.fontSize = '20px';
};

// mmegubah isi list menjadi list baru
for(i = 0; i <= list.length; i++){
    list[i].textContent = `List baru ${1}`;
}; 

