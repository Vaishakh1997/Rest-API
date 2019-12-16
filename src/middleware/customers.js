function errorHandle( request, response, next)
{
     response.status(404).send("Entered Customer_id is not present.")
     next("Entered Customer_id is not present.")
}

function errorHandleOrderId( request, response, next)
{
     response.status(404).send("Entered order_id is not present.")
     next("Entered order_id is not present.")
}

function errorHandleCustomerId( request, response, next)
{
     response.status(404).send("This customer don't have Customer_id")
     next("This customer don't have Customer_id")
}

function errorHandleEmail( request, response, next)
{
     response.status(404).send("Email ID is already exists")
     next("Email ID is already exists")
}

function errorHandleEmailAndPassword( request, response, next)
{
     response.status(404).send("Incorrect Email or Password")
     next("Incorrect Email or Password")
}


module.exports= { errorHandle, errorHandleCustomerId, errorHandleEmail, errorHandleEmailAndPassword, errorHandleOrderId}