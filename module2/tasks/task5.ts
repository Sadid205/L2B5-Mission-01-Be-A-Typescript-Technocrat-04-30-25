{
    //
    type ReverseFunction = (str:string) => string
    
    const reverseString:ReverseFunction=(str)=>{
        const splitStr:string[] = str.split("")
        const n:number = splitStr.length
        for (let i:number=0;i<n/2;i++){
            const temp:string = splitStr[i]
            splitStr[i] = splitStr[n-i-1] 
            splitStr[n-i-1] = temp
        }
        const reverse_str:string = splitStr.join('')
        console.log(reverse_str)
        return reverse_str
    }

    reverseString("hello")
    //
}