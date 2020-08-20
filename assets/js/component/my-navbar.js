class MyNavbar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
						    <div class="container">
						      <a class="navbar-brand" href="#"><i class="fa fa-film"></i> Movie Us</a>
						      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						        <span class="navbar-toggler-icon"></span>
						      </button>
						      <div class="collapse navbar-collapse" id="navbarNav">
						        <ul class="navbar-nav ml-auto">
						          <li class="nav-item">
						            <a class="nav-link" href="#home">Home</a>
						          </li>
						          <li class="nav-item">
						            <a class="nav-link" href="#upcoming-series">Tv Series</a>
						          </li>
						          <li class="nav-item">
						            <a class="nav-link" href="#top-rated-movies">Movies</a>
						          </li>
						          <li class="nav-item">
						            <a class="nav-link" href="#author" data-toggle="modal">Author</a>
						          </li>
						        </ul>
						      </div>
						    </div>
						  </nav>`;
   }
}
 
customElements.define("my-navbar", MyNavbar);