import "./App.css";
import CasinoDataOne from './pages/CasinoDataOne';
import Footer from "./pages/Footer";
import Header from "./pages/Header";

import newImg from "./assets/New-Casino-Sites-Call-To-Action-Button.png.webp";
import HeaderImg from "./assets/Online-Casino-Groups-Header-image.webp";
import popImg from "./assets/Popular-Casino-Groups-Call-To-Action-Button.png.webp";
import bonImg from "./assets/This-Months-Bonuses-Call-To-Action-Button.png.webp";
import topImg from "./assets/Top-Rated-Casinos-Call-To-Action-Button.png.webp";
import all from "./assets/all-online-casino-groups.webp";
import area from "./assets/areaOne.webp";
import area3 from "./assets/areaThree.webp";
import area2 from "./assets/areaTwo.webp";
import ten from "./assets/top-10-online-casinos-per-country.webp";



function App() {
  return (
    <>
      <div>
        <Header></Header>

        <section className="banner">
          <div className="container">
            <h1 className="title">
              Welcome to Online Casino Groups: The Only Reputable Online Casinos
              Database
            </h1>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="top">
                      <img src={topImg} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="top">
                      <img src={newImg} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="top">
                      <img src={popImg} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="top">
                      <img src={bonImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header">
                  <img src={HeaderImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg3">
         <div className="container-fluid pt100">
         <div className="container">
            <div className="row m50">
              <div className="col-md-4">
               <div className="casino-area-data">
                <h3>The Most Extensive Database About Online Casino Groups​</h3>
               </div>
              </div>
              <div className="col-md-4 img-casino-data">
                <img src={all} alt="" />
              </div>
              <div className="col-md-4 img-casino-data"  >
              <img src={ten} alt="" />
              </div>
            </div>
          </div>
         </div>
        </section>

        <section>
          <div className="container-fluid p0">
          <div className="casino-area-data2 text-center">
                <h3>Top New Online Casinos​</h3>
               </div>
          </div>

          <CasinoDataOne></CasinoDataOne>
        </section>

        <section>
          <div className="container-fluid p0 bg3">
         <div className="container">
         <div className="casino-area-data4">
                <h3>We Are Expanding Our Online Presence​</h3>
                <p>
Hey there, fellow gamers! Dive into exclusive online casino experiences with us at Online Casino Groups on YouTube & Kick.

Our channel is your go-to hub for thrilling gameplay and insider insights. We believe in sharing the excitement, and our videos take you on a virtual adventure, showcasing firsthand experiences of playing online casino games.

We spill the beans on what makes the gaming journey unforgettable. Subscribe to our channel, hit that notification bell, and join the community where we share the highs, lows, and everything in between of our online casino escapades.</p>
          </div>
         </div>
          </div>
        </section>


        <section>
          <div className="container-fluid p0 bg30">
         <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className="casino-area-data4 text-start">
                <h3 className="white">All Casino Reviews​</h3>
                <p>
                Navigating the world of online casinos can be a bit overwhelming, but fear not! Onlinecasinogroups.com has your back with our comprehensive collection of casino reviews.

Dive into a treasure trove of insights where each review is crafted with your gaming experience in mind. From the dazzling variety of games to the nitty-gritty details of bonuses and customer support, we got you covered.

The user-friendly layout makes finding your preferred casino a breeze, and the reviews are tailored to cater to all players. So, whether you're on the lookout for the hottest slots or seeking the best bonuses, onlinecasinogroups.com is your go-to guide, ensuring you make informed choices in the thrilling realm of online gaming.

Happy exploring!.</p>
          </div>
          </div>
          <div className="col-md-6 flex-img">
              <img src={area} alt="" className="img-fluid"/>
          </div>
          </div>
         </div>
          </div>
        </section>
        <section>
          <div className="container-fluid p0 bg300">
         <div className="container">
          <div className="row">
          <div className="col-md-6 flex-img">
              <img src={area2} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6">
          <div className="casino-area-data4 text-start">
                <h3 className="white">All Online Casino Groups​</h3>
                <p>
                Choosing an online casino from a prominent casino group is a one-way ticket to flawless gameplay and gaming environment with all manners.

Casino groups usually own and operate multiple casino brands under strict regulations, bringing unique features that help players win more money.

You have probably heard about Dama N.V., Rabidi N.V., Aspire Global LTD, and similar casino groups that lead the industry for decades. But, in our list you can find over 200 names and activate hundreds of online casinos with one click.

Choose your favorite casino group and don’t hesitate to enter an online casino that will become your happy place for a while.</p>
          </div>
          </div>
        
          </div>
         </div>
          </div>
        </section>
        <section>
          <div className="container-fluid p0 bg30">
         <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className="casino-area-data4 text-start">
                <h3 className="white">Our Online Casino Blog​</h3>
                <p>
                Check out the latest news and updates in the iGaming industry!

Find interesting new articles, tips and special bonus offers!

Discover seasonal promotions and take advantage of the best perks offered!

Get the answers to the questions you are looking for and learn from our expertise! </p>
          </div>
          </div>
          <div className="col-md-6 flex-img">
              <img src={area3} alt="" className="img-fluid"/>
          </div>
          </div>
         </div>
          </div>
        </section>



        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
