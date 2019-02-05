//This helper function will test whether show or movie is populated and will pass to index.ejs
function movieOrShow(movie, show)  {

    if (show != "" )  {
        
        return show
    } else if (movie != "" ) {
        
        return movie
    } else {
        
        return "No movie listed"
    }
}