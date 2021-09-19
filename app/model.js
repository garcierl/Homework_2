var MODEL = (function(){

var HomeContent = `<section class="home">
<h1 class="home--header">Welcome to Picture Gatherers!</h1>
</section>

<section class="home-2">
<div class="intro">
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias odit beatae totam, eos natus, sit eaque quae iusto sint ipsam minima facere cumque ipsa cupiditate eius fugiat dolorem quidem dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur ipsa veritatis blanditiis quam quia tenetur, tempore aperiam est molestias et placeat, voluptas quaerat! Quos fuga labore ullam quas cupiditate?</p>
</div>
<img class="greece--img" src="images/greece.jpg">
</section>`;

var AboutContent = `<section class="about-content">
<div class="header">
    <h1>ABOUT:</h1>
    <h3 class="border"></h3>
</div>

<div class="para">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias odit beatae totam, eos natus, sit eaque quae iusto sint ipsam minima facere cumque ipsa cupiditate eius fugiat dolorem quidem dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur ipsa veritatis blanditiis quam quia tenetur, tempore aperiam est molestias et placeat, voluptas quaerat! Quos fuga labore ullam quas cupiditate?</p>
</div>
</section>


<section class="location-content">
<div class="header-2">
    <h2>Locations:</h2>
    <h3 class="border"></h3>
</div>
<div class="location-1">
    <div class="image-1"></div>
        <p class="location-1-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>

<div class="location-2">
    <div class="image-2"></div>
    <p class="location-2-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>
</section>`;

var GalleryContent = `<section class="gallery">
<div class ="gallery-title">
    <h1>GALLERY:</h1>
    <div class="gallery-border"></div>
</div>
<div class="pictures">
<div class="row-1">
    <a href="#" id ="gallery1"><div class="greece"></div></a>
    <a href="#" id ="gallery2"><div class="mountain"></div></a>
    <a href="#" id ="gallery3"><div class="plain"></div></a>
</div>
<div class="row-2">
    <a href="#" id ="gallery4"><div class="ice-lake"></div></a>
    <a href="#" id="gallery5"><div class="yellowstone"></div></a>
</div>
</div>
</section>`;

var ContactContent = '<section class="contact-banner"><h6>Contact Us:</h6></section><section class="contact"><div class="contact--container"><form action="app/action.php"><label for="fname">First Name</label><input type="text" id="fname" name="firstname" placeholder="Your name..."><label for="lname">Last Name</label><input type="text" id="lname" name="lastname" placeholder="Your name..."><label for="email">Email</label><input type="text" id="email" name="Email" placeholder="Enter your email..."><label for="subject">Subject</label><textarea id="subject" name="subject" placeholder="Write here..." style="height: 500px; width: 1000px; margin-left: 250px;"></textarea><input type="submit" value="Submit"></form></div></section>';


var _getMyVariable = function(buttonID, callback){
    let newName = buttonID + "Content";

    $("#app").html(eval(newName));

    if (callback){
        callback(newName);
    }
};

return{
    getMyVariable: _getMyVariable
}

})();