$.ajax(
    {
        url: "./data.json",
        type: 'GET',
        success: function (myData) {
            console.log(myData);
            mainContainer(myData);
            box(myData,0);

        }
    }
)

const mainContainer = (data) => {
    let md = data[0];
    let mainBox = `<div class="inner1">
          <h3>${md.product}</h3>
          <img class="img" src="${md.details.image}" alt="" />
        </div>
        <div class="inner2">
          <p class="light">HTS Code</p>
          <p>${md.details.HTS_Code}</p>

          <p class="light">Purchase Orders</p>
          <p>${md.details.purchaseOrder}</p>

          <div class="twoItems">
            <div class="innerTI">
              <p class="light">Quantity</p>
              <p>${md.details.quantity}</p>
            </div>
            <div class="innerTI">
              <p class="light">Main Parts</p>
              <p>${md.details.MainParts}</p>
            </div>
          </div>
        </div>`;
    $('.containerElement').append(mainBox);
    // $('.containerElement').after(`<div class="smBox">
    //                     <img class="text-file-img" src="./assets/file-text.png" alt="">
    //                     <p>View ${md.details.children[0].documentsCount} documents</p>
    //                 </div> `);
}

const box = (data, level) => {
    let md = data[0].details.children[level];
    let htmlBox = `<div class="subBox" style="display: inline-block;">
                <div class="bluebox">
                    <h3>${md.child1Level[level].title}</h3>
                    <div class="bundle">
                        <img class="icon" src="${md.child1Level[level].shieldImage}" alt="">
                        <p>${md.child1Level[level].shieldValue}</p>
                    </div>
                </div>
                <div class="whiteBox">
                    <div class="flex">
                        <div class="left">
                            <img src="${md.child1Level[level].flagImage}" alt="">
                            <p>${md.child1Level[level].company1name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${md.child1Level[level].editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="left">
                            <img src="${md.child1Level[level].flagImage}" alt="">
                            <p>${md.child1Level[level].company2name}</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="${md.child1Level[level].editLogo}" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>`;
    $('.child').append(htmlBox);

    // HTML BOX FOR LEVELS 
    // data[0].details.children[0];


    // for()
    let newWAPI = md.child1Level[0].child2Level;
    for (let i = 0; i < newWAPI.length; i++) {

        let boxWithSeeMore = `
            <div class="subBox" style="display: inline-block;">
            <div class="bluebox">
                <h3>${newWAPI[i].title}</h3>
                <div class="bundle">
                    <img class="icon" src="${newWAPI[i].shieldImage}" alt="">
                    <p>${newWAPI[i].shieldValue}</p>
                </div>
            </div>
            <div class="whiteBox">
                <div class="flex">
                    <div class="left">
                        <img src="${newWAPI[i].flagImage}" alt="">
                        <p>${newWAPI[i].company1name}</p>
                    </div>
                    <div class="right">
                        <img class="icon" src="${newWAPI[i].editLogo}" alt="">
                        <p>Edit</p>
                    </div>
                </div>
        
                <div class="flex">
                    <div class="left">
                        <img src="${newWAPI[i].flagImage}" alt="">
                        <p>${newWAPI[i].company2name}</p>
                    </div>
                    <div class="right">
                        <img class="icon" src="${newWAPI[i].editLogo}" alt="">
                        <p>Edit</p>
                    </div>
                </div>
            </div>
                        <div class="seeMore">
                            <p class="changeText">See less</p>
                            <img class="changeImage" src="${newWAPI[i].seeMoreLogo}" alt="">
                        </div>
        </div>`;
        $('.subChildren').append(`<div class="cb${i}">${boxWithSeeMore}</div>`);

    }

    $(document).on("click", ".seeMore", function () {
        let sel = $(this).find('.changeText');
        let selImg = $(this).find('.changeImage');
        let txt = sel.text();

        if (txt === "See more") {
            sel.text("See less");
            selImg.attr("src", './assets/up.png');

        }
        if (txt === "See less") {
            sel.text("See more");
            selImg.attr("src", './assets/down.png');
        }

    })

    for (let i = 0; i < 4; i++) {
        $(document).closest(`.cb${i}`).append(`
        <div class="subContainer">
            <div class="lev${2 * i - 1}">${htmlBox}</div>
            <div class="lev${2 * i}">${htmlBox}</div>
        </div>x
    `);

    }
    // data[0].details.children[0];

    for (let i = 0; i < 50; i++) {
        const childBox1Class1 = 2 * i;
        const childBox1Class2 = 2 * i + 1;

        $(`.cb${i}`).append(`<div class="allChildBoxes" style="display:flex;">
            <div class="subContainer${i}" style="display:flex;">
                <div class="level${childBox1Class1}">${htmlBox}</div>
                <div class="level${childBox1Class2}">${htmlBox}</div>
            </div>

        </div>
        `);      

    }
    
    $('.smBox:first').addClass('smBoxContainer');
    $('.child + .smBox').addClass('smBoxChild');
    for (let i = 0; i < newWAPI.length; i++) {
        $(document).on("click", ".seeMore", function () {
            const parent = $(this).closest(`.cb${i}`);
            parent.find(".smBox").slideToggle();
            parent.find(".subContainer").slideToggle();
            parent.find(".allChildBoxes").slideToggle();
        });
    }


}

// Click Effects 
// Main Box Toggle Effect  

$(".containerElement").on("click", () => {
    $('.subBox').slideToggle();
    $('.smBox').slideToggle();
});

// One Child Box Toggle 
$('.child').on("click", function () {
    $('.subChildren').slideToggle();
    $('.smBoxChild').slideToggle();
});


