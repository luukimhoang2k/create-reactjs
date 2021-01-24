/* eslint-disable */
import logo from './logo.svg';
import './App.css';

let a={
    name:"hoang",
    age:20,
    likes:[
        {title :"Game",
        content: "choi game vui !!!!",
    },
    {title :"Football",
        content: "choi football vui !!!!",
    },
    {title :"Volleyball",
        content: "choi volleyball !!!!",
    },
    {title :"Basketball",
        content: "choi basketball !!!!",
    }
       
    ]
};


function App() {
  return (
    <>
    <div className="heading">
          <div className="img-heading">
              <img src={'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'} alt="avatar" className="img-div"/>
          </div>
                <h1 className="name-h1">Hello</h1>
                <h3 className="name-h2">My Name is {a.name}</h3>
                <div className="heading1">
                    <h1>introducing Yourseft Self </h1>
                    <h1>introduction with Text Boxes</h1>
                </div>
    </div>
    <div className="main">
           {a.likes.map(item => <div className="div-main">
                <div className="div-main1">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            </div>)}
              
        </div>
  </>
  );
}

export default App;
