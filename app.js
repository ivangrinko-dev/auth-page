const btn = document.querySelector(`button`);
const inp1 = document.querySelector(`.inp-1`);
const inp2 = document.querySelector(`.inp-2`);
btn.addEventListener(`click`, function () {
  try {
    let a = inp1.value;
    let b = inp2.value;
    if (a === ``) throw new Error(`Введите адресс`);
    if (b === ``) throw new Error(`Введите пароль`);
    if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(a))
      alert(`Некорректный адресс почты или телефон`);
    if (!/^[A-Za-z0-9!@#$%^&*()_+-=]{8,100}$/gm.test(b))
      alert(`Некорректный пароль почты`);
    if (
      /^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(a) &&
      /^[A-Za-z0-9!@#$%^&*()_+-=]{8,100}$/gm.test(b)
    )
      alert(`Вы успешно зарегистрированы`);
  } catch (error) {
    alert(error.message);
  }
});


