// event mengubah warna teks dengan tombol
const button = document.getElementById('changeColor');
const text = document.getElementById('paraghraf')

let warna = false;
button.addEventListener('click', function(){
    if (warna) {
        text.style.color = '';
        warna = false;
    } else {
        text.style.color = 'blue';
        warna = true;
    }
})

// mengubah isi paragraf ketika mouse hover
const hoverText = document.getElementById('hoverText');
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', function(){
    hoverText.textContent = 'Mouse is over the button!';
})
hoverButton.addEventListener('mouseout', function(){
    hoverText.textContent = '';
})

// event key down

const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');

inputField.addEventListener('keydown', function(event){
    displayText.textContent = 'karakter terakhir yang ditekan '+ event.key;
})

// event add item
const addDaftar = document.getElementById('addDaftar');
const listItem = document.getElementById('listItem');
const tombolTambah = document.getElementById('tombolTambah');

tombolTambah.addEventListener('click',function() {
    const daftarItem = addDaftar.value.trim();

    if (daftarItem !== '') {
        const itemBaru = document.createElement('li');
        
        itemBaru.textContent= daftarItem;

        listItem.appendChild(itemBaru);

        addDaftar.value = "";
    } else {
        alert("Diisi ya")
    }
});