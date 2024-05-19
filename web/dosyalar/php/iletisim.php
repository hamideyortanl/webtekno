<?php
$kullaniciAdi = $_POST['kullaniciAdi'];
$kullaniciSoyadi = $_POST['kullaniciSoyadi'];
$kullaniciDogumTarihi = $_POST['kullaniciDogumTarihi'];
$kullaniciMemleket = $_POST['memleket'];
$kullaniciCinsiyet = $_POST['cinsiyet'];
$kullaniciMail = $_POST['kullaniciMail'];
$kullaniciMesaj = $_POST['kullaniciMesaj'];

if ($kullaniciAdi !== '' && $kullaniciSoyadi !== '' && $kullaniciDogumTarihi !== '' && $kullaniciMemleket !== '' && $kullaniciCinsiyet !== '' && $kullaniciMail !== '' && $kullaniciMesaj !== '') {
   echo "Adı: $kullaniciAdi<br>";
   echo "Soyadı: $kullaniciSoyadi<br>";
   echo "Doğum Tarihi: $kullaniciDogumTarihi<br>";
   echo "Memleket: $kullaniciMemleket<br>";
   echo "Cinsiyet: $kullaniciCinsiyet<br>";
   echo "Maili: $kullaniciMail<br>";
   echo "Mesaj: $kullaniciMesaj<br>";
}
?>
