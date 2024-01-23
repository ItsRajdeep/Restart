
const requestUrl = 'https://api.github.com/users/ItsRajdeep'
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl)
        xhr.onreadystatechange = function(){
            // console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                const data = JSON.parse(this.responseText)
                // console.log(typeof data);
                // console.log(data.followers);
                // console.log(data);
                document.getElementById("follower").innerHTML=data.followers
                let image = data.avatar_url;
                // console.log(image)
                document.getElementById("imgbox").style.backgroundImage="url('https://avatars.githubusercontent.com/u/130769261?v=4')"
                console.log("hello")
            }
        }
        
        xhr.send();
