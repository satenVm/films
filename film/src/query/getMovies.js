const getMoves = async() =>{
    try{
        return await axios.get("https://api.themoviedb.org/3/movie/1?api_key=1d9153e543481708fd5de134abadc70f&language=en-US")
    }catch(error){
        console.log(error)
    }
}