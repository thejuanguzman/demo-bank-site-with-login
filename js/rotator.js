// alert("hello test"); 

// this scrip was used from https://javascript-tutor.net/index.php/lesson-28-managing-banner-ads-in-javascript/
// and modified to use the document.getElementById to insert the rotating banners

let MyBanners=new Array('../images/image1.jpg','../images/image2.jpg','../images/image3.jpg','../images/image4.jpg')
MyBannerLinks=new Array('http://www.google.com/','http://www.google.com/','http://google.com','http://javascript-tutor.net/')
banner=0
function ShowLinks(){
document.location.href="http://www."+MyBannerLinks[banner]
}function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.getElementById('ad-container').innerHTML = '<a href="javascript: ShowLinks()"><img src="../images/image1.jpg" width="100%" name="ChangeBanner"/></a>';
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",5000)
}
}



// this is the example from the class for testing
// var banner = [
//     ["destination1.com", "/images/image1.jpg"],
//     ["destination2.com", "/images/image2.jpg"],
//     ["destination3.com", "/images/image3.jpg"],
//     ["destination4.com", "/images/image4.jpg"],
//     ["destination4.com", "/images/image5.jpg"]
//     ];
//     function shuffle(a) {
//         var j, x, i;
//         for (i = a.length - 1; i > 0; i--) {
//             j = Math.floor(Math.random() * (i + 1));
//             x = a[i];
//             a[i] = a[j];
//             a[j] = x;
//         }
//         return a;
//     }
//     shuffle(banner);
//     document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+'" height="250" width="300" alt="300x250 Banner Ad" /></a>';

