document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const kullaniciAdiInput = document.querySelector('input[name="kullaniciAdi"]');
        const kullaniciSoyadiInput = document.querySelector('input[name="kullaniciSoyadi"]');
        const kullaniciDogumTarihiInput = document.querySelector('input[name="kullaniciDogumTarihi"]');
        const kullaniciMemleketInput = document.querySelector('select[name="memleket"]');
        const kullaniciCinsiyetInput = document.querySelector('input[name="cinsiyet"]:checked');
        const kullaniciEMailInput = document.querySelector('input[name="kullaniciMail"]');
        const kullaniciMesajInput = document.querySelector('textarea[name="kullaniciMesaj"]');
        
        const kullaniciAdi = kullaniciAdiInput.value.trim();
        const kullaniciSoyadi = kullaniciSoyadiInput.value.trim(); 
        const kullaniciDogumTarihi = kullaniciDogumTarihiInput.value.trim();
        const kullaniciMemleket = kullaniciMemleketInput.value.trim();
        const kullaniciCinsiyet = kullaniciCinsiyetInput ? kullaniciCinsiyetInput.value : ''; 
        const kullaniciMail = kullaniciEMailInput.value.trim();
        const kullaniciMesaj = kullaniciMesajInput.value.trim();
        
        if (kullaniciAdi === '' || kullaniciSoyadi === '' || kullaniciDogumTarihi === '' || kullaniciMemleket === '' || kullaniciCinsiyet === '' || kullaniciMail === '' || kullaniciMesaj === '') {
            alert('Lütfen boş alanları doldurun.');
            return;
        }

        if (!isValidDateFormat(kullaniciDogumTarihi)) {
            alert('Lütfen doğru bir doğum tarihi formatı girin (GG/AA/YYYY).');
            return;
        }

        if (!isValidEmail(kullaniciMail)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }

        form.submit();
    });

    document.querySelectorAll('.sadece-harf').forEach(element => {
        element.addEventListener('keydown', event => {
            const key = event.key;
            const isLetter = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/.test(key);
            if (!isLetter) {
                event.preventDefault();
            }
        });
    });
});

document.querySelectorAll('.sadece-sayi').forEach(element => {
    element.addEventListener('keydown', event => {
        const key = event.key;
        const isAllowedKey = /^[0-9\/]*$/.test(key) || key === 'Backspace';
        if (!isAllowedKey) {
            event.preventDefault();
        }
    });
});

document.querySelectorAll('.email').forEach(element => {
    element.addEventListener('keydown', event => {
        const key = event.key;
        const isAllowedKey = /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s@_.-]*$/.test(key);
        if (!isAllowedKey) {
            event.preventDefault();
        }
    });
});


function isValidDateFormat(date) {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test(date);
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearForm() {
    const form = document.querySelector('form');
    form.reset();
}
