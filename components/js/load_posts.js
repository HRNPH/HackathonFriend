// on load request to https://hackathonfriend.herokuapp.com/posts with axios
// and return the response in the callback function
const API_URL = 'https://hackathonfriend.herokuapp.com';

// request GET with no params
axios.get(API_URL + '/posts')
    .then(function(response) {
        // empty container
        document.getElementById('content-container').innerHTML += '';
        // for each post add it to the DOM ID 'posts'
        response.data.forEach(function(post) {
            document.getElementById('content-container').innerHTML += `
            <div class="content">
                <div class="grid-container">
                    <img src="./components/img/anna.png" class="contentpic1">
                    <p class="item1">@${post.name}</p>
                    <p class="item2">${post.detail}</p>
                    <p class="item3">ความสามารถ
                    <br>#html #css #javascript #python #mechine-learning
                    </p>
                    <p class="item4">ความสนใจ
                    <br>#mechine-learning #cybersecurity #gaming
                    </p>
                </div>
            </div>
            `;

        });
    })