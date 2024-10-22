import React, { useEffect,useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Tshirt from "../assets/T shirt.png"
import png from "../assets/npg tshirt.png"
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import video from "../assets/AnimeV.webm"
import benner from "../assets/banner/anime-banner.jpg"
import cardTshirt from "../assets/cards/anime t shirt.png"
import seasonal from "../assets/cards/sweatshirt.png"
import clothing from "../assets/cards/many t shirts.png"



 
export default function Home({setshowcard}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(8)
  const [productfilter , setproductsfilter] = useState([])



  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data)
      setProducts(response.data)
    }
    fetchData()
  },[])

  useEffect(()=>{
     const filterdata = products.filter(item=>item.id<=open)
     setproductsfilter(filterdata)
  },[open,products])

  function hendlepage(id){
    let data = products.filter(item=>item.id == id)
    setshowcard(data)
    navigate("/customized")
  }

  return (


    <div className="w-screen ">
      
      <Carousel interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg"
          alt='first'
          style={{ width: '100%', height: '700px', background:"red"}}
        />
       
       
      </Carousel.Item>
       
      <Carousel.Item>
        <img
          src="https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og"
          alt='second'
          style={{ width: '100%', height: '700px',background:"blue" }}
        />
      
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg"
          alt='third'
          style={{ width: '100%', height: '700px', background:"green" }}
        />
      
      
      </Carousel.Item>
    </Carousel>
      
      
    <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20'>
  <img src={benner}  className='w-full h-full'/>
</div>
      
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]} 
        spaceBetween={5} 
        navigation
        pagination={false}
        scrollbar={false}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
           768: {
            slidesPerView: 2, // 2 slides for smaller screens
          },
       
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3, // 3 slides for larger screens
          },
        }}
        className=" h-[300px] mt-20 "
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7N6ap5l4358wXx4jlC9RgF3Z3Q_pAHRyYw&s" alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2022/07/30/Anime-Lover-TShirt-Design-Bundle-Graphics-35158811-1-1-580x386.jpg" alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2022/04/23/Anime-TShirt-Design-Bundle-Graphics-29517084-2-580x386.jpg" alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://i5.walmartimages.com/seo/If-It-Doesn-t-Have-To-Do-With-Anime-Video-Game-Or-Food-T-Shirt_5e8a05fd-a7dc-4552-8950-326b312c03f6.bce5854dd3a4088a94ce44b77ede0256.jpeg" alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 5" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 6" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 7" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 8" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
      <br/>
      
  



      <div   className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mt-20  p-5 "   >
      {/* w-48 sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96 */}

<div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/Tshirt")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 '>
    <img
      src={cardTshirt}
      className=' w-full h-full  align-middle'
      alt="Tshirt"
    />
  </div>
</div>

<div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/bottom-wear")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 '>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6shZ9JVDI-tUgY7HhoxFfcQ6zLf1Tm-Jg&s"
      className=' w-full h-full  align-middle'
      alt="bottom-wear"
    />
  </div>
</div>

  {/* w-48 sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96  */}
  <div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/Hoodie")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 '>
    <img
      src={seasonal}
      className=' w-full h-full  align-middle'
      alt="Tshirt"
    />
  </div>
</div>
 
  <div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/seasonals")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 object-center'>
    <img
      src={clothing}
      className=' w-full h-full  align-middle'
      alt="Tshirt"
    />
  </div>
</div>

</div>

      <br/>


      <h1 className='font-semibold text-4xl text-center mt-5'>Latest Collection</h1>
      {/* className='flex  align-center gap-3 w-full p-5 flex-wrap mt-5 xl:ml-20 ml-10  */}

     <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16  mt-20  ">
     {
        productfilter.map((product,index)=>(
        <div key={index}  className='relative xl:w-80 w-48 overflow-hidden h-96 bg-gray-100 hover:bg-gray-200  max-h-fit pb-14 xl:max-h-fit  '> 
        <p className='absolute  left-4 rounded-sm bg-red-500 text-white text-xs py-1 top-4 px-3'>new</p>
        <p className='absolute right-4 top-4'><FcLike size={30}/></p>
        <div className='w-52  h-3/4 bg-transparent'>
          <img src={png} alt="Image" className='object-center'/>
        
        </div>
         <div className='flex justify-center gap-5 align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-2 border-black  px-3 rounded'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 '>{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-md p-2 mt-3 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
     
      <button onClick={()=>navigate('new-arrivals')} className='  mt-10 ml-36  xl:ml-[167vh] rounded-md font-semibold p-1 px-5 '>View More</button>
      
      <div className=' h-[500px]'>
        <video src={video}   loop muted autoPlay className='w-full h-[500px]  mt-10 object-cover '></video>
      </div>
      
      
      <h1 className='font-semibold text-4xl text-center mt-20'>Our Arrivals</h1>
      <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16  mt-20">

     {
        productfilter.map((product,index)=>(
        <div  key={index} className='relative  xl:w-80 w-48 overflow-hidden xl:h-96 bg-gray-100 hover:bg-gray-300 max-h-fit pb-10 '>
            <p className='absolute right-4 top-4'><FcLike size={30}/></p> 
          
          <img src={png} alt="" className='w-full h-52  '/>
         <div className='flex justify-center gap-5 align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-2 border-black  px-3 rounded'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 tracking-tighter' >{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-md p-2 mt-5 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
     <button onClick={()=>navigate('new-arrivals')} className='border-2 border-black  mt-2 ml-32 xl:ml-[167vh] rounded-md font-semibold p-1 px-5 '>View More</button>
     <h1 className='text-black xl:text-5xl  text-3xl text-center mt-5'>Create you now customize T shirt</h1>

     <div className='flex justify-center items-center mt-2'>
  <div className='xl:w-[69rem]  rounded-md mx-auto bg-red-50 xl:h-[600px] flex justify-center items-center'>
   <img src={Tshirt} alt='Image' className='relative w-96 h-96 p-5 xl:w-[500px] xl:h-[500px] animate-rotateLR'/>
   <h1 className='absolute text-6xl xl:text-9xl font-semibold ml-32 mb-20'>T   SHIRT </h1>
   <h1  className='absolute text-1xl xl:text-3xl font-semibold xl:ml-72 xl:mt-16 ml-52'>ANIMATED MOCKUP</h1>
  </div>
</div>



<div className='snap-x flex overflow-x-auto  w-screen justify-start gap-28  p-5 scroll-auto mt-5 scrollbar-hide'>
  {
    productfilter.map((product, index) => (
      <div onClick={()=>hendlepage(product.id)} key={index} className='cursor-pointer flex-shrink-0 snap-center w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10'> 
        <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52'/>
        <div className='flex justify-around align-middle mt-3'>
          <h2>{product.category}</h2>
          <h2 className='border-5 border-black'>{product.price}</h2>
        </div>
        <p className='text-xs ml-3 mt-2 '>{product.title}</p>
        <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
      </div>
    ))
  }
</div>

    </div>
    
  );
}