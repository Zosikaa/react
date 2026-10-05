function Article(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Autor: {props.author}</p>
            <p>{props.content}</p>
        </div>
    );
}

function ArticleParent() {
    return (
        <div>
            <Article
                title="React 18"
                author="Jan"
                content="React jest super!"
            />
        </div>
    );
}

export default function Zadanie1() {
    return (
        <div>
            <br></br>
           <p> Zadanie1 </p>
           <ArticleParent />
            <br></br>
        </div>
    );
}
