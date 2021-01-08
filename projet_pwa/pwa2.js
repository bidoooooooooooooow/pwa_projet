$(".ajax").click(function(){
  $.ajax({
    url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-08&sortBy=publishedAt&apiKey=06cefc222d4a427985620b7b06c4c441',
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
      console.log(data.articles);
      for(i=0; i < data.articles.length; i++){
        $("#news").append('<div class="item" ><img class ="img" src='+ data.articles[i].urlToImage+"></img>" +"<h2>" + data.articles[i].title + "</h2>"+ data.articles[i].description + '<br> <br> <a href=' + data.articles[i].url +'><input type = "button" class ="button" value = "Voir article"></a> </div>');
      }
    },
    error:function(){
      alert("Erreur!")
    }
  })
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}
