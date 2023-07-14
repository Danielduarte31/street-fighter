function show(file) {

    var ShowPhoto = document.getElementById('photo');
    newPhoto = "/assets/prontos/" + file;
    ShowPhoto.src = newPhoto;

    console.log(file);
    var fullName = file.replace(".webp", "");
    console.log(fullName);

    var name = fullName.replace(".webp", "");
    console.log(name);
    document.getElementById('thetitle').innerHTML = name;
}

function hide() {

    var ShowPhoto = document.getElementById('photo');
    ShowPhoto.src = "assets/a fazer/ryu.gif";
    document.getElementById('thetitle').innerHTML = "Street Fighter";

}