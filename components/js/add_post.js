// create getValue() to get value from id "input"

function getValue() {
    username = document.getElementById('name').innerText;
    data = document.getElementById('detail').value;
    // post request to endpoint https://hackathonfriend.herokuapp.com/posts with axios
    // and return the response in the callback function
    const API_URL = 'https://hackathonfriend.herokuapp.com' + '/posts';
    fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                detail: data
            }),
        })
        .then(response => {
            // redirect to /interesting
            window.location.href = 'https://hrnph.github.io/HackathonFriend/interesting.html';
        })

}