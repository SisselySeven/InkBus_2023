// JavaScript code for the home page
function initHomePage() {


 window.onload = function () {
  const body = document.querySelector('body');
  const header = document.querySelector('header')
  const headerHeight = header.offsetHeight;
  body.style.paddingTop = `${headerHeight}px`;
 }
 window.addEventListener('resize', function () {
  var mainElement = document.querySelector('main');
  var viewportWidth = window.innerWidth;
  var paddingTop = viewportWidth > 1275 ? 10 : 5; // adjust these values to your needs
  mainElement.style.paddingTop = paddingTop + '%';
 });

 /*dynamically sizes of title and subtile image */
 var headerTitle = document.getElementById("header-title");
 headerTitle.style.width = "calc(50% + 20px)";
 headerTitle.style.height = "auto";

 var headerSubTitle = document.getElementById("header-subtitle");
 headerSubTitle.style.width = "calc(40% + 20px)";
 headerSubTitle.style.height = "auto";


 /*dynamically sizes the nav buttons on the main site landing page*/
 const navLinks = document.querySelector('.nav-links');
 const children = navLinks.children;

 children[0].style.width = 'calc(15em + 10vw)';
 children[1].style.width = 'calc(15em + 10vw)';
 children[0].style.height = 'auto';
 children[1].style.height = 'auto';

 /*same as above, but for vw < 768px*/

 const viewportWidth = window.innerWidth;
 if (viewportWidth < 768) {
  var headerTitle = document.getElementById("header-title");
  headerTitle.style.width = "calc(60% + 20px)";
  headerTitle.style.height = "auto";

  var headerSubTitle = document.getElementById("header-subtitle");
  headerSubTitle.style.width = "calc(50% + 20px)";
  headerSubTitle.style.height = "auto";
 }
 if (viewportWidth < 768) {
  children[0].style.width = 'calc(11em + 5vw)';
  children[1].style.width = 'calc(11em + 5vw)';
  children[0].style.height = 'auto';
  children[1].style.height = 'auto';
 }
}
// JavaScript code for the about page
function initAboutPage() {

 /*dynamically sizes the racoon image on the INKBUS Tatoo-About Us page*/
 // Get the main container element
 const mainContainer = document.getElementById('about-main-container');
 // Get the image element
 const image = document.getElementById('markoon-image');
 // Calculate the percentage of the main container's height to use as the image height
 const percentage = 0.25; // Change this to the percentage you want
 const imageHeight = mainContainer.offsetHeight * percentage;
 // Set the image height and width
 image.style.height = `${imageHeight}px`;
 image.style.width = `auto`;

}
//Calls functions on page load
window.onload = function () {
 const path = location.pathname;
 if (path.endsWith('/index.html')) {
  initHomePage();
 } else if (path.endsWith('/aboutInkBus.html')) {
  initAboutPage();

 }
}