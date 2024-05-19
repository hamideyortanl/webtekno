<?php
$kullaniciAdi = $_POST['kullaniciAdi'];
$sifre = $_POST['sifre'];

if ($kullaniciAdi === 'b231210384@sakarya.edu.tr' && $sifre === 'b231210384') {
   echo "Hoşgeldiniz \"$sifre\"";
} else {
   header("Location: ../../sayfalar/giris.html"); // Kullanıcıyı giriş sayfasına yönlendir
   exit;
}
?>
