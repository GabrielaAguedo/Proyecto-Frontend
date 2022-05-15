const $btnSignIn= document.querySelector('.sing-in-btn'),
      $btnSignUp = document.querySelector('.sing-up-btn'),  
      $signUp = document.querySelector('.crearcuenta'),
      $signIn  = document.querySelector('.login');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});