'use client';

import Link from "next/link";

interface ErrorPageProps{
    error: Error;
    reset: ()=> void;
}

const errorPage = ({error , reset} : ErrorPageProps) => {
  return (
    <div className="pt-7 text-center" >
      <div className="text-red-700 text-3xl text-center ">Something went wrong</div>
      <div className="pt-3">Error Message:{error.message}</div>
      <div>
        <button onClick={()=> reset()} className="bg-blue-800 rounded-2xl h-10 px-8 text-white">
            Try again
        </button>
      </div>
      <Link href="/" className="underline text-blue-700" >Go to home page</Link>
    </div>

  )
}

export default errorPage
