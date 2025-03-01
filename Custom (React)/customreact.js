function customRender(ReactDomElem,mainContainer){
    const domElement = document.createElement(ReactDomElem.type)
    domElement.innerHTML(ReactDomElem.children)
    domElement.setAtribute('href',ReactDomElem.props.href)
}

const ReactDomElem = {
    type: 'a' ,
    props :{
        href :"https://google.com",
        target:'_blank'
    },
    children: "Click me to open google",
}

const mainContainer = document.getElementById('#root')

customRender(ReactDomElem,mainContainer)