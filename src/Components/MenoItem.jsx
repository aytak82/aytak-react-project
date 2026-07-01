export default function MenoItem(){
    let item = [
        {
            id:2,
            title:"درباره ما"
        },
        {
            id:3,
            title:"ارتباط باما"
        },
        {
            id:4,
            title:"نمونه کار"
        }, 
        {
            id:1,
            title:"صفحه اصلی"
        },
    ]
    return(
        <>
        {
            item.map((item)=>(
                <li key={item.id}>
                    {item.title}
                </li>
            )
            )
        }
        </>
    )
}