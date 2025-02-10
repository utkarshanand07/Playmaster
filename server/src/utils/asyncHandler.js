const asyncHandler = (requestHandler) => {
    // higher order function used to handle errors in asynchronous route handlers
    return (req, res, next) => {                                    // Execute requestHandler and catch any errors
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))                                  // Send errors to Express error handler
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }