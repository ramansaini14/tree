$.ajax({
  url: "./data.json",
  type: "GET",
  success: function (data) {
    // console.log(myData);
    showData(data);
    // box(myData, 0);
  },
});

function showData(data) {
  let mainBox = `<div class="inner1">
    <h3>${data[0].product}</h3>
    <img class="img" src="${data[0].details.image}" alt="" />
    </div>
  <div class="inner2">
    <p class="light">HTS Code</p>
    <p>${data[0].details.HTS_Code}</p>

    <p class="light">Purchase Orders</p>
    <p>${data[0].details.purchaseOrder}</p>

    <div class="twoItems">
      <div class="innerTI">
        <p class="light">Quantity</p>
        <p>${data[0].details.quantity}</p>
      </div>
      <div class="innerTI">
        <p class="light">Main Parts</p>
        <p>${data[0].details.MainParts}</p>
      </div>
    </div>
  </div>`;
  $(".containerElement").append(mainBox);

  let type = "";
  let l1 = data[0].details.children[0].child1Level.length;
  let l2 = data[0].details.children[0].child1Level[0].child2Level.length;
  let l3 = data[0].details.children[0].child1Level[0].child2Level[0].child3Level.length;
  let l4 = data[0].details.children[0].child1Level[0].child2Level[0].child3Level[0].child4Level[0].child5Level[0].child6Level.length;
  //   let l3 = data[0].details.children[0].child1Level[0].child2Level[0].length;
  //   console.log(max_children.length);
  //   for (let i = 0; i < max_children.length; i++) {
  // if (i == 0) {
  //   type = "l1";
  //   break;
  // } else if (i == 1) {
  //   type = "l2";

  //   break;
  // } else if (i == 2) {
  //   type = "l3";
  // } else if (i == 3) {
  //   type = "l4";
  // } else {
  //   type = "l5";
  // }
  // console.log(l2);
  boxDataRec(data, l1, "l1");
  boxDataRec(data, l2, "l2");
  boxDataRec(data, l3, "l3");
  boxDataRec(data, l4, "l4");
  // console.log(l4);
  //   }
}

function boxDataRec(data, iterator, type) {
  // Level 1
  if (type == "l1") {
    // console.log(iterator);
    for (let i = 0; i < iterator; i++) {
      //  console.log(data[0].details.children[i].child1Level[i].title);
      let dataAccessor = data[0].details.children[i].child1Level[i];

      let l1Box = `<div class="subBox" style="display: inline-block;">
                <div class="bluebox">
                    <h3>${dataAccessor.title}</h3>
                    <div class="bundle">
                        <img class="icon" src="${dataAccessor.shieldImage}" alt="">
                        <p>${dataAccessor.shieldValue}</p>
                    </div>
                </div>
                <div class="whiteBox">
                    <div class="flex">
                        <div class="left">
                            <img src="${dataAccessor.flagImage}" alt="">
                            <p>${dataAccessor.company1name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="left">
                            <img src="${dataAccessor.flagImage}" alt="">
                            <p>${dataAccessor.company2name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                    </div>
                </div>`;
      $(".child").append(l1Box);
    }
  }
  //   Level 2
  if (type == "l2") {
    for (let i = 0; i < iterator; i++) {
      let dataAccessor =
        data[0].details.children[0].child1Level[0].child2Level[i];
      // console.log(dataAccessor);
      let l2Box = `<div class="subBox" style="display: inline-block;">
    <div class="bluebox">
        <h3>${dataAccessor.title}</h3>
        <div class="bundle">
            <img class="icon" src="${dataAccessor.shieldImage}" alt="">
            <p>${dataAccessor.shieldValue}</p>
        </div>
    </div>
    <div class="whiteBox">
        <div class="flex">
            <div class="left">
                <img src="${dataAccessor.flagImage}" alt="">
                <p>${dataAccessor.company1name}</p>
            </div>
            <div class="right">
                <img class="icon" src="${dataAccessor.editLogo}" alt="">
                <p>Edit</p>
            </div>
        </div>

        <div class="flex">
            <div class="left">
                <img src="${dataAccessor.flagImage}" alt="">
                <p>${dataAccessor.company2name}</p>
            </div>
            <div class="right">
                <img class="icon" src="${dataAccessor.editLogo}" alt="">
                <p>Edit</p>
            </div>
        </div>
            </div>
                <div class="seeMore">
                    <p class="changeText">See less</p>
                    <img class="changeImage" src="${dataAccessor.seeMoreLogo}" alt="">
                </div>
            </div>`;
      $(".subChildren").append(`<div class="cb${i}">${l2Box}</div>`);
    }
  }
  //   Level 3
  if (type == "l3") {
    // console.log(iterator);
    for (let i = 0; i <= iterator; i++) {
      //  console.log(data[0].details.children[i].child1Level[i].title);
      let dataAccessor =
        data[0].details.children[0].child1Level[0].child2Level[0].child3Level[0]
          .child4Level[i];
      //   console.log(dataAccessor.title);
      if (dataAccessor.company1name) {
        let l3Box = `<div class="subBox" style="display: inline-block;">
                <div class="bluebox">
                    <h3>${dataAccessor.title}</h3>
                    <div class="bundle">
                        <img class="icon" src="${dataAccessor.shieldImage}" alt="">
                        <p>${dataAccessor.shieldValue}</p>
                    </div>
                </div>
                <div class="whiteBox">
                    <div class="flex">
                        <div class="left">
                            <img src="${dataAccessor.flagImage}" alt="">
                            <p>${dataAccessor.company1name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="left">
                            <img src="${dataAccessor.flagImage}" alt="">
                            <p>${dataAccessor.company2name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                    </div>
                </div>`;
        $(`.cb${i}`).append(`<div class="subContainer">
                    <div class="lev${i}">${l3Box}</div>
                </div>
            `);
      } else {
        let l3Box = `<div class="subBox" style="display: inline-block;">
                <div class="bluebox">
                    <h3>${dataAccessor.title}</h3>
                    <div class="bundle">
                        <img class="icon" src="${dataAccessor.shieldImage}" alt="">
                        <p>${dataAccessor.shieldValue}</p>
                    </div>
                </div>
                <div class="whiteBox">
                    <div class="flex">
                        <div>${dataAccessor.value}</div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Add</p>
                        </div>
                    </div>
                    </div>
                </div>`;
        $(`.cb${i}`).append(`<div class="subContainer">
                    <div class="lev${i}">${l3Box}</div>
                </div>
            `);
      }
    }
  }
  if (type == "l4") {
    for (let i = 0; i <= iterator; i++) {
      //  console.log(data[0].details.children[i].child1Level[i].title);
      let dataAccessor = data[0].details.children[0].child1Level[0].child2Level[0].child3Level[0].child4Level[0].child5Level[0].child6Level[i];
      // console.log(dataAccessor);
      
    }
  }
}
