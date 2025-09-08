import Link from "next/link";
import { error } from "console";


const AboutPage =  async () => {
  const response = await fetch("https://localhost:44363/api/Users/GetAllUsers");
  
  if (!response.ok){
    throw new Error("Failed");
  }

  return (
    <div className="container m-auto px-5 rounded-2xl">
      {/* <div className="p-5 rounded-lg my-1 shadow-lg">{user.name}</div> */}
    </div>
  )
}

export default AboutPage

/*

*/