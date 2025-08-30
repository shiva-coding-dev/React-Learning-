export default function TabButtons({children , isSelected,...props }){
    return (
        <li>
            <button className = {isSelected ? "active" : undefined} {...props} >{children}</button>
        </li>// chilren refers to the content between the Tabbutton used in the App 
    );
}