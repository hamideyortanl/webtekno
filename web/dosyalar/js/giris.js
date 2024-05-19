document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const kullaniciAdiInput = document.querySelector('input[name="kullaniciAdi"]');
        const sifreInput = document.querySelector('input[name="sifre"]');
        const kullaniciAdi = kullaniciAdiInput.value.trim(); 

        if (kullaniciAdi === '' || sifreInput.value.trim() === '') {
            alert('Lütfen kullanıcı adı ve şifre alanlarını doldurun.');
            return;
        }

        if (!isValidEmail(kullaniciAdi)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }

        form.submit();
    });

    document.querySelectorAll('.mail').forEach(element => {
        element.addEventListener('keydown', event => {
            const key = event.key;
            const isAllowedKey = /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s@_.-]*$/.test(key);
            if (!isAllowedKey) {
                event.preventDefault();
            }
        });
    });
    
});



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

