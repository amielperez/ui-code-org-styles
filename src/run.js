import Photo from './photo';
import Caption from './caption';
import PhotoCard from './photocard';

(function () {
    var photo = Photo('img/foodie.jpg');
    var caption = Caption('Foodie, with Webpack (JS Only)');
    var photocard = PhotoCard(photo, caption);
    document.getElementById('app').appendChild(photocard);
}());