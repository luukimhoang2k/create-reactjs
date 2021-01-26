/* eslint-disable */
import logo from './logo.svg';
import './App.css';

const a={
    name:'hoàng',
    age:20,
    lists:[
        {
            title:'Football',
            content:'Play Football'
        },
        {
            title:'Volleyball',
            content:'Play Volleyball'
        },
        {
            title:'Basketball',
            content:'Play basketball'
        },
        {
            title:'Game',
            content:'Play game'
        }
    ]

};

export default function App(proos){
    return (<div className="layout">
    <div className="layout_left">
            <div className="avata">
                <img src={logo}></img>
            </div>
            <div className="intro_basic">
                <h2>Hello</h2>
                <h3>My Name is {a.name}</h3>
            </div>
    </div>
    <div className="layout_right">
        <div className="intro_basic1">
            <h3>asdddddddddasdasdasdasdasd</h3>
            <h3>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
        </div>
        <div className="div_line">
            <div className="line"></div>
            <div className="circle left"></div>
            <div className="circle right"></div>
        </div>
        <div className="div_content">
            {a.lists.map(item => <div className="content">
                <div className="content1">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            </div>)}
       </div>
    </div>
</div>)
}

