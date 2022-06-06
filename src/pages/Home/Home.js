import "./Home.css";
 
const Home = () => {
    return(

    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">On going Projects</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
          <span className="featuredMoneyRate">
            -1.4 <div className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Completed Projects</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">12</span>
          <span className="featuredMoneyRate">
            +2.4 <div className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
       
    </div>
    );

};

export default Home;