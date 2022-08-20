import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'

const Sidebar = () => {
  return (
    // Sidebar Start
    <div className='sidebar'>
      {/* Profile Start */}
      <div className='profile'>
        {/* Avatar Profile Start */}
        <div className='avatar-profile'>
          <div className='avatar-profile-image'>
            <Image src={"/profile-img.jpg"} alt={'Avatar Profile'} width={'512'} height={'512'} className='rounded-full' />
          </div>
        </div>
        {/* Avatar Profile End */}

        {/* Name Profile Start */}
        <div className='name-profile'>
          <Link href={'/'} passHref>
            <button className='hover:underline'>Manuel Setyo</button>
          </Link>
        </div>
        {/* Name Profile End */}

        {/* Social Media Profile Start */}
        <div className='flex flex-row justify-between items-center w-full px-6 mt-4'>
          <div className='social-media-profile-button'>
            <Link href="https://www.linkedin.com/in/msetyo15" passHref>
              <button><i className="fa-brands fa-linkedin-in"></i></button>
            </Link>
          </div>
          <div className='social-media-profile-button'>
            <Link href="https://www.facebook.com/msetyo15" passHref>
              <button><i className="fa-brands fa-facebook-f"></i></button>
            </Link>
          </div>
          <div className='social-media-profile-button'>
            <Link href="https://www.instagram.com/msetyo15" passHref>
              <button><i className="fa-brands fa-instagram"></i></button>
            </Link>
          </div>
          <div className='social-media-profile-button'>
            <Link href="https://github.com/msetyo15" passHref>
              <button><i className="fa-brands fa-github-alt"></i></button>
            </Link>
          </div>
          <div className='social-media-profile-button'>
            <Link href="https://wa.me/6282251545225" passHref>
              <button><i className="fa-brands fa-whatsapp"></i></button>
            </Link>
          </div>
          <div className='social-media-profile-button'>
            <Link href="mailto:manuelsetyo@gmail.com" passHref>
              <button><i className="fa-regular fa-envelope"></i></button>
            </Link>
          </div>
        </div>
        {/* Social Media Profile End */}
      </div>
      {/* Profile End */}

      {/* Navigation Start */}
      <div className='my-4'>
        <nav className='px-10'>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-house mx-2"></i> Home</button>
            </Link>
          </div>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-user-tie-hair mx-2"></i> About</button>
            </Link>
          </div>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-file-lines mx-2"></i> Resume</button>
            </Link>
          </div>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-book-open-reader mx-2"></i> Portfolio</button>
            </Link>
          </div>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-server mx-2"></i> Services</button>
            </Link>
          </div>
          <div className='navigation-button'>
            <Link href="#" passHref>
              <button><i className="fa-duotone fa-envelope mx-2"></i> Contact</button>
            </Link>
          </div>
        </nav>
      </div>
      {/* Navigation End */}
      
      {/* Footer Start */}
      <div className='flex flex-col items-center py-2'>
        <footer className='text-center'>
          {/* Download CV Start */}
          <div className='download-button '>
            <Link href="#" passHref>
              <button>
                <i className="fa-duotone fa-download mx-2"></i> Download CV
              </button>
            </Link>
          </div>
          {/* Download CV End */}

          {/* Copyright Start */}
          <div>
            <p>Copyright &copy; 2022</p>
            <p>
              <Link href={'/'} passHref>
                <button className='hover:text-primary'>Manuel Setyo</button>
              </Link> All Rights Reserved
            </p>
          </div>
          {/* Copyright End */}
        </footer>
      </div>
      {/* Footer End */}
    </div>
    // Sidebar End
  )
}

export default Sidebar