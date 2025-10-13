import products from '../../data/products.json'
import { useParams } from 'react-router-dom'
import Rating from './Rating';

function ProductsDetails() {
  const {id}=useParams()
  const product = products.find((p)=>p.id===parseInt(id));

  if(!product){
    return <div>product not found!</div>
  }

  
  return (
    <>
      <section className='bg-gray-200'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center gap-3 py-20 mx-2 md:mx-[10%]'>
            <p className='capitalize roboto-600 text-2xl'>{product.category}</p>
            <p className='roboto-400 text-md text-gray-500 text-center text-wrap '>Urban Jatra is more than just fashion — it's a journey through style, culture, and modern expression. Inspired by the rhythm of city life, we bring you thoughtfully curated clothing and accessories that blend comfort with contemporary design. Whether you're exploring the streets or heading to a casual hangout, Urban Jatra moves with you — bold, vibrant, and authentically yours.</p>
          </div>
        </div>
      </section>


    <section className="container mx-auto my-10 md:my-20">
      <div className='grid grid-cols-1 md:grid-cols-[60%35%] gap-[3%]'>
        <div className='flex justify-center md:justify-end'>
          <img src={product.image} alt={product.name} className="w-[80%] rounded-lg" />
        </div>

        <div className='flex flex-col gap-2 items-center md:items-start md:justify-center'>
          <h1 className="text-3xl roboto-600 mt-4">{product.name}</h1>
          <Rating rating={product.rating} />
          <p className="text-lg text-gray-700 roboto-400 mt-2">{product.description}</p>
          <p className="mt-2 text-xl roboto-400 font-semibold text-green-600">${product.price}</p>
          {
            product.oldPrice && (<p className="line-through text-gray-500 roboto-400">${product.oldPrice}</p>)
          }
          <p className="mt">Color: {product.color}</p>
          <button className='bg-red-500 hover:bg-red-600 px-2 py-2 rounded-sm text-white poppins-500'>Add to Cart</button>
        </div> 
      </div>
    </section>
    </>
  )
}

export default ProductsDetails