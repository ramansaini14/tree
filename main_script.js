$.ajax({
  url: "./data.json",
  type: "GET",
  success: function (data) {
    showData(data);
  },
});

function showData(data) {
  let mainBox = `<div class="inner1">
    <h3>${data[0].product}</h3>
    <img class="img" src="${data[0].image}" alt="" />
    </div>
  <div class="inner2">
    <p class="light">HTS Code</p>
    <p>${data[0].HTS_Code}</p>

    <p class="light">Purchase Orders</p>
    <p>${data[0].purchaseOrder}</p>

    <div class="twoItems">
      <div class="innerTI">
        <p class="light">Quantity</p>
        <p>${data[0].quantity}</p>
      </div>
      <div class="innerTI">
        <p class="light">Main Parts</p>
        <p>${data[0].MainParts}</p>
      </div>
    </div>
  </div>`;
  $(".containerElement").append(mainBox);

  let l1 = data.length;
  let l2 = data[0].childLevel1.child_l1Box1[0].child_l2Boxes.length;
  let l3 =
    data[0].childLevel1.child_l1Box1[0].child_l2Boxes[0].child_l3Boxes.length;
  // let l4 = data[0].details.children[0].child1Level[0].child2Level[0].child3Level[0].child4Level[0].child5Level[0].child6Level.length;

  boxDataRec(data, l1, "l1");
  boxDataRec(data, l2, "l2");
  boxDataRec(data, l3, "l3");
  // boxDataRec(data, l4, "l4");
  // console.log(l3);
}

function boxDataRec(data, iterator, type) {
  // Level 1
  if (type == "l1") {
    // console.log(iterator);
    for (let i = 0; i < iterator; i++) {
      let dataAccessor = data[0].childLevel1.child_l1Box1[i];
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
  //   Level 2 -- Pending Leaving Data of visual timeline 
  if (type == "l2") {
    for (let i = 0; i < iterator; i++) {
      let dataAccessor = data[0].childLevel1.child_l1Box1[0].child_l2Boxes[i];
      // console.log(dataAccessor);

      // Leaving Toggle Data on Scroll 
      // if(){

      // }
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
  //   Level 3 -- Still Pending Data Appends
  if (type == "l3") {
    for (let i = 0; i < iterator; i++) {
      let dataAccessor = data[0].childLevel1.child_l1Box1[0].child_l2Boxes[0].child_l3Boxes[i];
      // console.log(dataAccessor.title);
      if(dataAccessor.company1name){
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
                $(`.cb${[i]}`).append(
                  `<div class="subContainer">
                    <div class="lev${2*(i+1)-2}">${l3Box}</div>
                  </div>`
                );
              }
      else{
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
                            <p>${dataAccessor.value}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${dataAccessor.editLogo}" alt="">
                            <p>Add</p>
                        </div>
                    </div>
                    </div>
                </div>`;
                $('.subContainer').append(
                    `<div class="lev${2*i-1}">${l3Box}</div>`
                );
              }
    }
  }
}
