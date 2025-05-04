{
    interface Book {
        type:"book";
        title:string;
        author:string;
        publicationDate:string;
        language:string;
        genre:string
        pages:number
    }

    interface Magazine {
        type:"magazine";
        issueNumber:number;
        frequency: "weekly" | "monthly" | "quarterly";
        atricles:[
            {
                name:string;
                type:string;
                coverPhoto:string;
                publishDate:string;
            }
        ];
        advertisements:[
            {
                name:string;
                type:string;
                coverPhoto:string;
            }
        ];
        targetAudience:string[];
        usedFor:string
    }

    type UnionBookMagazine = Book | Magazine
    type IntersectionBookMagazine = Book & Magazine

    const newBook:UnionBookMagazine = {
        type:"book",
        author:"sadid",
        title:"title",
        publicationDate:"4/5/25",
        language:"en",
        genre:"fiction",
        pages:300
    }
    console.log(newBook)
}