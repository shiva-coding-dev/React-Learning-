export default function TabButtons({children , onSelect , isSelected}){
    
    return (
        <li>
            <button className = {isSelected ? "active" : undefined} onClick = {onSelect} >{children}</button>
        </li>// chilren refers to the content between the Tabbutton used in the App 
    );
}