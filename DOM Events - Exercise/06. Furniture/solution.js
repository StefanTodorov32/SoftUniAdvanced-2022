function solve() {

  let totalPrice = 0;
  let boughtFurniture = [];
  let decFactors = [];

  document.querySelector('button').addEventListener('click', onGenerate);
  document.querySelector('button:nth-of-type(2)').addEventListener('click', onBuy);

  function onGenerate() {
    let inputArea = document.querySelector('textarea');
    let JSONInput = inputArea.value;
    let input = JSON.parse(JSONInput); 

    for (const furniture of input) {
      let newRowElement = document.createElement('tr');

      let tdImage = document.createElement('td');
      let imgTag = document.createElement('img');
      imgTag.src = furniture.img;
      tdImage.appendChild(imgTag);

      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      tdName.appendChild(pName);
      pName.textContent = furniture.name;

      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      tdPrice.appendChild(pPrice);
      pPrice.textContent = furniture.price;

      let tdDecFactor = document.createElement('td');
      let pDecFactor = document.createElement('p');
      tdDecFactor.appendChild(pDecFactor);
      pDecFactor.textContent = furniture.decFactor;

      let tdMark = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tdMark.appendChild(checkbox);

      newRowElement.appendChild(tdImage);
      newRowElement.appendChild(tdName);
      newRowElement.appendChild(tdPrice);
      newRowElement.appendChild(tdDecFactor);
      newRowElement.appendChild(tdMark);

      document.querySelector('tbody').appendChild(newRowElement);
    }
  }

  function onBuy() {
    let resultArea = document.querySelector('textarea:nth-of-type(2)');

    let allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    for (const checkbox of allCheckboxes) {
      if (checkbox.checked) {
        let itemName = checkbox.parentElement.parentElement.querySelector('td p').textContent;
        let itemPrice = Number(checkbox.parentElement.parentElement.querySelector('td:nth-of-type(3) p').textContent);
        let itemDecFactor = Number(checkbox.parentElement.parentElement.querySelector('td:nth-of-type(4) p').textContent);


        boughtFurniture.push(itemName);
        totalPrice += itemPrice;
        decFactors.push(itemDecFactor);
      }
    }

    let avgDecFactor = 0;
    if (decFactors.length == 1) {
      avgDecFactor = decFactors[0];
    } else if (decFactors.length == 0) {
      avgDecFactor = 0;
    } else {
      avgDecFactor = decFactors.reduce((a, b) => a + b, 0) / decFactors.length;
    }

    resultArea.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    resultArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultArea.value += `Average decoration factor: ${avgDecFactor}`;
  }

}