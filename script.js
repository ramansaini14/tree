// (async function () {
//     await fetch('data.json')
//         .then(response => response.json())
//         .then(data => console.log(data[0]))
//         .catch(err => console.log('Error fetching data:', err));

// })();

$.ajax(
    {
        url: "./data.json",
        type: 'GET',
        success: function data(myData) {
            // console.log(myData);
            mainContainer(myData);
            box(myData);
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
    $('.containerElement').after(`<div class="smBox">
                        <img class="text-file-img" src="./assets/file-text.png" alt="">
                        <p>View ${md.details.children[0].documentsCount} documents</p>
                    </div> `);
}
const box = (data) => {
    let md = data[0].details.children[0];
    let htmlBox = `<div class="subBox" style="display: inline-block;">
                <div class="bluebox">
                    <h3>${md.child1Level[0].title}</h3>
                    <div class="bundle">
                        <img class="icon" src="./assets/shield.png" alt="">
                        <p>12</p>
                    </div>
                </div>
                <div class="whiteBox">
                    <div class="flex">
                        <div class="left">
                            <img src="./assets/au.png" alt="">
                            <p>Company 1 Ltd.</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="./assets/edit.png" alt="">
                            <p>Edit</p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="left">
                            <img src="./assets/au.png" alt="">
                            <p>Company 2 Ltd.</p>
                        </div>
                        <div class="right">
                            <img class="icon" src="./assets/edit.png" alt="">
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>`;
                    $('.child').append(htmlBox);
                    $('.child').after(`<div class="smBox">
                            <img class="text-file-img" src="./assets/file-text.png" alt="">
                            <p>View $# documents</p>
                        </div> `);

                        for (let i = 1; i <= 8; i++) {
                            const childBox1Class1 = 2 * i - 1;
                            const childBox1Class2 = 2 * i;
                            const subContainerIndex1 = 2 * i - 1;
                            const subContainerIndex2 = 2 * i;
                        
                            $(`.cb${i}`).append(`
                                <div class="smBox">
                                    <img class="text-file-img" src="./assets/file-text.png" alt="">
                                    <p>View ${i} documents</p>
                                </div> 
                                <div class="allChildBoxes" style="display:flex;">
                                    <div class="subContainer${subContainerIndex1}" style="display:flex;">
                                        <div class="level${childBox1Class1}">${htmlBox}</div>
                                        <div class="level${childBox1Class2}">${htmlBox}</div>
                                    </div>
                                    <div class="subContainer${subContainerIndex2}" style="display:flex;">
                                        <div class="level${childBox1Class1}">${htmlBox}</div>
                                        <div class="level${childBox1Class2}">${htmlBox}</div>
                                    </div>
                                </div>
                            `);
                        }

                        for (let i = 1; i <= 8; i++) {
                            $(`.cb${i}`).append(`
                                <div class="smBox">
                                        <img class="text-file-img" src="./assets/file-text.png" alt="">
                                        <p>View $# documents</p>
                                    </div> 
                                <div class="subContainer">
                                    <div class="lev${2 * i - 1}">${htmlBox}</div>
                                    <div class="lev${2 * i}">${htmlBox}</div>
                                </div>
                            `);
                        }
}


const withSeeMoreBox = () => {
    let boxWithSeeMore = `
    <div class="subBox" style="display: inline-block;">
    <div class="bluebox">
        <h3>Product Assembly</h3>
        <div class="bundle">
            <img class="icon" src="./assets/shield.png" alt="">
            <p>12</p>
        </div>
    </div>
    <div class="whiteBox">
        <div class="flex">
            <div class="left">
                <img src="./assets/au.png" alt="">
                <p>Company 1 Ltd.</p>
            </div>
            <div class="right">
                <img class="icon" src="./assets/edit.png" alt="">
                <p>Edit</p>
            </div>
        </div>

        <div class="flex">
            <div class="left">
                <img src="./assets/au.png" alt="">
                <p>Company 2 Ltd.</p>
            </div>
            <div class="right">
                <img class="icon" src="./assets/edit.png" alt="">
                <p>Edit</p>
            </div>
        </div>
    </div>
                <div class="seeMore">
                    <p>See Less</p>
                    <img src="./assets/down.png" alt="">
                </div>
</div>`;
    return boxWithSeeMore;
}


// const smallNotifier = () => {
//     let smallNotifier =;
//     return smallNotifier;
// }

// Appends 
// const Main = mainContainer();
// $('.containerElement').append(Main);
// $('.containerElement').after(`<div class="smBox">
//                 <img class="text-file-img" src="./assets/file-text.png" alt="">
//                 <p>View $# documents</p>
//             </div> `);

// Notification Box for documents 
// const smallNotification = smallNotifier();
// $('.smBox').append(smallNotification);

// Blue box 
// const Box = box();

// Looping through all 4 boxes with different classes 
const SeeMoreBox = withSeeMoreBox();
for (let i = 1; i <= 4; i++) {
    $('.subChildren').append(`<div class="cb${i}">${SeeMoreBox}</div>`);
}



// for (let i = 1; i <= 8; i++) {
//     $(`.cb${i}`).append(`
//         <div class="smBox">
//                 <img class="text-file-img" src="./assets/file-text.png" alt="">
//                 <p>View $# documents</p>
//             </div> 
//         <div class="subContainer">
//             <div class="last${2 * i - 1}">${Box}</div>
//         </div>
//     `);
// }


// Click Effects 
// Main Box Toggle Effect  
$('.smBox:first').addClass('smBoxContainer');
$(".containerElement").on("click", () => {
    $('.subBox').slideToggle();
    $('.smBox').slideToggle();
});

// One Child Box Toggle 
$('.child + .smBox').addClass('smBoxChild');
$('.child').on("click", function () {
    $('.subChildren').slideToggle();
    $('.smBoxChild').slideToggle();
});

// Left for later 
// for(let i=1; i<=8; i++){
// $(`.lev${i}`).on("click", function () {
//     $('.smBox').slideToggle();
//     $(`.subContainer${i}`).slideToggle();
// })
// }


// for(let i=1; i<=4; i++){
//     $(document).ready(function () {
//         $(`.cb${i}`).on("click", function (e) {
//           e.stopPropagation();
//           $(`.cb${i}`).find(".subContainer").slideToggle();
//           $(`.cb${i}`).find(".smBox").slideToggle();
//         });
//       });

// }

// for(let i=1; i<=4; i++){
//     $(document).on("click", ".seeMore", function () {
//         const parent = $(this).closest(`.cb${i}`);
//         parent.find(".smBox").slideToggle();
//         parent.find(".subContainer").slideToggle();
//     });
// }

for (let i = 1; i <= 4; i++) {
    $(document).on("click", ".seeMore", function () {
        const parent = $(this).closest(`.cb${i}`);
        parent.find(".smBox").slideToggle();
        parent.find(".subContainer").slideToggle();
        parent.find(".allChildBoxes").slideToggle();
    });
}

