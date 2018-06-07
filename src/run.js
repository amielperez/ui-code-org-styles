(function () {
    var photo = photos.Photo('img/foodie.jpg');
    var caption = photos.Caption('Foodie, with concat/minify');
    var photocard = photos.PhotoCard(photo, caption);
    document.getElementById('app').appendChild(photocard);
}());