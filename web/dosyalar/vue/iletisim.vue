<template>
    <div class="iletisim">
      <img src="../fotograflar/arkaplan/iletisim.jpeg" alt="İletişim">
      <form @submit.prevent="submitForm">
        <div class="formGroup">
          <input type="text" v-model="kullaniciAdi" class="sadece-harf">
          <span>Adınız *</span>
        </div>
        
        <div class="formGroup">
          <input type="text" v-model="kullaniciSoyadi" class="sadece-harf">
          <span>Soyadınız *</span>
        </div>
  
        <div class="formGroup">
          <input type="text" v-model="kullaniciDogumTarihi" class="sadece-sayi">
          <span>Doğum Tarihiniz *</span>
        </div>
  
        <div class="formGroup">
          <select v-model="kullaniciMemleket" id="memleket">
            <option value="">Memleketiniz *</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Sakarya">Sakarya</option>
            <option value="İzmir">İzmir</option>
            <option value="Antalya">Antalya</option>
          </select>
        </div>
  
        <div class="formGroup">
          <div class="radioGroup">
            <label for="cinsiyet">Cinsiyetiniz :</label>
            <input type="radio" id="erkek" v-model="kullaniciCinsiyet" value="Erkek">
            <label for="Erkek">Erkek</label>
          </div>
          <div class="radioGroup">
            <input type="radio" id="kadin" v-model="kullaniciCinsiyet" value="Kadın">
            <label for="Kadın">Kadın</label>
          </div>
        </div>
  
        <div class="formGroup">
          <input type="text" v-model="kullaniciMail" class="email">
          <span>E-mail Adresiniz *</span>
        </div>
  
        <div class="formGroup">
          <textarea v-model="kullaniciMesaj"></textarea>
          <span>Mesajınız *</span>
        </div>
  
        <div class="btnGroup">
          <button type="button" @click="clearForm">Temizle</button>
          <!-- 'vuebutton' id'sine sahip butona @click dinleyici ekleniyor -->
          <button type="button" id="vuebutton" @click="submitForm">Gönder</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        kullaniciAdi: '',
        kullaniciSoyadi: '',
        kullaniciDogumTarihi: '',
        kullaniciMemleket: '',
        kullaniciCinsiyet: '',
        kullaniciMail: '',
        kullaniciMesaj: ''
      };
    },
    methods: {
      submitForm() {
        const formData = {
          kullaniciAdi: this.kullaniciAdi.trim(),
          kullaniciSoyadi: this.kullaniciSoyadi.trim(),
          kullaniciDogumTarihi: this.kullaniciDogumTarihi.trim(),
          kullaniciMemleket: this.kullaniciMemleket.trim(),
          kullaniciCinsiyet: this.kullaniciCinsiyet.trim(),
          kullaniciMail: this.kullaniciMail.trim(),
          kullaniciMesaj: this.kullaniciMesaj.trim()
        };
      },
      clearForm() {
        this.kullaniciAdi = '';
        this.kullaniciSoyadi = '';
        this.kullaniciDogumTarihi = '';
        this.kullaniciMemleket = '';
        this.kullaniciCinsiyet = '';
        this.kullaniciMail = '';
        this.kullaniciMesaj = '';
      }
    }
  };
  </script>
  
  <style>
  .iletisim {
     position: relative;
  }
  
  .iletisim img {
     width: 100%;
     height: calc(100vh - 50px);
     object-fit: cover;
  }
  
  .iletisim form {
     position: absolute;
     width: 30%;
     left: calc((100% - 450px) / 2);
     top: 50px; 
     background-color: rgba(0, 0, 0, 0.7);
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.5), 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
  
  .iletisim form .formGroup .radioGroup {
     display: inline-block;
     margin-right: 80px;
  }
  
  .iletisim form .formGroup input[type="radio"] {
     width: 20px;
     height: 20px;
     margin-right: 5px;
  }
  
  .iletisim form .formGroup label{
     color: aliceblue;
  }
  .iletisim form .formGroup {
     margin-bottom: 20px;
     position: relative;
  }
  
  .iletisim form .formGroup input{
     width: 100%;
     height: 40px;
     background: rgba(255, 255, 255, 0.3); 
     border: none;
     outline: none;
     border-radius: 10px;
     color: white;
     padding: 0px 0px 0px 10px;
  }
  
  .iletisim form .formGroup select{
     width: 100%;
     height: 40px;
     background: rgba(255, 255, 255, 0.3); 
     border: none;
     outline: none;
     border-radius: 10px;
     color: black;
     padding: 0px 0px 0px 10px;
  }
  
  .iletisim form .formGroup textarea {
     width: 100%;
     height: 150px;
     background: rgba(255, 255, 255, 0.3);
     border: none;
     outline: none;
     border-radius: 10px;
     color: white;
     padding: 0px 0px 0px 10px;
  }
  .iletisim form .formGroup span {
     position: absolute;
     left: 10px;
     top: 10px;
     color: white;
     font-family: 'Josefin Sans', sans-serif;
     padding: 4px 7px;
     transition: all 0.3s;
     border-radius: 3px;
  }
  
  .iletisim form .formGroup input:focus~span,
  .iletisim form .formGroup input:valid~span,
  .iletisim form .formGroup textarea:focus+span,
  .iletisim form .formGroup textarea:valid+span {
     top: -10px;
     left: 20px;
     font-size: 0.8rem;
     background-color: rgba(0, 0, 0, 0.5);
  }
  
  
  .iletisim form .btnGroup {
     width: 100%;
     height: auto;
     display: flex;
     justify-content: space-between;
  }
  
  .iletisim form .btnGroup a {
     color: white;
     font-family: 'Josefin Sans', sans-serif;
     transition: all 0.3s;
     border-bottom: 1px solid transparent;
     align-self: flex-end;
     padding-bottom: 3px;
  }
  
  .iletisim form .btnGroup a:hover {
     border-color: white;
  }
  
  .iletisim form .btnGroup button {
     font-size: 1rem;
     color: white;
     outline: none;
     cursor: pointer;
     padding: 5px 10px;
     background-color: rgba(113, 113, 113, 0.6);
     border-radius: 5px;
     border: none;
  }
  
  </style>
  