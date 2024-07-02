const Page=({params})=>{
    return(
        <div>
            <h2>Hello:|| {params.username}</h2>
            <p>some goes data <b> {params.username}</b> related to data</p>
        </div>
    )
}
export default Page;