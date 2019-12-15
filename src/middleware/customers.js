function errorHandle(request,response)
{
     response.send("Entered Customer_id is not present.")
}

module.exports= { errorHandle }