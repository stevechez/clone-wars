import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="p-4 bg-gray-800 text-gray-200">
  <div className="flex justify-between items-center">
  <div className="flex items-center pl-8">
    <i className="text-2xl fas fa-campground"></i>
    <Link href="/">
        <a>
        <h1 className="font-serif tracking-wide font-bold text-xl pl-4">CLONE WARS</h1>
        </a>
    </Link>
    
  </div>
  
  {/* <!-- MOBILE NAV ICON -->
  <div className="md:hidden block absolute top-4 right-8 fixed">
    <button aria-label="navigation" type="button"  className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"><i className="fas fa-bars text-3xl" id="bars"></i>            </button>
  </div> */}
  
  {/* <!-- NAVIGATION - LARGE SCREENS --> */}
<div className="hidden md:flex">
  <ul className="hidden md:flex">
    <li className="text-lg pr-8">
        <Link href="\google\GoogleClone">
            <a>Google</a>
        </Link></li>
    <li className="text-lg pr-8"><Link href="\netflix\NetflixClone">
            <a>Netflix</a>
        </Link></li>
    <li className="text-lg pr-8"><Link href="\google">
        <a>...</a>
    </Link></li>
    <li className="text-lg pr-8">
        <Link href="\google">
            <a>...</a>
        </Link>
    </li>
  </ul>
  </div>

  {/* <div className="hidden md:flex">
    <a href="#"><i className="fab fa-facebook text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-linkedin text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-instagram text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-twitter text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
  </div> */}
  </div>
    
  {/* <!-- MOBILE MENU -->
<div id="mobileMenu" className="hidden flex w-full mx-auto py-8 text-center">
        <div className="flex flex-col justify-center items-center w-full">
        <a href="#" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style="text-underline-offset: 8px;">Home</a>
        <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style="text-underline-offset: 8px;">About</a>
        <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style="text-underline-offset: 8px;">Blog</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style="text-underline-offset: 8px;">Contact</a>
          </div>
      </div> */}

      {/* CSS CODE
.show {
  display: block;
} */}


      {/* JS CODE 

      Result Skip Results Iframe
// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');

// Gets the Mobile Nav container
let mobileMenu = document.getElementById('mobileMenu');

// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function(){
  mobileMenu.classList.toggle('show');
  bars.classList.toggle('fa-times');
}); */}
</nav>

    )
}
