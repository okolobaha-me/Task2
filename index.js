// собирыем ссылки на ножные объекты в объект для удобства
const ref = {
  form: document.querySelector(".form"),
  firstName: document.querySelector("#first-name"),
  lastName: document.querySelector("#last-name"),
};

const handleFormSubmit = (e) => {
  //  убираем перезагрузку страницы
  e.preventDefault();

  // собираем данные формы в объект для потенциальнойй отправки на сервер
  const fieldValues = {
    firstName: ref.firstName.value,
    lastName: ref.lastName.value,
  };

  // имитируем отправку простым логом
  console.log(fieldValues);

  //очищаем поля формы
  e.currentTarget.reset();
};

ref.form.addEventListener("submit", handleFormSubmit);
