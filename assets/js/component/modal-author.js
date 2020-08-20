class ModalAuthor extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = ` <div class="modal fade" id="author" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Author</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row mt-4">
              <div class="col-md-4">
                <img src="assets/img/me.JPG" alt="" class="img-fluid">
              </div>
              <div class="col-md-8">
                <table class="table">
                  <tr>
                    <th>Full Name</th>
                    <td>Adiatna Sukmana</td>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <td>Bandung, 15 December 2001</td>
                  </tr>
                  <tr>
                    <th>Residence</th>
                    <td>Bandung, Jawa Barat, Indonesia</td>
                  </tr>
                  <tr>
                    <th>Interest</th>
                    <td>Programming, Backend Developer</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
   }
}
 
customElements.define("modal-author", ModalAuthor);