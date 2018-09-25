var tweets = [
    {
        id: 1, 
        username: "@EricIsAJedi2018",
        tweet_body: "I had a bad day."
    },
    {
        id:2,
        username: "@EricIsAJedi2018",
        tweet_body: "I used the force today."
    },
    {
        id:3,
        username: "@MagazineWriter999",
        tweet_body: "Read my new article on cool topic!" 
    }
    
    ];
    
    tweets.forEach (function(tweet) { 
        if (tweet.username === "@EricIsAJedi2018") {
    
            var body = document.querySelector("body");
   
            var tweetContainerDiv = document.createElement("div");
   
            tweetContainerDiv.innerHTML = "<p>" + tweet.username + "wrote:" + tweet.tweet_body + "</p>";
   
            body.appendChild(tweetContainerDiv);
        } else {
            var body = document.querySelector("body");
   
            var tweetContainerDiv = document.createElement("div");
   
            tweetContainerDiv.innerHTML = "NOT MY TWEET";
   
            body.appendChild(tweetContainerDiv);
        }
    }); S
        