import React from 'react'

function Table (){
const arr = [ {
    image:"https://rukminim2.flixcart.com/image/850/1000/kyhlfgw0/shoe/i/7/s/7-rso173a-red-tape-off-white-original-imagapm5p3zumfj2.jpeg?q=20&crop=false",
    company:"Radtape",
    size:6,

},{
    image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18274390/2022/5/14/c64644f6-840f-4496-bb42-19359e9881771652523841987RoadsterMenBrownTexturedPUSneakers1.jpg",
    company:"Roadster",
    size:6,

},{
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/revolution-7-road-running-shoes-dC34tK.png",
    company:"nike",
    size:6,

},{
    image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24093858/2023/9/7/d52db365-f376-40c9-8230-7f73d3811f461694064561271-Mercedes-AMG-Petronas-F1-Tiburion-Unisex-Sneakers-7381694064-1.jpg",
    company:"puma",
    size:6,

},
{
    image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/d/7/n/-original-imaghvbbgksxmy2f.jpeg?q=90&crop=false",
    company:"Bata",
    size:6,
},{
    image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18274390/2022/5/14/c64644f6-840f-4496-bb42-19359e9881771652523841987RoadsterMenBrownTexturedPUSneakers1.jpg",
    company:"Roadster",
    size:6,

},{
    image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/revolution-7-road-running-shoes-dC34tK.png",
    company:"nike",
    size:6,

},{
    image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24093858/2023/9/7/d52db365-f376-40c9-8230-7f73d3811f461694064561271-Mercedes-AMG-Petronas-F1-Tiburion-Unisex-Sneakers-7381694064-1.jpg",
    company:"puma",
    size:6,

}
]
{
  return (
    <div>
     {/* <table>
        <tr>
            <th>name</th>
            <th>subject</th>
            <th>collage</th>
            <th>marks</th>
            <th>image</th>
        </tr>
        {arr.map((items,index)=>{
            return (
           <tr>
           <td> {items.name}</td>
           <td>{items.subject}</td>
           <td>{items.collage}</td>
           <td>{items.marks}</td>
           <td> <img className='h-[20vh] w-[100%]' src={items.image} /></td>

           </tr>
            )
        })}
     </table>  */}
     <div  className='divvv '>
{
    arr.map((item, index)=>{
        return(
            <div className='inner-div6'>
                <img className=" img8"src={item.image} />
                <p >Company-<span>{item.company}</span></p>
                <p> Size-<span>{item.size}</span></p>
                <button className='ADDTO'>Add To Cart</button>
            </div>

        )
    })}
</div>
    <div className='ADD '>
     <h1>ADD TO CARD</h1>
    </div>

     
     </div>
  )
}
}

export default Table




