function solve() {
  let hireWorker = document.getElementById("add-worker");

  let boxFirstName = document.getElementById("fname");
  let boxLastName = document.getElementById("lname");
  let boxEmail = document.getElementById("email");
  let boxBirth = document.getElementById("birth");
  let boxPosition = document.getElementById("position");
  let boxSalary = document.getElementById("salary");

  let tableContent = document.getElementById("tbody");

  let sumSalary = document.getElementById("sum");

  let sum = 0;

  hireWorker.addEventListener("click", (ev) => {
    ev.preventDefault();
    let firstName = boxFirstName.value;
    let secondName = boxLastName.value;
    let email = boxEmail.value;
    let birth = boxBirth.value;
    let position = boxPosition.value;
    let salary = boxSalary.value;
    if (
      firstName !== "" &&
      secondName !== "" &&
      email !== "" &&
      birth !== "" &&
      position !== "" &&
      salary !== ""
    ) {
      let newTr = document.createElement("tr");
      newTr.innerHTML = `
            <td>${firstName}</td>
            <td>${secondName}</td>
            <td>${email}</td>
            <td>${birth}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>
            `;
      tableContent.appendChild(newTr);

      clearInput();

      sum += Number(salary);

      sumSalary.textContent = sum.toFixed(2).toString();

      let currElement = tableContent.lastElementChild;
      let editBtn = currElement.getElementsByTagName("button")[1];
      let firedBtn = currElement.getElementsByTagName("button")[0];
      editBtn.addEventListener("click", onEdit);
      firedBtn.addEventListener("click", onFired);
    }
  });

  function clearInput() {
    boxFirstName.value = "";
    boxBirth.value = "";
    boxEmail.value = "";
    boxLastName.value = "";
    boxPosition.value = "";
    boxSalary.value = "";
  }

  function onEdit(ev) {
    let newTr = ev.target.parentElement.parentElement;
    let firstName = newTr.getElementsByTagName("td")[0].textContent;
    let secondName = newTr.getElementsByTagName("td")[1].textContent;
    let email = newTr.getElementsByTagName("td")[2].textContent;
    let birth = newTr.getElementsByTagName("td")[3].textContent;
    let position = newTr.getElementsByTagName("td")[4].textContent;
    let salary = newTr.getElementsByTagName("td")[5].textContent;

    boxFirstName.value = firstName;
    boxBirth.value = birth;
    boxEmail.value = email;
    boxLastName.value = secondName;
    boxPosition.value = position;
    boxSalary.value = salary;

    sum -= Number(salary);
    sumSalary.textContent = sum.toFixed(2).toString();

    tableContent.removeChild(newTr);
  }
  function onFired(ev) {
    let newTr = ev.target.parentElement.parentElement;
    let salary = newTr.getElementsByTagName("td")[5].textContent;
    sum -= Number(salary);
    sumSalary.textContent = sum.toFixed(2).toString();
    tableContent.removeChild(newTr);
  }
}
solve();
