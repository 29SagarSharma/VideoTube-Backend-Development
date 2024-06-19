const asyncHandler = ()=>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)). catch((err) => next (err))
    }
}


export {asyncHandler}


// const asyncHandler = () => {}
// coonst asyncHandler =(func) => () => {}
// const asyncHandler = (func) => async () => {}


/////////////try and catch wale tarike se///////////////////
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// } 