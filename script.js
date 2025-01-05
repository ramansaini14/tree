const mainContainer = () => {
    let mainBox = `<div class="inner1">
          <h3>Headphone</h3>
          <img class="img" src="./assets/headphones.png" alt="" />
        </div>
        <div class="inner2">
          <p class="light">HTS Code</p>
          <p>8517.62.0090</p>

          <p class="light">Purchase Orders</p>
          <p>PO567890123</p>

          <div class="twoItems">
            <div class="innerTI">
              <p class="light">Quantity</p>
              <p>500</p>
            </div>
            <div class="innerTI">
              <p class="light">Main Parts</p>
              <p>20</p>
            </div>
          </div>
        </div>`;
    return mainBox;
}
const box = () => {
    let htmlBox = `<div class="subBox" style="display: inline-block;">
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
            </div>`;
    return htmlBox;
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
const Main = mainContainer();
$('.container').append(Main);
$('.container').after(`<div class="smBox">
                <img class="text-file-img" src="./assets/file-text.png" alt="">
                <p>View $# documents</p>
            </div> `);

// Notification Box for documents 
// const smallNotification = smallNotifier();
// $('.smBox').append(smallNotification);

// Blue box 
const Box = box();
$('.child').append(Box);
$('.child').after(`<div class="smBox">
                <img class="text-file-img" src="./assets/file-text.png" alt="">
                <p>View $# documents</p>
            </div> `);

// Looping through all 4 boxes with different classes 
const SeeMoreBox = withSeeMoreBox();
for (let i = 1; i <= 4; i++) {
    $('.subChildren').append(`<div class="cb${i}">${SeeMoreBox}</div>`);
}

for (let i = 1; i <= 8; i++) {
    $(`.cb${i}`).append(`
        <div class="smBox">
                <img class="text-file-img" src="./assets/file-text.png" alt="">
                <p>View $# documents</p>
            </div> 
        <div class="subContainer">
            <div class="lev${2 * i - 1}">${Box}</div>
            <div class="lev${2 * i}">${Box}</div>
        </div>
    `);
}
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
                <div class="level${childBox1Class1}">${Box}</div>
                <div class="level${childBox1Class2}">${Box}</div>
            </div>
            <div class="subContainer${subContainerIndex2}" style="display:flex;">
                <div class="level${childBox1Class1}">${Box}</div>
                <div class="level${childBox1Class2}">${Box}</div>
            </div>
        </div>
    `);
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
// Main Box Expansion 
$(".container").on("click", () => {
    $('.subBox').slideToggle();
    $('.smBox').slideToggle();
});

$('.child').on("click", function () {
    $('.smBox').slideToggle();
    $('.subChildren').slideToggle();
});

// Left for later 
for(let i=1; i<=8; i++){
$(`.lev${i}`).on("click", function () {
    $('.smBox').slideToggle();
    $(`.subContainer${i}`).slideToggle();
})
}


// for(let i=1; i<=4; i++){
//     $(document).ready(function () {
//         $(`.cb${i}`).on("click", function (e) {
//           e.stopPropagation();
//           $(`.cb${i}`).find(".subContainer").slideToggle();
//           $(`.cb${i}`).find(".smBox").slideToggle();
//         });
//       });

// }

for(let i=1; i<=4; i++){
    $(document).on("click", ".seeMore", function () {
        const parent = $(this).closest(`.cb${i}`);
        parent.find(".smBox").slideToggle();
        parent.find(".subContainer").slideToggle();
    });
}

