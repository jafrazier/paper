function signUpPopUp() {
  document.getElementById('popup').classList.remove('hide');
};

function cancelSignUp() {
  document.getElementById('popup').classList.add('hide');
  alert('Maybe another time')
};

function signUp() {
  document.getElementById('popup').classList.add('hide');
  alert('Thank you for signing up!!!');
}
