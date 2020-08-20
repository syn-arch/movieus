class MyHero extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `<div class="hero-image" id="home">
    <div class="container">
      <div class="hero-text">
        <div class="row">
          <div class="col-md-12">
            <h1>MOVIE US</h1>
            <h4>Search your favourite movie here</h4>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="input-group">
              <form >
                <input type="text" class="form-control search_movie" placeholder="Search.." aria-label="Search.." aria-describedby="basic-addon1">
              </form>
              <div class="input-group-append">
                <button class="input-group-text btn btn-primary start_search" id="basic-addon1"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
   }
}
 
customElements.define("my-hero", MyHero);