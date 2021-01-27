import react from 'react';
import PlaceholderImg from "../assets/images/team_photos/placeholder.jpg"

const OurTeam = () => {
  return (
    <div>
      <div className="team-banner">
      <div className="title-home-overlay">
        <div className="team-banner-overlay-header">Meet Our Team</div>
      </div>
      </div>
        <div className="container">
        <div className="mb-5">

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12">
              <img src={PlaceholderImg} alt="team-member"/>
            </div>
            <div className="col-lg-8 col-sm-12">
              <h2>Cameron Keehn</h2>
              <h4>Chief Executive Officer & Founder</h4>
              <p>Cameron graduated from the University of Arkansas in 2019 with a B.S. in Mechanical Engineering. 
                Shortly after graduating he chose to pursue a path in medicine and began taking prerequisite courses. 
                During these courses he noticed discrepancies between the quality of learning for students from various backgrounds and 
                became interested in studying and working to improve the gap in quality of education between groups. 
                He founded Smart Reach in the spring of 2020 to help combat this gap and to provide communities with the tools they require to help “close the gap.”
              </p>
              <p>Contact: Cameron@thesmartreach.org</p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12">
              <img src={PlaceholderImg} alt="team-member"/>
            </div>
            <div className="col-lg-8 col-sm-12">
            <h2>Michael Mullen</h2>
              <h4>Chief Operating Officer & Co-Founder</h4>
              <p>Michael graduated from the University of Arkansas in 2017 with a Bachelor of Science in Biomedical Engineering. 
              Since then he has resided in Vail, Colorado working as a Research Associate at The Steadman Clinic and Steadman Philippon Research Institute. 
              Here, he has solidified his desire to pursue a career in medicine and is currently working to obtain admission to medical school.

              As a former tutor in college and current STEM instructor for local grade school and high school students of Eagle County, CO, 
              Michael has been moved by the disparities in education he has observed across the country. 
              After speaking with Cameron in Spring 2020, he realized a shared ideology with a vision for educational achievement 
              for all groups was possible through the founding of Smart Reach. Joining the Smart Reach team in Fall 2020, 
              Michael is now excited to embark on this journey for educational access, equality, and inclusion.

              A wannabe professional backpacker, skier, golfer, and chef, outside of Smart Reach you can find Michael enjoying 
              the outdoors or his sous vide with family and friends.
              </p>
              <p>Contact: Michael@thesmartreach.org</p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12">
              <img src={PlaceholderImg} alt="team-member"/>
            </div>
            <div className="col-lg-8 col-sm-12">
            <h2>Julia Rosenblatt</h2>
              <h4>Director of Marketing and Communications</h4>
              <p>Julia is a graduate from the University of North Texas with a concentration in the fields of Marketing and Communications. 
              Throughout the years Julia has been an advocate for helping small-businesses receive equal opportunities. 
              When COVID-19 hit, she took a job as the Community Engagement Coordinator at The DEC (Dallas Entrepreneur Center) Network,
              a 501c3 non-profit for which she considers to be the entrepreneurial hub of North Texas. Through her job, she was able to see 
              the economic disparities that affected communities on various levels, one being education. 
              Julia has been working within the Southern Sector of Dallas to help close that gap by providing resources, 
              programming, and fair chances to all individuals. Julia joined the Smart Reach team Fall of 2020 and is ecstatic 
              to work along side an amazing team of individuals to make a direct impact on the deserving, young individuals 
              through mentorship, tutoring, resources, and a fair chance. In her free time, you can find Julia spending time with her dogs, 
              playing piano, hiking, skiing, and being an active member of her community. 

              </p>
              <p>Contact: Julia@thesmartreach.org</p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12">
              <img src={PlaceholderImg} alt="team-member"/>
            </div>
            <div className="col-lg-8 col-sm-12">
            <h2>Jamieson Reinhard</h2>
              <h4>Full Stack Engineer</h4>
              <p>Jamieson is originally from Boulder, CO, and is a passionate traveller, lover of the outdoors, and software engineer. 
              Prior to building websites and apps, you could find Jamieson working as a finance manager in one of several Marriott and 
              Ritz Carlton hotels across the US and abroad. He found a knack for web development after spending some time searching for a career
               where he could be more creative and solve important problems. With his newly cultivated skill set in building software, Jamieson is now 
               freelancing on several projects, including this mission with Smart Reach. He’s become passionate about using his skills 
               for good with a few different non-profit organizations. When he isn’t building the web, Jamieson can be found planning his 
               next trip to wherever he can ski, hike, golf, eat, or experience some culture.
              </p>
              <p>Contact: jamieson.reinhard2@gmail.com</p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12">
              <img src={PlaceholderImg} alt="team-member"/>
            </div>
            <div className="col-lg-8 col-sm-12">
            <h2>Louis Garavaglia</h2>
              <h4>Front End Engineer</h4>
              <p>Louis grew up in St. Louis, MO where he found his passion for helping others by volunteering 
              for Saint Louis Crisis Nursery and Big Brothers Big Sisters. Louis went on to graduate from the University of Kansas 
              with a Bachelor's degree in Fine Art and then moved to Los Angeles, CA to work in the Film Industry. 
              After a ten year career in film, Louis has found a new passion for creating websites and technology 
              that can make the world a better place like Smart Reach. When not on his laptop, Louis is trying to spend more 
              time outside and improve his skills in the kitchen.
              </p>
              <p>Contact: louis.garavaglia@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default OurTeam;