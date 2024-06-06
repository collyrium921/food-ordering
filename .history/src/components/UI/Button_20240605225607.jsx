export default function Button({children, textOnly, className}){
    let cssClasses = textOnly?'text-button':'button';
    cssClasses+= ' '+className;
    return <button>{children}</button>
}