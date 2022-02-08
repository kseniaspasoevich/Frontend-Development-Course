document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function () {
    let words = document.querySelector("textarea").value.toLowerCase().split(' ')
    for (let i=0; i < words.length; i++ ) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    document.querySelector("textarea").value = words.join(' ');
});

document.getElementById("sentence-case").addEventListener("click", function () {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ')
    for (let i=0; i < sentences.length; i++ ) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    document.querySelector("textarea").value = sentences.join('. ');
});

//функция сохранения
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function(){
    let text=document.querySelector("textarea").value;
    download("text.txt",text);
});