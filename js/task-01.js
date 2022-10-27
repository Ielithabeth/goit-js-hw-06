const categories = document.querySelectorAll("li.item");
console.log("Numbers of categories:", categories.length);

const getItems = categories.forEach(category => {
    const itemCaption = category.querySelector("h2");
    const item = category.querySelectorAll("li");
    console.log("Category:", itemCaption.textContent);
    console.log("Elements:", item.length);
});


