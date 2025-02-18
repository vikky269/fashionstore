import React from 'react'

const Testimony = [
    {
        id:"1",
        name: "Mariam Mohammed",
        message:"The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
    },
    {
        id:"2",
        name: "Mrs Justina Ifunanya",
        message:"I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
    },
    {
        id:"3",
        name: "Mrs Olanike Bello",
        message:"I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
    }
]


const Feedback:React.FC = () => {
  return (
      <section className='flex flex-col items-center justify-center font-title'>
          
          <h1 className='text-[#1A1A1A] md:text-4xl px-3 text-3xl flex-wrap font-medium mb-4'>FeedBack Corner</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-6 py-4 mx-4'>
              {Testimony.map((item, index) => (
                  
                      <div  key={index} className='flex flex-col items-start justify-start p-6 shadow-lg cursor-pointer rounded-md hover:bg-[#d1ac30]'>
                          <img src='/feed.png' alt={item.name}  />
                          <h3 className='mt-4 text-lg font-medium text-black'>{item.name}</h3>
                          <p className='mt-2  max-w-[17rem] md:max-w-[19rem] text-black text-sm'>{item.message}</p>
                      </div>
                  
              ))}
          </div>
      </section>
    )
}

export default Feedback
