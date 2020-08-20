$(function(){

	const api_key = "ea958b9ad33a4a626a2d1d4b0f56801e";
	const base_url = "https://image.tmdb.org/t/p/w500/";

	$('.start_search').click(function(){
		const query = $('.search_movie').val()
		$.ajax({
			mehtod : "GET",
			url : `https://api.themoviedb.org/3/search/movie?api_key=ea958b9ad33a4a626a2d1d4b0f56801e&language=en-US&query=${query}&page=1&include_adult=false`,
			dataType : 'json',
			success : function(response){
				$('.search_result').html('')
				response.results.forEach(function(value, index){
					$('.search_result').append(`
						<div class="row mt-4">
						<div class="col-md-4">
						<img src="${base_url}${value.poster_path}" alt="" class="img-fluid">
						</div>
						<div class="col-md-8">
						<h2>Judul : ${value.title}</h2>
						<h5>Rating : ${value.vote_average}</h5>
						<h5>Date Release : ${value.release_date}</h5>
						<a href="#detail-movie" data-id="${value.id}" data-toggle="modal" class="btn btn-primary selengkapnya">Selengkapnya</a>
						</div>
						</div>
						`)
				})
			}
		});
		$('#modal-search-movie').modal('show')
	})

	$(document).on('click', '.selengkapnya', function(){
		const id = $(this).data('id')

		$.ajax({
			mehtod : "GET",
			url : `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
			dataType : 'json',
			success : function(response){
				$('.movie_detail').html(`
					<div class="row">
					<div class="col-md-5">
					<img  src="${base_url}${response.poster_path}" alt="" class="img-fluid">
					</div>
					<div class="col-md-7 movie_detail">
					<table class="table">
					<tr>
					<th>Name</th>
					<td>${response.title}</td>
					</tr>
					<tr>
					<th>Popularity</th>
					<td>${response.popularity}</td>
					</tr>
					<tr>
					<th>Release Date</th>
					<td> ${response.release_date}</td>
					</tr>
					<tr>
					<th>Overview</th>
					<td rowspan="3">${response.overview}</td>
					</tr>
					</table>
					</div>
					</div>
					`)
			}
		});

		$('#modal-search-movie').modal('hide')
		$('#detail-movie').modal('show')
	})

	function getItem(url, el){
		$.ajax({
			mehtod : "GET",
			url : url,
			dataType : 'json',
			success : function(response){
				response.results.forEach(function(value, index){
					$(el).append(
						`
						<div class="col-md-3 mt-3">
						<div class="card">
						<img src="${base_url}${value.poster_path}" class="card-img-top" alt="...">
						<div class="card-body">
						<h5 class="card-title">${value.title}</h5>
						<p class="card-text">${value.release_date}</p>
						<a href="#detail-movie" data-id="${value.id}" data-toggle="modal" class="btn btn-primary selengkapnya">Selengkapnya</a>
						</div>
						</div>
						</div>`
						)
				})
			}
		});
	}

	getItem("https://api.themoviedb.org/3/movie/upcoming?api_key="+api_key, '.upcoming-series')
	getItem("https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key, '.top-rated-movies')
	getItem("https://api.themoviedb.org/3/movie/popular?api_key="+api_key, '.popular-movies')

})