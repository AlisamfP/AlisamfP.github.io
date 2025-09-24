type ListItemProps = {
    text: string;
}


const ListItem = ({ text }: ListItemProps) => {
    return (
        <>
            <span>&#8226;</span>
            <li>{" "}{text}</li>
        </>
    )
}


export default ListItem;