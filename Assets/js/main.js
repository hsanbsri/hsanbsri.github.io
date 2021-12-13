const scriptURL = 'https://script.google.com/macros/s/AKfycbyDumS91O2bits_7VHB6V9sgz3LOavc3cVWuba2DxeEwO7vkCqsmMcv8ioNWW_o4Snp/exec'
const form = document.forms['hsanbsri-contact-form']
const btnkirim = document.querySelector('.btn-kirim');
const btnloading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const textElement = ['Freelancer', 'Web Developer', 'Mobile Programmer']
const tetydonwload = ['Download My CV']

// aos
AOS.init();

/*********** Ngetik **************/
let count = 0;
let txtindex = 0;
let currenttxt = '';
let words ='';


(function ngetik(){

  if(count == textElement.length){
    count = 0;
  }

  currenttxt = textElement[count];

  words = currenttxt.slice(0, ++txtindex);
  document.querySelector('.ngetik').textContent = words;
  
  if(words.length == currenttxt.length){
    count++;
    txtindex = 0;
  }

  setTimeout(ngetik, 400);
})();

/*************** Form g-sheet ********************/
form.addEventListener('submit', e => {
  e.preventDefault()
  // ketika tombol submit di klik
  // tampilkan tombol kirim , hilangkan tombol loading
  btnloading.classList.toggle('d-none');
  btnkirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
      //tampilkan tombol kirim , hilangkan tombol loading
      
      btnloading.classList.toggle('d-none');
      btnkirim.classList.toggle('d-none');
      
      //tampilkan alert

      myAlert.classList.toggle('d-none');
      
      //reset form
      
      form.reset();
      console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
});