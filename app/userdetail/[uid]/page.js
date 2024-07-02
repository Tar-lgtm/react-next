async function getuser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   return res.json()
  }
const Page=async ({params})=>{
    const user= await getuser(params.uid);
    console.log(user);
    return(
        <div>
            <h2>Showing data from api id:{params.uid}</h2>
           {user.name} <br />
           {user.email} <br />
           {user.website} <br />
           {user.phone} <br />
        </div>
    )
}
export default Page;