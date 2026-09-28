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
