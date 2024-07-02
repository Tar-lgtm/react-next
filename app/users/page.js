import Link from "next/link";
async function getusers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   return res.json()
  }
const Page=async ()=>{
    const users= await getusers();
    console.log(users);
    return(
        <div>
            <h2>Showing data from api</h2>
            {
                users.map((item)=>{
                    return(
                       <>
                        <Link href={`/userdetail/${item.id}`}><h2>{item.name}</h2></Link>
                       </>
                           
                                            )
                })
            }
        </div>
    )
}
export default Page;