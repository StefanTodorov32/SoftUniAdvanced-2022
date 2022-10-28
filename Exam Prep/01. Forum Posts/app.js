window.addEventListener("load", solve);

function solve() {
    let boxTitle = document.getElementById('post-title');
    let boxCategory = document.getElementById('post-category');
    let boxContent = document.getElementById('post-content');
    let review = document.getElementById('review-list');
    let publish = document.getElementById('publish-btn');
    let approved = document.getElementById('published-list');
    let btnClear = document.getElementById('clear-btn');
    
  publish.addEventListener('click', onPublish);

  function onPublish(e) {
      e.preventDefault();
      let title = boxTitle.value;
      let category = boxCategory.value;
      let content = boxContent.value;
      if(title !== '' && category !== '' && content !== '') {
          let newLi = document.createElement('li');
          newLi.classList.add('rpost');
          newLi.innerHTML = 
              `<article>
                  <h4>${title}</h4>
                  <p>Category: ${category}</p>
                  <p>Content: ${content}</p>
              </article>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn approve">Approve</button>`;
          review.appendChild(newLi);

          boxTitle.value = '';
          boxCategory.value = '';
          boxContent.value = '';
          let current = review.lastElementChild;
          let edit = current.getElementsByTagName('button')[0];
          let approve = current.getElementsByTagName('button')[1];
          edit.addEventListener('click', onEdit);
          approve.addEventListener('click', onApprove);
      }
  }

  
  function onEdit(e) {
      e.preventDefault();
      let li = e.target.parentElement;
      let title = li.getElementsByTagName('h4')[0].textContent;
      let category = li.getElementsByTagName('p')[0].textContent.split('Category: ')[1];
      let content = li.getElementsByTagName('p')[1].textContent.split('Content: ')[1];
      
      boxTitle.value = title;
      boxCategory.value = category;
      boxContent.value = content;
      review.removeChild(li);
  }


  function onApprove(e) {
      e.preventDefault();
      let li = e.target.parentElement;
      let title = li.getElementsByTagName('h4')[0].textContent;
      let category = li.getElementsByTagName('p')[0].textContent.split('Category: ')[1];
      let content = li.getElementsByTagName('p')[1].textContent.split('Content: ')[1];
      
      let newLi = document.createElement('li');
      newLi.classList.add('rpost');
      newLi.innerHTML = 
      `<article>
              <h4>${title}</h4>
              <p>Category: ${category}</p>
              <p>Content: ${content}</p>
       </article>`;
      approved.appendChild(newLi);
      review.removeChild(li);
  }

  btnClear.addEventListener('click', onClear);

  function onClear() {
      Array.from(approved.children).forEach(
          x => approved.removeChild(x)
      );
  }
}