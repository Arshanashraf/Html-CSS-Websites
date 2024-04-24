const trendingNav = document.querySelectorAll(".trending-nav a");
const filterItems = document.querySelectorAll(".filter-items .item");

// console.log(trendingNav, filterItems);

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  //  console.log(e.target);

    filterItems.forEach(item =>{
        item.classList.add("hide");
    })
}

trendingNav.forEach(a => a.addEventListener("click", filterCards));