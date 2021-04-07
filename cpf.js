function checkPassword(str) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  console.log(re.test(str));
  return re.test(str);
}

checkPassword("Matheus1!");
