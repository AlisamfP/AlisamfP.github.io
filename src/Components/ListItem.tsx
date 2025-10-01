type ListItemProps = {
    text: string;
}

const ListItem = ({ text }: ListItemProps) => {
    // #8226 is just a smaller bullet point
    return (
        <li className="grid grid-cols-[max-content_1fr] gap-2">
            <span>&#8226;</span>
            <div>{" "}{text}</div>
        </li>
    )
}


export default ListItem;