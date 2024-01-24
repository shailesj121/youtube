
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {Promise.resolve(requestHandler(req, res, next)).catch((err) => {next(err)}) }
}

// const asyncHandler = (requests) => {
//     async (req, res, next) => {
//         try{
//             await requests(req, res, next)
//         } catch(err){
//             res.status(err.code || 500).json({
//                 success: false,
//                 message: err.message
//             })
//         }
//     }
// }

export {asyncHandler}
