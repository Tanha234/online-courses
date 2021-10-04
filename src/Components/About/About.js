import React from 'react';
import about from '../../about.png'
import '../About/About.css'
import pre from'../../pre.png'
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <div className="about-Info">
        <div className="d-flex container">
            <div className="col-md-6 mt-5 ">
                <img src={about} alt=""/>

            </div>
            <div className="col-md-6 mt-5 me-5 text-about">
                <h1>About Us </h1>
               <p>Online learning is catalyzing a pedagogical shift in how we teach and learn. There is a shift
away from top-down lecturing and passive students to a more interactive, collaborative
approach in which students and instructor co-create the learning process. The Instructor’s role
is changing from the “sage on the stage” to “the guide on the side.” In years past, instructors had to create their “virtual classrooms” from scratch which was difficult
and often led to poor results. Today, an entire industry has emerged to do this for us. Course
Management System (CMS) software is utilized by just about all colleges today. CMS allow
instructors to design and deliver their courses within a flexible framework that includes a number
of different tools to enable learning and communication to occur. This point of view maintains that people actively construct new knowledge as they interact with
their environment. This is a student-centered approach in which students “co-create” their 
Introduction to Online Teaching and Learning Joshua Stern, Ph.D.
3
learning experience. This approach empowers students as active learners instead of just
passive recipients absorbing information and reproducing it for standardized tests. </p>
            </div>
        </div>
       <div className="d-flex mt-5 container">
           <div className="col-md-6 text-about">
           <h1>Why we are superior</h1>
               <p>The online facilitator should be open, concerned, flexible, and sincere. An online instructor must
be able to compensate for the lack of physical presence in the virtual classroom by creating a
supportive environment where all students feel comfortable participating and especially where
students know that their instructor is accessible. Failure to do this can alienate the class both
from each other and from the instructor and would make for a very weak learning environment.
Online students are as busy, or busier, than anyone else in today's hurried world. An online
instructor should be willing to give individual attention to students who may need extra help.
Being sensitive, open and flexible is mandatory for success in the online realm.Through Private Messages students and faculty can communicate. Among other things, this
allows instructors to be proactive by following up on students who are not participating in chats,
discussions, etc. Students and faculty can also communicate through the discussion forums. </p>

           
           </div>
           <div className="col-md-6">
               <img src={pre} alt=""/>
               
           </div>

       </div>
       <Footer></Footer>
            
        </div>
    );
};

export default About;