function Book(title, author, pages, read) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call this contructor");
        
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', ' + read;
    };
}

