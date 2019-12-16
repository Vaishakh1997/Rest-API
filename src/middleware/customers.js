function errorHandle( request, response,next)
{
     response.status(404).send("Entered Customer_id is not present.")
     next("Entered Customer_id is not present.")
}

function errorHandleCustomerId( request, response,next)
{
     response.status(404).send("This customer don't have Customer_id")
     next("This customer don't have Customer_id")
}

module.exports= { errorHandle, errorHandleCustomerId}