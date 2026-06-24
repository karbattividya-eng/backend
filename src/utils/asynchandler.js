//async handler kay karto manje to aata database sobat tar all time connect karva lagat user so te data ch all code tar 
// nahi writing karu shakta so ami kay karto manje taya data
//  ch function create karto anni taya ch kuthe kuthe use hoto tite tite tayala import karaych 
const asyncHandler = (requestHandler) => {
    (req,req,next) =>{
            Promise.resolve(requestHandler(req,req,next)).catch((err) => next(err))
    }
    
}//promise ch code





export {asyncHandler}

//const asyncHandler = () => {}
//const asyncHandler = (fn) => () => {}
//const asyncHandler = (fn) => async () => {}


/*const asyncHandler = (fn) => async(req,res,next) => {
    try{
        await fn (req,req,next)


    }catch(error){
        res.status(err.code || 500).json({//json respose karaych karna front la easy asva success true ahe kay false ahe message err.message
            success:false,
            message:err.message

        })
        

    }
    
}*/