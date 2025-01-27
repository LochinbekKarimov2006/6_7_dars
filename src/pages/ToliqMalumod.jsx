import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ToliqMalumod() {
  const { id } = useParams();
  const [data, setProduct] = useState([]);
  const [raqam,setRaqam]=useState(0)
  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
 
console.log(data)
  

  return (
    <div className="py-[10%] bg-base-100 dark:bg-gray-800 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src={data.image} alt="Product Image" />
            </div>
            <div className="flex -mx-2 mt-10 div3">
              <div className="w-1/2 px-2 div4">
                <div className="inline-flex items-center">
                  <button onClick={()=>{setRaqam(raqam-1)}} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                 
                  <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  {raqam}
                  </div>
                  <button onClick={()=>{setRaqam(raqam+1)}} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <button className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center">
                  Add to order
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="text-left md:flex-1 px-4">
            <h2 className="text-xl font-bold text-blu-700 dark:text-slate-50">Product Name</h2>
            <p className="text-blu-700 dark:text-slate-50 text-sm mb-4">{data.name}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-blu-700 dark:text-slate-50">Price:</span>
                <span className="text-blu-700 dark:text-slate-50">${data.newPrice}</span>
              </div>
              <div>
                <span className="font-bold text-blu-700 dark:text-slate-50">Categoti:</span>
                <span className="text-blu-700 dark:text-slate-50">{data.category}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="flex font-bold text-blu-700 dark:text-slate-50">Brand:
                <p className="font-normal text-blu-700 dark:text-slate-50 mb-4">Null</p>
              </span>
            </div>
            <div className="mb-4 flex">
              <span className="flex font-bold text-blu-700 dark:text-slate-50">Coment:
                <p className="font-normal text-blu-700 dark:text-slate-50 mb-4">{data.comments}</p>
              </span>
            </div>
            <div>
              <span className="font-bold text-blu-700 dark:text-slate-50">Product Description:</span>
              <p className="text-blu-700 dark:text-slate-50 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, soluta eveniet a non facilis ipsam vero provident rem numquam assumenda voluptatum molestias suscipit nobis quod! Temporibus possimus soluta maiores a omnis quo esse et sint perferendis autem voluptatibus velit dignissimos vero doloremque exercitationem, explicabo, modi veniam assumenda? Accusantium, animi sequi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default ToliqMalumod;
 