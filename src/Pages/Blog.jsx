import React from 'react'
import Navbar from '../Components/Navbar'
import '../Assets/styles/global.css'
import Footer from '../Components/Footer'
import blog from '../Assets/Images/Rectangle.png'
import pic1 from '../Assets/Images/Ellipse-2.png'
import pic from '../Assets/Images/Ellipse-3.png'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-[90em] m-auto grid justify-left '>
            <header className='mx-[2em] md:mx-[10em] lg:mx-[20em] mt-[5em] '>
                <h1 className='h1 text-secondary-10 md:w-full'>A smart way to deal with your business clients</h1>
                <div className='flex text-white-30 p4 w-1/2 space-x-2'>
                    <p className='border-r-2 border-white-30 pr-[1em]'>Shedrack eze</p>
                    <p>2nd January,2022</p>
                </div>
            </header>

        </div>

        <div className='m-auto max-w-[80em] '>
            <div className='md:mx-[10em] mx-[2em] m-auto flex flex-col justify-center items-center mt-[5em] space-y-[3em]  '>
                <img src={blog} className='w-cover' alt="" />

                <div className='text-secondary-10 p3 lg:px-[10em] space-y-[2em] '>
                    <p>If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!</p>
                    <p>
                    In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.

                    </p>
                    <p>
                    Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.

                    </p>

                    <p>
                    Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.

                    </p>

                    <p>

                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 
                    </p>

                    <p>
                    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.

                    </p>

                    <div className='flex w-2/4 items-center  space-x-2'>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                        <div className='space-y-1 flex flex-col'>
                            <p className='p4 text-secondary-10'>Written by</p>
                            <p className='p3 text-secondary-10'>Shedrack Eze</p>
                            <p className='p4 text-white-30'>Lead Chase Team</p>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-white-30'> Join the conversation</p>
                        <div className='flex space-x-2'>
                            <div>
                            <img src={pic} alt="" />

                            </div>
                            <textarea name="" id="" cols="30" rows="10" className=' border w-full border-white-30'></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Blog