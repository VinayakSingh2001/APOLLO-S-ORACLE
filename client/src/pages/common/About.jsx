import React from 'react'
import Header from '../../components/Header';

export default function About() {
  return (<>
    <Header />
    <div>
        <div class="max-w-[1320px] md:py-[80] py-5 flex mx-auto sm:flex-row flex-col px-1">
            <div class="basis-[45%] pb-5" >
            <img src="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/ed6cozjawexldjs7yedn" class="w-full" />
            </div>
            <div class="basis-[55%] px-5"> 
                <h1 class="text-4xl pb-2 text-bold">QUIZIFY - Where Learning Becomes Playful!</h1>
                <p class="py-2 text-lg">At QUIZIFY, we're dedicated to transforming learning into an exciting adventure through interactive quizzes that engage, enlighten, and entertain. Our platform is a hub for individuals of all ages and backgrounds to explore, learn, and challenge themselves.</p> 
                <h1 class="text-2xl text-bold">Our Mission</h1>
                <p class="py-1 text-lg">We're passionate about transforming learning into an exciting journey by creating engaging quizzes that spark curiosity, encourage exploration of diverse topics, and support personal growth. We aim to make learning enjoyable and accessible for everyone, fostering a lifelong love for discovering new knowledge and skills.</p>
            </div>
            


        </div>
        <div class="max-w-[1320px] md:py-[80] py-5 mx-auto px-2">
                <h1 class="text-2xl text-bold text-[red] py-2">What Sets Us Apart</h1>
                <ul class="text-lg py-1" style={{ listStyleType: 'disc' }} >
                <li>
                    <span>Tailored Quizzes : </span>
                    Dive into quizzes crafted by experts or create your quizzes on topics that captivate your interest.
                </li>
                <li>
                    <span>Insightful Analysis : </span>
                    Uncover in-depth analysis after each quiz, gaining insights into your strengths and areas to improve.
                </li>
                <li>
                    <span>User-Centric Design : </span>
                    Our platform is intuitively designed for seamless navigation, progress tracking, and easy access to your previous quiz attempts.
                </li>
                </ul>
                <h1 class="text-2xl text-bold text-[blue] mt-4">Get in Touch</h1>
                <p class="py-1 text-lg">Your feedback is invaluable. Whether you have questions, suggestions, or simply want to connect, we're here for you. Your input helps us enhance QUIZIFy and tailor it to meet your learning desires.</p>
                <p class="py-1 text-lg">Thank you for choosing QUIZIFY as your go-to learning companion. Prepare to embark on an exhilarating quest of discovery, learning, and enjoyment!</p> 
        </div>
    </div></>
  )
}
