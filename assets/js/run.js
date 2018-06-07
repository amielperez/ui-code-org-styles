var photo = Photo('img/foodie.jpg');
var caption = Caption('Foodie');
var photocard = PhotoCard(photo, caption);
document.getElementById('app').appendChild(photocard);