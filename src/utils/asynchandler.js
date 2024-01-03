const requestHandler = (requests) => {
    async (req, res, next) => {
        try{
            await requests(req, res, next)
        } catch(err){
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
        }
    }
}

export {requestHandler}