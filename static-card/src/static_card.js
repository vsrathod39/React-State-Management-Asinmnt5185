function Mobile_OS(){
    const string_array = ['Android', 'iPhone', 'BlackBerry', 'Windows Phone'];
    return (
        <div>
            <ul>
                {
                    string_array.map(item =>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

function Mobile_Manufacturers(){
    const string_array = ['Samsung', 'HTC', 'Micromax', 'Apple'];
    return (
        <div>
            <ul>
                {
                    string_array.map(item =>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export {Mobile_OS, Mobile_Manufacturers};