// function customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)
// }

// const reactElement={
//     type:"a",
//     props:{
//         href:"https://google.com",
//         target:"_blanks"
//     },
//     children:"click to me "
// }

// const mainContainer = document.querySelector("#root")
// customRender(reactElement,mainContainer)
// function customRender(ReactElement,container){
//     const domElement = document.createElement(ReactElement.type)
//     domElement.setAttribute("src",ReactElement.props.src)
//     container.appendChild(domElement)
// }
function customRender(ReactElement,container){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    for (const prop in ReactElement.props) {
        domElement.setAttribute(prop,ReactElement.props[prop])
        container.appendChild(domElement)
    }

}
const ReactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
    children:"click me"
}
const mainContainer = document.querySelector("#root")
customRender(ReactElement,mainContainer)