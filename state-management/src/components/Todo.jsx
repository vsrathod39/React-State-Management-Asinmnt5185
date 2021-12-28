import ('./todo.css');

function Todo({heading, data, children}){
    return (
        <div className='container'>
            <h1>{heading}</h1>
            <ul>
                {
                    data.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            {children}
        </div>
    );
};

export default Todo;