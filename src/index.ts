import {DTBconnection} from "./Config/DTBconnection";
import startServer from "./app";

 async function main(){
     
     await DTBconnection();
     const app = await startServer();

    app.set('port' , process.env.PORT || 5000);
    app.listen(app.get('port') , () =>{
        console.log("servidor on");
    });
}
main();