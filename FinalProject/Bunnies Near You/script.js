key = "ehLORBt1FFTbSm4rwAkkeIfmlylCeMPEZ9lwfj5Tescwf0Bqzu";
secret = "pxu8brA3SWrgb2LWFR2Omb3T8fANrcQt8CjGSEeh";
var token, token_type, expires;
var getOAuth = function () {
	return fetch('https://api.petfinder.com/v2/oauth2/token', {
		method: 'POST',
		body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function (resp) {

		// Return the response as JSON
		return resp.json();

	}).then(function (data) {

		// Log the API data
		console.log('token', data);

		// Store token data
		token = data.access_token;
		tokenType = data.token_type;
		expires = new Date().getTime() + (data.expires_in * 1000);

	}).catch(function (err) {

		// Log any errors
		console.log('something went wrong', err);

	});
};

var makeCall = function () {

	// If current token is invalid, get a new one
	if (!expires || expires - new Date().getTime() < 1) {
		console.log('new call');
		getOAuth().then(function () {
			conversion.fetchConversion();
		});
		return;
	}

	// Otherwise, get pets
	console.log('from cache');
    conversion.fetchConversion();

};

let conversion = {
    fetchConversion: function () {
        console.log(token);
        fetch(
            "https://api.petfinder.com/v2/animals?key=" + key + "&location=12180&type=Rabbit",
            {
                headers: {
                    Authorization: `Bearer ` + token,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => this.displayCurr(data))
            .catch((err) => console.log(err));
    },
    displayCurr: function (pets) {
        const results = document.querySelector(".row");
        results.innerHTML = "";
        pets = pets.animals;
        console.log(pets);
        //Loop through pets
        // Array.from((pet) => {
        //output to page
        pets = JSON.stringify(pets);
        pets = JSON.parse(pets);
        for (var i = 0; i < pets.length; i++) {
            var name = pets[i].name;
            var url = pets[i].url;
            var pic = JSON.stringify(pets[i].primary_photo_cropped);
            pic = JSON.parse(pic);
            console.log(pic);
            if (pic != null) {
                pic = pic.full;
                const div = document.createElement("div");
                div.innerHTML +=
                    '<div class="column">' +
                    '<div class="card">' +
                    '<img src="' + pic + '" alt="' + name + '" class ="bunny-center">' +
                    '<div class="container">' +
                    '<div class = "text-center">' +
                    '<h2>' + name + '</h2>' +
                    '<p>' + name + ' is adoptable!</p>' +
                    '</div>' +
                    '<p><a href="' + url + '" class="button">Details</a></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                    ;
                results.appendChild(div);
            }
        }
    },
};

makeCall();
