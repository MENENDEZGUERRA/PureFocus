(()=>{const t=document.querySelector("[data-lists]"),e=document.querySelector("[data-new-list-form]"),a=document.querySelector("[data-new-list-input]"),s="task.lists",l="task.selectedListId";let i=JSON.parse(localStorage.getItem(s))||[],n=localStorage.getItem(l);function o(){localStorage.setItem(s,JSON.stringify(i)),localStorage.setItem(l,n),d()}function d(){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(t),i.forEach((e=>{const a=document.createElement("li");a.dataset.listId=e.id,a.classList.add("list-name"),a.innerText=e.name,e.id===n&&a.classList.add("active-list"),t.appendChild(a)}))}t.addEventListener("click",(t=>{"li"===t.target.tagName.toLoweCase()&&(n=t.target.dataset.listId,o())})),e.addEventListener("submit",(t=>{t.preventDefault();const e=a.value;if(null==e||""===e)return;const s=(l=e,{id:Date.now().toString(),name:l,tasks:[]});var l;a.value=null,i.push(s),o()})),d()})();