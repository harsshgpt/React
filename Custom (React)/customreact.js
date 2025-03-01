function customRender(ReactDomElem,Container){
    // const DomElement = document.createElement(ReactDomElem.type)
    // DomElement.innerHTML = ReactDomElem.children
    // DomElement.setAttribute('href',ReactDomElem.props.href)
    // DomElement.setAttribute('target',ReactDomElem.props.target)
     
    // Container.appendChild(DomElement);
   
    //loop based code

    const DomElement =  document.createElement(ReactDomElem.type)
    DomElement.innerHTML = ReactDomElem.children
    
    for (const prop in ReactDomElem.props) {
        if(prop === "children") continue;
        DomElement.setAttribute(prop,ReactDomElem.props[prop])
            
        }
        Container.appendChild(DomElement);
    }

    

    



const ReactReactDomElem = {
    type: 'a' ,
    props :{
        href :"https://google.com",
        target:'_blank'
    },
    children: "Click me to open google",
}

const mainContainer = document.getElementById('root')

customRender(ReactReactDomElem,mainContainer)