const categoriesNumber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesNumber.length}`);
const categories = document.querySelectorAll("li.item> h2");
const itemLists = document.querySelectorAll("li.item> ul");

for (let i = 0; i < categories.length; i += 1) {
  let categoriesName = categories[i];
  console.log(`Category: ${categoriesName.textContent}`);
  let itemList = itemLists[i];
  let newClass = "list" + i;
  itemList.classList.add(newClass);
  let elNumber = document.querySelectorAll(`ul.${newClass} > li`);
  console.log(`Elements: ${elNumber.length}`);
  itemList.classList.remove(newClass);
}
