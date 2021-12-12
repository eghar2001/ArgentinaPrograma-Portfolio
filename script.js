const contenidoForm=`

`

function agregaLogin(){
    const navIconContainer = document.getElementById("nav-icon-container");
    navIconContainer.outerHTML=`
    <div id="nav-icon-container" class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 row row-cols-4 justify-content-sm-end align-content-end  ">
        <form id="login-Form" class="w-100 h-75 p-3 my-0 row ali justify-content-center">
         <div class="col-12 col-md-5  h-100">
             <label for="exampleInputEmail1" class="my-0 text-light h-25 form-label">Email address</label>
             <input type="email" class="my-0 form-control h-50" id="exampleInputEmail1" aria-describedby="emailHelp">
      
          </div>
          <div class="col-12 col-md-5 h-100">
              <label for="exampleInputPassword1" class="my-0 text-light form-label">Password</label>
              <input type="password" class="my-0 form-control" id="exampleInputPassword1">
           </div>
            <button type="submit" class="mt-2 mt-lg-0  align-self-end col-11 col-md-2 btn btn-primary">Submit</button>
         </form>  
    
    </div>`
    
}
function sacaIconos(){
    const iconos=document.querySelectorAll(".nav-icon");
    iconos.forEach(unIcono => {
            unIcono.setAttribute("hidden", "");
        })
}



const botonLogin = document.getElementById("login-button");
botonLogin.addEventListener("click",()=>{
    sacaIconos();
    agregaLogin();
});