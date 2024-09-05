// import React, { useEffect, useState } from 'react'
// import cross_icon from '../../assets/cross_icon.png'
// import './ListProduct.css'

// const ListProduct = () => {
//     const[allproducts,setAllProducts]=useState([]);

//     const fetchinfo=async()=>{
//         await fetch('http://localhost:4000/allproducts')
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             setAllProducts(data)});
//     }
    
//     useEffect(()=>{
//         fetchinfo();
//     },[])

//     const remove_product=async(id)=>{
//         await fetch('http://localhost:4000/removeproduct',{
//             method:'DELETE',
//             headers:{
//                 Accept:'application/json',
//                 'Content-Type':'application/json',
//             },
//             body:JSON.stringify({id:id})
//         })
//         await fetchinfo();
//     }
//   return (
//     <div className="list-product">
//         <h1>All Product Lists</h1>
//         <div className="listproduct-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Old Price</p>
//             <p>New Price</p>
//             <p>Category</p>
//             <p>Remove</p>
//         </div>
//         <div className="listproduct-allproducts">
//             <hr />
//             {allproducts.map((product,index)=>{
//                 return<>
//                 <div key={index} className='listproduct-format-main listproduct-format'>
//                         <img key={product} src={product.image} className='listproduct-product-icon'  alt="" />
//                         <p>{product.name}</p>
//                         <p>${product.old_price}</p>
//                         <p>${product.new_price}</p>
//                         <p>{product.category}</p>
//                         <img onClick={()=>{remove_product(product.id)}} src={cross_icon} className="listproduct-remove-icon" alt="" />
//                     </div>
//                     <hr/>
//                 </>
                
//             })}
//         </div>
//     </div>
//   )
// }
// export default ListProduct

import React, { useEffect, useState } from 'react'
import cross_icon from '../../assets/cross_icon.png'
import './ListProduct.css'

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchinfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllProducts(data)
            });
    }

    useEffect(() => {
        fetchinfo();
    }, [])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchinfo();
    }

    return (
        <div className="list-product">
            <h1>All Product Lists</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product, index) => {
                    return (
                        <React.Fragment key={product.id}>
                            <div className='listproduct-format-main listproduct-format'>
                                <p>{product.image}</p>
                                {/* <img src={product.image} className='listproduct-product-icon' alt={product.name} /> */}
                                <p>{product.name}</p>
                                <p>${product.old_price}</p>
                                <p>${product.new_price}</p>
                                <p>{product.category}</p>
                                <img onClick={() => { remove_product(product.id) }} src={cross_icon} className="listproduct-remove-icon" alt="Remove" />
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    )
}
export default ListProduct
