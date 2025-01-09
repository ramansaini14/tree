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
  $('.containerElement').after(`<div class="smBox">
      <img class="text-file-img" src="./assets/file-text.png" alt="">
      <p>View ${data[0].childLevel1.documentsCount} documents</p>
      </div> `);

  // Get API's from JSON 
  let l1 = data.length;
  let l2 = data[0].childLevel1.child_l1Box1[0].child_l2Boxes.length;
  let l3 = data[0].childLevel1.child_l1Box1[0].child_l2Boxes[0].child_l3Boxes.length;

  boxDataRec(data, l1, "l1");
  boxDataRec(data, l2, "l2");
  boxDataRec(data, l3, "l3");
  // console.log(l3);
  clicks(data);

}
function clicks(data){
  // Main Container Click 
  $(".containerElement").on("click", () => {
    $('.subBox').slideToggle();
    $('.smBox').slideToggle();
  });

  // ChildL1 Click
  // $('.child').on("click", function(){
  //   let data_parent_main_id = $(this).attr("data_parent_main_id");
  //   console.log(data_parent_main_id);
  //   $(`.cb`).after().find("[data_id='1']").slideToggle();
  // })

  $('.child').on("click", function () {
    $('.subChildren').slideToggle();
    $('.child > .smBox').slideToggle();

});
$(document).on("click", ".seeMore", function () {
  let sel = $(this).find('.changeText');
  let selImg = $(this).find('.changeImage');
  let txt = sel.text();

  if (txt === "See more") {
      sel.text("See less");
      selImg.attr("src", './assets/up.png');
      let dataAccessor = data[0].childLevel1.child_l1Box1[0].child_l2Boxes;
      for (let i = 0; i < dataAccessor.length; i++) {
      $(`.d${i}`).slideToggle();
    }
    
  }
  if (txt === "See less") {
    sel.text("See more");
    selImg.attr("src", './assets/down.png');
    let dataAccessor = data[0].childLevel1.child_l1Box1[0].child_l2Boxes;
    for (let i = 0; i < dataAccessor.length; i++) {
      $(`.d${i}`).slideToggle();
      }
  }
})
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
      if(!dataAccessor.ManufacturersCount){
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
      $(".subChildren").append(`<div class="cb${i}" id="${i+1}" data_sub_id="1">${l2Box}</div>`);
      $(`.cb${i}`).before(`
        <div class="smBox">
        <img class="text-file-img" src="./assets/file-text.png" alt="">
        <p>View ${data[0].childLevel1.documentsCount} documents</p>
        </div>
        `);
    }
    else{
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
                <p>Copper Coil</p>
            </div>
            <div class="right">
                <img class="icon" src="${dataAccessor.editLogo}" alt="">
                <p>Edit</p>
            </div>
        </div>

        <div class="flex">
            <div class="left">
                <div class="manufacturers">
                <h6>${dataAccessor.ManufacturersCount} parts manufacturers</h6>
                <p>${dataAccessor.proofPointsM} proofpoints</p>
                <p>${dataAccessor.documentsM} </p>
                </div>

                <div class="processors">
                <h6>${dataAccessor.processorsCount} materials processors</h6>
                <p>${dataAccessor.proofPointsP} proofpoints</p>
                <p>${dataAccessor.documentsP} </p>
                </div>
                <h6>${dataAccessor.rawMaterials} raw materials</h6>
                
            </div>
            <div class="right">
                <p>${dataAccessor.documentsForproofPrintM}</p>
                <p>${dataAccessor.documentsForproofPrintP} </p>
                <p>${dataAccessor.documentsForproofPrintR}</p>
            </div>
        </div>
            </div>
                <div class="seeMore">
                    <p class="changeText">See less</p>
                    <img class="changeImage" src="${dataAccessor.seeMoreLogo}" alt="">
                </div>
            </div>`;
      $(".subChildren").append(`<div class="cb${i}" id="${i+1}" data_sub_id="1">${l2Box}</div>`);
      $(`.cb${i}`).before(`
        <div class="smBox">
        <img class="text-file-img" src="./assets/file-text.png" alt="">
        <p>View ${data[0].childLevel1.documentsCount} documents</p>
        </div>
        `);
    }
  }
  }
  
    // Level 3 -- Still Pending Data Appends
    if (type === "l3") {
      const l2Boxes = data[0].childLevel1.child_l1Box1[0].child_l2Boxes;
      for (let i = 0; i < l2Boxes.length; i++) {
          $(`.cb${i}`).append(`<div class="d${i}"></div>`);
          
          const l3Boxes = l2Boxes[i].child_l3Boxes;
          // console.log(l2Boxes.length);
          if(l3Boxes){
          for (let j = 0; j < l3Boxes.length; j++) {
              const dataAccessor = l3Boxes[j];
              
              let l3Box = `<div class="subBox" style="display: inline-block;">
                  <div class="bluebox">
                      <h3>${dataAccessor.title}</h3>
                      <div class="bundle">
                          <img class="icon" src="${dataAccessor.shieldImage}" alt="">
                          <p>${dataAccessor.shieldValue}</p>
                      </div>
                  </div>`;
  
              if (dataAccessor.company1name) {
                  l3Box += `<div class="whiteBox">
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
                  </div>`;
              } else {
                  l3Box += `<div class="whiteBox">
                      <div class="flex">
                          <div class="left">
                              <p>${dataAccessor.value || "No information provided"}</p>
                          </div>
                          <div class="right">
                              <img class="icon" src="${dataAccessor.editLogo}" alt="">
                              <p>Add</p>
                          </div>
                      </div>
                  </div>`;
              }
              l3Box += `</div>`; 
              
              $(`.d${i}`).append(`
                <div class="smBox">
                <img class="text-file-img" src="./assets/file-text.png" alt="">
                <p>View ${data[0].childLevel1.documentsCount} documents</p>
                </div>
                `);
              $(`.d${i}`).append(`
                <div class="subContainer${j}">
                <div class="lev${j}">${l3Box}</div>
                </div>`
              );

              // fourth level (l4Boxes)
              if (Array.isArray(dataAccessor.child_l4Boxes)) {
                  const l4Boxes = dataAccessor.child_l4Boxes;
                  for (let k = 0; k < l4Boxes.length; k++) {
                      const l4Box = l4Boxes[k];
                      let l4Content = `<div class="subBox" style="display: inline-block;">
                          <div class="bluebox">
                              <h4>${l4Box.title}</h4>
                              <div class="bundle">
                                  <img class="icon" src="${l4Box.shieldImage}" alt="">
                                  <p>${l4Box.shieldValue}</p>
                              </div>
                          </div>`;
  
                      if (l4Box.company1name) {
                          l4Content += `<div class="whiteBox">
                              <div class="flex">
                                  <div class="left">
                                      <img src="${l4Box.flagImage}" alt="">
                                      <p>${l4Box.company1name}</p>
                                  </div>
                                  <div class="right">
                                      <img class="icon" src="${l4Box.editLogo}" alt="">
                                      <p>Edit</p>
                                  </div>
                              </div>
                              <div class="flex">
                                  <div class="left">
                                      <img src="${l4Box.flagImage}" alt="">
                                      <p>${l4Box.company2name}</p>
                                  </div>
                                  <div class="right">
                                      <img class="icon" src="${l4Box.editLogo}" alt="">
                                      <p>Edit</p>
                                  </div>
                              </div>
                          </div>`;
                      } else {
                          l4Content += `<div class="whiteBox">
                              <div class="flex">
                                  <div class="left">
                                      <p>${l4Box.value || "No information provided"}</p>
                                  </div>
                                  <div class="right">
                                      <img class="icon" src="${l4Box.editLogo}" alt="">
                                      <p>Add</p>
                                  </div>
                              </div>
                          </div>`;
                      }
                      l4Content += `</div>`; 
  
                      // Append the l4 content to the corresponding l3Box
                      $(`.subContainer${j}`).append(`
                          <div class="subCont${j}">
                          
                        
                        <div class="smBox">
                        <img class="text-file-img" src="./assets/file-text.png" alt="">
                        <p>View ${data[0].childLevel1.documentsCount} documents</p>
                        </div>

                              <div class="lev${j}">${l4Content}</div>
                          </div>`
                      );

                      //Work on last level here
                      
                      // const l5Boxes = dataAccessor.child_l4Boxes[0].child_l5Boxes;
                      // console.log(Array.isArray(l5Boxes));
                      // if(Array.isArray(dataAccessor.child_l4Boxes)){

                      // }
              }

              }
          }
        }
      }
  }
  
}
