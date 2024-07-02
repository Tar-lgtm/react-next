"use client";
import { useRouter } from "next/navigation";
const Page=()=>{
    const r=useRouter();
    return(
        <div>
            <h2>About component</h2>
            <p>some text gos here </p>
            <input type="button" value="route button" onClick={()=>r.push("/")}/>
        </div>
    )
}
export default Page;