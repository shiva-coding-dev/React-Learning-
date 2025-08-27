export default function TabButtons({children , onSelect}){
    
    return (
        <li>
            <button onClick = {onSelect} >{children}</button>
        </li>// chilren refers to the content between the Tabbutton used in the App 
    );
}