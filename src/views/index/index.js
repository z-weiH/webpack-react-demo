import React from 'react';
import ReactDOM from 'react-dom';

let span = <span>我是span哦</span>;
class Mdemo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                {
                    span
                }
            </div>
        )
    }
}
ReactDOM.render(<Mdemo />,document.getElementById("root"));

alert('react初始化成功');
