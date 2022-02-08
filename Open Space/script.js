function enableControlPanel(){
    let psd = document.getElementById("text-box");
    let password = document.getElementById("text-box").value;

    if (password === "TrustNo1") {
        document.querySelectorAll("input").forEach(el=>el.removeAttribute("disabled"));
        psd.setAttribute("disabled", "disabled");
        document.getElementById("ok-btn").setAttribute("disabled", "disabled");
        document.getElementById("launch-btn").setAttribute("disabled", "disabled")
    }
    else{alert('Wrong password!')}
}
document.getElementById("ok-btn").addEventListener("click", enableControlPanel);

function setCheckboxes(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let count=0;

    for(const checkbox in checkboxes){
        if(checkboxes[checkbox].checked){
            count++;
        }
    }
    let ok = (count == 6) ? true : false;
    return ok;
}

function setRanges(){
    let ranges=document.querySelectorAll("input[type='range']");
    let count;

    for(const range in ranges){
        if(ranges[range].value==100){
            count++;
        }
    }
    let ok = (count == 5) ? true : false;
    return ok;
}

function prepareForLaunch(){
    if(setCheckboxes() && setRanges()){
        document.getElementById("launch-btn").removeAttribute("disabled");
        document.getElementById("launch-btn").addEventListener("click", launchRocket);
    }
}

function launchRocket(){
    document.getElementById("rocket").animate([
        // keyframes
        { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 3000,
        iterations: 1
    });
}