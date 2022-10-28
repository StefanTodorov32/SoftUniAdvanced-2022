window.addEventListener("load", solve);

function solve() {
  let inputs = {
    modelBox: document.getElementById("model"),
    yearBox: document.getElementById("year"),
    descriptionBox: document.getElementById("description"),
    priceBox: document.getElementById("price"),
  };
  let addBtn = document.getElementById("add");
  addBtn.addEventListener("click", onAdd);
  let furnitureList = document.getElementById("furniture-list");

  let totalPrice = document.querySelectorAll(".total-price")[0];
  let total = 0;

  function onAdd(event) {
    event.preventDefault();
    let model = inputs.modelBox.value
    let year = inputs.yearBox.value
    let description = inputs.descriptionBox.value
    let price = Number(inputs.priceBox.value);

    if (model == "" || description == "" || price == "" || year == "") {
      return;
    }
    let firstTr = document.createElement("tr");
    firstTr.setAttribute("class", "info");

    let firstTrHtml = `<td>${model}</td>
                           <td>${price.toFixed(2)}</td>
                           <td>
                           <button class = "moreBtn">More Info</button>
                           <button class = "buyBtn">Buy it</button>
                           </td>`;
    firstTr.innerHTML = firstTrHtml;

    let secondTr = document.createElement("tr");
    secondTr.setAttribute("class", "hide");

    let secondTrHtml = `<td>Year: ${year}</td>
                            <td colspan = "3"> Description: ${description}`;
    secondTr.innerHTML = secondTrHtml;

    furnitureList.appendChild(firstTr);
    furnitureList.appendChild(secondTr);

    inputs.modelBox.value = "";
    inputs.priceBox.value = "";
    inputs.yearBox.value = "";
    inputs.descriptionBox.value = "";

    furnitureList
      .querySelectorAll("button")[0]
      .addEventListener("click", onInfo);
    furnitureList
      .querySelectorAll("button")[1]
      .addEventListener("click", onBuy);

    function onInfo() {
      let btn = furnitureList
        .querySelectorAll("td")[2]
        .querySelectorAll("button")[0];
      if (btn.textContent === "More Info") {
        secondTr.style.display = "contents";
        btn.textContent = "Less Info";
      } else {
        secondTr.style.display = "none";
        btn.textContent = "More Info";
      }
    }
    function onBuy() {
      total = Number(totalPrice.textContent);

      total += Number(furnitureList.querySelectorAll("td")[1].textContent);

      totalPrice.textContent = Number(total).toFixed(2);
      firstTr.remove();
      secondTr.remove();
    }
  }
}
