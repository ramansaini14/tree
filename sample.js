$.ajax({
  url: "./data.json",
  type: "GET",
  success: function data(myData) {
    showData(myData);
  },
});

function showData(data) {
  for (let i = 1; i < data.length; i++) {
    let type = "";

    if (i == 1) {
      type = "desgin_one";
    }

    if (i == 2) {
      type = "desgin_three";
    }
    box(data, i, type);
  }
}

function box(data, level, type) {
  let title = data[level].title;
  let htmlBox = `<div>${title}</div>`;
}

$(document).on("click", ".seeMore", function () {
  let sel = $(this).find(".changeText");
  let selImg = $(this).find(".changeImage");
  let txt = sel.text();

  if (txt === "See more") {
    sel.text("See less");
    selImg.attr("src", "./assets/up.png");
    box(data, level, type);
  }
  if (txt === "See less") {
    sel.text("See more");
    selImg.attr("src", "./assets/down.png");
  }
});
