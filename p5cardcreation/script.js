// lets create the card creation function

function cardcreate (title, cname, views, monthsold, duration, thumbnail){

    let viewstr;

    if(views<1000000){
        viewstr = views / 1000 + "k";
    }

    else if(views>1000000){
        viewstr = views / 1000000 + "M";
    }

    else {
        viewstr = views / 1000 + "k";
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="card image">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h2>${title}</h2>
        <p>${cname} . ${viewstr} views . ${monthsold} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

cardcreate("Introduction to Backened | Sigma web Dev video #1", "CodewithRitesh", 2000000, 1, "23:02", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #2", "CodewithRitesh", 3000000, 1, "19:05", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #3", "CodewithRitesh", 1000000, 1, "22:40", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #4", "CodewithRitesh", 5000000, 2, "15:56", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #5", "CodewithRitesh", 7000000, 2, "07:45", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #6", "CodewithRitesh", 8000000, 2, "56:32", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #7", "CodewithRitesh", 3000000, 2, "23:59", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #8", "CodewithRitesh", 5000000, 2, "12:45", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #9", "CodewithRitesh", 2000000, 3, "11:23", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #10", "CodewithRitesh", 5000000, 3, "24:26", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #11", "CodewithRitesh", 6000000, 3, "45:08", "image.jpg")
cardcreate("Introduction to Backened | Sigma web Dev video #12", "CodewithRitesh", 7000000, 3, "08:01   ", "image.jpg")


