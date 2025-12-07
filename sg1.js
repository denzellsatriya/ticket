console.log("---Tiket Masuk Zoo--")
let pengunjung=[{nama:"Judy", umur : 4},{nama : "Joko", umur : 35}, {nama : "Sela", umur : 65}, {nama : "zell", umur : 10}];

//menentukan harga tiket normal
let hargaTiket=50000;

//looping
for(let i=0; i<pengunjung.length; i++){
    let namaPengunjung=pengunjung[i].nama;
    let umur=pengunjung[i].umur;
    let pesan="";

    //percabangan
    if(umur < 5){
        pesan="Free! untuk balita"; //free balita
    } else if(umur <= 12){
        pesan="Diskon 50% harga tiket : "+(hargaTiket/2); //anak2 diskon 50%
    }else if(umur >= 60){
        pesan="Diskon 30% harga tiket : "+(hargaTiket*0.7); //lansia diskon 30%
    }else {
        pesan="Harga normal: "+hargaTiket; //dewasa bayar normal
    }

    //menampilkan 
    console.log("Nama pengunjung : ", namaPengunjung);
    console.log("Umur pengunjung : ", umur +" tahun");
    console.log("Keterangan : ",pesan+ "\n");
}

