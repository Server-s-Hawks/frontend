import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Home.css";
 
const Home = () => {
 


  const [post, setData] =useState(0);

  // const loadData =async () => {
  //     const response =await axios.get("http://localhost:5000/api/getNumProject");
  //     setData(response.data);
  //     console.log(data);
  // };
  const baseUrl="http://localhost:5000/api/getNumProject";
  
  useEffect(() => {
    axios.get(baseUrl)
    .then((response) => {
      setData(response.data);
      console.log(response);
      const count=post.values;
    });
  }, []);

    return(

      <div> 
   {/* // <div className="featured"> */}

      {/* <div className="featuredItem">
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
      </div> */}
      {/* <h1>Hello world!</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p> */}

      <h1>{post.count}</h1>
       
     
       
    </div>
    );

};

export default Home;