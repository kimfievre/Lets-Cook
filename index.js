$(document).ready(function(){
	$('.addBtn').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        // var yummlyAPI = "http://api.yummly.com/v1/api/recipes?_app_id=e7570b5b&_app_key=ec1e10dd3a2667dd452af19b8b1682d3&q=";
        var API = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?&limitLicense=false&number=5&ranking=1&fillIngredients=true&ingredients=";
        $.getJSON(API + toAdd + API_KEY, function (data) {
        	var $showRecipe = $("#showRecipe");
        	$.each(data, function(idx, item){
        		var imgLink = item.image + '">';
        		$showRecipe.append('<p>' + item.title + '</p>' + '<p>'+ '<img src="' + imgLink + '</img>' + '</p>' + '<p><br></p>');
        	});
  		});

    });
    $(".reset").click(function(){
    	$('#showRecipe').empty();
    });

});