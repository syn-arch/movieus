class MyFooter extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = ` <div class="bg-dark mt-5">
    <div class="row mr-0">
      <div class="col-md-12">
        <p class="text-center text-white mt-4 mb-4">copyright 2020 make with <i class="fa fa-heart"></i> by Adiatna Sukmana</p>
      </div>
    </div>
  </div>`;
   }
}
 
customElements.define("my-footer", MyFooter);