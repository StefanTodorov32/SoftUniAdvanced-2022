window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById("publish");
  let makeInput = document.getElementById("make");
  let modelInput = document.getElementById("model");
  let yearInput = document.getElementById("year");
  let fuelInput = document.getElementById("fuel");
  let originalCost = document.getElementById("original-cost");
  let sellingCost = document.getElementById("selling-price");
  let profitDiv = document.getElementById("profit");

  publishButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (Number(sellingCost.value) > Number(originalCost.value) && makeInput.value && modelInput.value && yearInput.value && fuelInput.value && originalCost.value && sellingCost.value) {
      let tableBody = document.getElementById("table-body");
      let tableRow = document.createElement("tr");
      tableRow.setAttribute("class", "row");
      let editButton = document.createElement("button");
      let sellButton = document.createElement("button");

      let tdMake = document.createElement("td");
      tdMake.textContent = makeInput.value;

      let tdModel = document.createElement("td");
      tdModel.textContent = modelInput.value;

      let tdYear = document.createElement("td");
      tdYear.textContent = yearInput.value;

      let tdFuel = document.createElement("td");
      tdFuel.textContent = fuelInput.value;

      let tdOriginalCost = document.createElement("td");
      tdOriginalCost.textContent = originalCost.value;

      let tdSellingCost = document.createElement("td");
      tdSellingCost.textContent = sellingCost.value;

      let tdButtons = document.createElement("td");

      tableRow.appendChild(tdMake);
      tableRow.appendChild(tdModel);
      tableRow.appendChild(tdYear);
      tableRow.appendChild(tdFuel);
      tableRow.appendChild(tdOriginalCost);
      tableRow.appendChild(tdSellingCost);

      editButton.setAttribute("class", "action-btn edit");
      editButton.textContent = "Edit";
      sellButton.setAttribute("class", "action-btn sell");
      sellButton.textContent = "Sell";
      tdButtons.appendChild(editButton);
      tdButtons.appendChild(sellButton);
      tableRow.appendChild(tdButtons);

      tableBody.appendChild(tableRow);
      makeInput.value = "";
      modelInput.value = "";
      yearInput.value = "";
      originalCost.value = "";
      sellingCost.value = "";

      editButton.addEventListener("click", (ev) => {
        let parentEl = ev.target.parentElement.parentElement;
        let secondMake = parentEl.querySelectorAll("td")[0].textContent;
        let secondModel = parentEl.querySelectorAll("td")[1].textContent;
        let secondYear = parentEl.querySelectorAll("td")[2].textContent;
        let secondFuel = parentEl.querySelectorAll("td")[3].textContent;
        let secondOriginalCost = parentEl.querySelectorAll("td")[4].textContent;
        let secondSellingCost = parentEl.querySelectorAll("td")[5].textContent;
        makeInput.value = secondMake;
        modelInput.value = secondModel;
        yearInput.value = secondYear;
        fuelInput.value = secondFuel;
        originalCost.value = secondOriginalCost;
        sellingCost.value = secondSellingCost;
        parentEl.remove();
      });

      sellButton.addEventListener("click", (ev) => {
        let parentEl = ev.target.parentElement.parentElement;
        let secondMake = parentEl.querySelectorAll("td")[0].textContent;
        let secondModel = parentEl.querySelectorAll("td")[1].textContent;
        let secondYear = parentEl.querySelectorAll("td")[2].textContent;
        let secondFuel = parentEl.querySelectorAll("td")[3].textContent;
        let secondOriginalCost = parentEl.querySelectorAll("td")[4].textContent;
        let secondSellingCost = parentEl.querySelectorAll("td")[5].textContent;
        let ul = document.getElementById("cars-list");
        let li = document.createElement("li");

        li.className = "each-list";

        let spanMake = document.createElement("SPAN");
        let makeModel = secondMake + " " + secondModel;
        spanMake.textContent = makeModel;

        let spanYear = document.createElement("SPAN");
        spanYear.textContent = secondYear;

        let spanPrice = document.createElement("SPAN");
        let diff = Number(secondSellingCost) - Number(secondOriginalCost);
        spanPrice.textContent = diff.toFixed(2);

        profitDiv.textContent = diff;
        parentEl.remove();
        li.appendChild(spanMake);
        li.appendChild(spanYear);
        li.appendChild(spanPrice);
        ul.appendChild(li);
      });
    }
  });
}
