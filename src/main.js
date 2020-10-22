let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，我是一名前端工程师
 *接下来我要展示一下我的前端功底
 *首先，我要准备一个div
 **/
#div1{
    border: 1px solid red;
}
/*接下来我要把div变成一个八卦图
 *注意看好了
 *首先，把div变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
    border: none;
}
/*八卦是阴阳组成的
 *一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
                rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, 
                rgba(0,0,0,1) 100%);
}
/*阴阳衍化出两条阴阳鱼
 *互相交融
 *首先是黑色阴阳鱼
**/
#div1::before{
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%,
                rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, 
                rgba(0,0,0,1) 100%);
}
/*然后是白色阴阳鱼**/
#div1::after{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(18,18,18,1) 25%, rgba(255,255,255,1) 25%, 
    rgba(255,255,255,1) 100%);
}
/*最后，再装个逼
 *我要让这个八卦转起来
 **/
#div1{
    animation: x 10s infinite linear;    
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
            if (string[n] === `\n`) {
                string2 += "<br>"
            } else if (string[n] === " ") {
                string2 += "&nbsp;";
            } else {
                string2 += string[n];
            }
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, 99999);
            html.scrollTo(0,99999);
            if (n < string.length - 1) {
                n += 1;
                step();
            }
        }, 50
    )
}

step();