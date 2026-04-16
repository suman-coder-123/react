import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [photos , setPhotos ] = useState([]);
    const [page , setPage] = useState(1);
    const [loading , setLoading] = useState(false);


    useEffect(() => {
        fetchPhotos();
    },[page]);

    async function fetchPhotos() {
        try {
            setLoading(true);
            const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
            const data = await res.json();
            setPhotos(data);
        }catch(error){
            console.log("error : " , error );
        } finally{
            setLoading(false);
        }
    }

  return (
    <div>
        <h1 className='text-center font-bold'>picsum gallery </h1>

        {loading && <p> data load ho raha he .....................</p>};

        <div className='flex flex-wrap m-3'>
            {photos.map((photo) => (
                <div key={photo.id}
                className=' m-4'>
                    <img
                     src={`https://picsum.photos/id/${photo.id}/200/300.jpg`} 
                     alt={photo.author} />

                     <p>{photo.author}</p>
                </div>
            ))}

            <div>
                <button onClick={() => setPage(page-1)}
                disabled= {page=== 1}
                    className='bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400'
                    >
                        Prev
                </button>

                <span className='font-bold'>page {page}</span>

                <button onClick={() => setPage(page+1)}
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                    >
                        Next
                </button>
            </div>
        </div>

      
    </div>
  )
}

export default LocalStorage
