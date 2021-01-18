
let Article = ({title,text,author}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <span>{author}</span>
        </div>
    );
};

export default Article