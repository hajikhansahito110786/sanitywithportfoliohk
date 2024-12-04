import Image from "next/image"
import img from "./butterfly1.jpg"
import Api1 from "./api/api1";
import { client } from "@/sanity/lib/client";

export default async function Sidebar() {
  /*async function getData(){
    const fetchdata=await client.fetch("*[_type == 'student']");
    return fetchdata
  }
  const data=await getData()
  console.log("data",data)*/
 
      return (
        <div className="bg-blue-400  h-screen flex flex-col items-center p-3">
          
         {/*image*/}
         <Image src={img} alt="profile" width={100} height={100} className="roundded-md" />
         <div className="mt-4">

        
          {/*name*/}
          <h1 className="text-xl font-semibold tracking-tight uppercase">
          haji khan
            </h1>
            <h1 className="text-xl font-semibold tracking-tight ">
          web developer
          <div>
{
/*
data.map((val:any,i:number)=>{

  return(
    <>
<h1 key={i}>
  {val.name}{val.class}
  </h1>
      </>
  )
})
*/
}


</div>

            </h1>
            </div>
           {/*social mediaimage*/}
            {/*cv button */}
        {/* ok <Api1/>*/}
        </div>
      );
    }