/* eslint-disable */
import logo from './logo.svg';
import './App.css';

let a={
    name:"hoang",
    age:20,
    likes:[
        {title :"game",
        content: "choi game vui !!!!",
    },
    {title :"bóng",
        content: "choi game vui !!!!",
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
           {a.likes.map(item=> <div className="div-main">
                <div className="div-main1">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            </div>)}
            <div className="div-main">
                <div className="div-main1">
                    <h2>Text Here 01</h2>
                    <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention</p>
                </div>
            </div>
            <div className="div-main">
                <div className="div-main1">
                    <h2>Text Here 01</h2>
                    <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention</p>
                </div>
            </div>    
        </div>
  </>
  );
}

export default App;
