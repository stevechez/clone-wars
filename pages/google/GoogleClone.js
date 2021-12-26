import Image from 'next/image'
import Link from 'next/link'
import { MicrophoneIcon, ViewGridIcon, SearchIcon } from '@heroicons/react/solid'
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Avatar from '../../components/Avatar';
import NavBar from '../../components/NavBar'

const GoogleClone = () => {

    const router = useRouter();
  const searchInputRef = useRef(null);
  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/google/search?term=${term}`);
  }

    return (
        <>
        <NavBar />

    <div className="flex justify-between text-md text-gray-700 p-6">
        <div className="flex items-center">
            <Link href="#">
                <a className="block p-3">About</a>
            </Link>
            <Link href="#">
                <a className="block p-3">Store</a>
            </Link>
        </div>
        <div className="flex items-center">
            <Link href="#">
                <a className="block p-3">Gmail</a>
            </Link>
            <Link href="#">
                <a className="block p-3">Images</a>
            </Link>
            <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#111] rounded-full mr-6" />
            {/* <Image 
                src="https://github.com/stevechez.png" 
                alt="profile picture" 
                width={50}
                height={50}
                className="rounded-full block py-3 px-4"
            /> */}
            <Avatar />
        </div>
    </div>

    {/* <!-- main --> */}
    <div className="flex justify-center w-full pt-20">
        <div className='w-full text-center'>
            <Image 
                className="w-2/3 ml-auto mr-auto mb-6" 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                alt="Google" 
                width={300}
                height={100}
            />
            <div className="flex relative rounded-full p-2 mt-6 shadow text-xl w-1/2 text-center mx-auto">
                <SearchIcon className="h-6 w-6 text-black"/>
                <input ref={searchInputRef} type="text" className="w-128 outline-none px-3" />
                <MicrophoneIcon className="h-6 w-6 text-blue-500 absolute right-6"/>
                
                

            </div>
            <div className="mt-8 text-center">
                <button className="mr-3 bg-gray-100 border border-gray-100 py-3 px-4 rounded hover:border-gray-300" onClick={search}>
                    Google Search
                </button>
                <button className="bg-gray-100 border border-gray-100 py-3 px-4 rounded hover:border-gray-300" onClick={search}>
                    Im feeling lucky
                </button>
            </div>
        </div>
    </div>

    {/* <!-- footer --> */}
    <div className="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
        <div className="flex">
            <Link href="#">
                <a className="block p-3">Advertising</a>
            </Link>
            <Link href="#">
                <a className="block p-3">Business</a>
            </Link>
            <Link href="#">
                <a className="block p-3">How Search Works</a>
            </Link>
        </div>
        <div className="flex">
            <Link href="#">
                <a className="block p-3">Privacy</a>
            </Link>
            <Link href="#">
                <a className="block p-3">Terms</a>
            </Link>
            <Link href="#">
                <a className="block p-3">Settings</a>
            </Link>
        </div>
    </div>
            
        </>
    )
}

export default GoogleClone
