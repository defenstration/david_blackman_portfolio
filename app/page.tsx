import Image from "next/image"

export default function Home() {
  return (
    <div className = "w-full">
        <section id = "hero-section" className = "flex w-full justify-evenly">
          <div id = "hero-text">
            <h2>Dog Lover, Web Developer</h2>
            <p>Web developer working with HTML, CSS, Javascript, React, Node.js, and Next.js. </p>
          </div>

          <div id = "hero-pic-container">
            <Image src = "/assets/gelly-pic.jpg" alt = "My dog Gelly" height = "500" width = "500" id = "hero-pic" />
            <p className = "pic-mouseover-info">Obviously not my picture, but Gelly with his cone is too adorable not to share.</p>
          </div>


        </section>
        <section id = "about-section">

          <div id = "about-header" className = "flex w-full justify-evenly">
            <div id = "my-pic-container" >
              <Image src = "/assets/gelly-pic.jpg" alt = "My picture" height = "500" width = "500" id = "my-pic" />
              <p>This is me. I know, not as cute right?</p>
            </div>

            <div>
              <h2>About Me</h2>
                <p>I live in upstate New York with my partner, our three dogs, and cat. </p> 
            </div>            
          </div>



          <div id = "about-card-container" className = "flex w-full justify-around">
            <div className = "about-card">
              <h3 className = "card-title">Experience</h3>
              <p className = "card-contents">Most of my career has been in manufacturing. I developed a problem solving mindset in a production setting, with shifting deadlines and customer requirements. I understand how to approach those situations. The issue I had was that working on that production scale led me to do repeating tasks hundreds and thousands of times everyweek.</p>
            </div>
            <div className = "about-card">
              <h3 className = "card-title">Why Web Development</h3>
              <p className = "card-contents">Web development allows me to challenge myself and learn something new everyday. There is also a creative component that just doesn&apos;t exist on the production floor. There certainly are best practices, you can see that with accessability requirments, but solving the problems isn&apos;t as simple as following the correct rework proceedures. I get to build, not just produce.</p>
            </div> 
            <div className = "about-card">
              <h3 className = "card-title"></h3>
              <p className = "card-contents"></p>
            </div>  
          </div>
        </section>
    </div>
  );
}
