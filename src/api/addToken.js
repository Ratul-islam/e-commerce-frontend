const addToken = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if(token === undefined){
        return 1;
    }
    return {
        headers: {
            xAuth: token
        }
    };
};

export default addToken;