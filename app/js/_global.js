  
// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    },
    switcher: function(sv){

        if (!toggle.checked) {
           price.innerHTML = priceMonthly[sv];
           views.innerHTML = pageviews[sv]; 
        } else {
            price.innerHTML = priceYearly[sv];
            views.innerHTML = pageviews[sv]; 
        }
        
    }
}

// Run the global stuff
app.global.init();


const slider = document.getElementById("sliderselection");
const toggle = document.getElementById("toggle");
const mode   = document.getElementsByClassName("switch")[0]; 
const price  = document.getElementsByClassName("dollars")[0];
const views  = document.getElementsByClassName("views")[0];
const priceMonthly = ['$8.00','$12.00','$16.00','$24.00','$36.00','$50.00'];
const priceYearly  = ['$6.00','$9.00','$12.00','$18.00','$27.00','$37.50']; 
const pageviews = ['10K','50K','100K','500K','1M','1.5M'];
var x = 20 * slider.value; 
var color = "linear-gradient(90deg, rgba(165,243,235,1) "+x+"%, rgba(234,238,251,1) "+x+"%);";

slider.addEventListener("change",function () {

    console.log("slider changed");

    x = 20 * slider.value; 

    color = "linear-gradient(90deg, rgba(165,243,235,1) "+x+"%, rgba(234,238,251,1) "+(x+5)+"%)";

    slider.style.background = color;

    app.global.switcher(slider.value);

});

toggle.addEventListener('click',function () {
    
    console.log("toggled");

    if (mode.classList.contains("monthly")) {
        
        mode.classList.remove("monthly");
        mode.classList.add("yearly");
        price.style.color = "hsl(15, 100%, 70%)";

    } else {
        mode.classList.remove("yearly");
        mode.classList.add("monthly");
        price.style.color = "hsl(227, 35%, 25%)";

    }
    
    app.global.switcher(slider.value);

});


