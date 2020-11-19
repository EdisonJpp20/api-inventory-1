
import {createConnection} from 'typeorm';
import path from 'path';


export async function DTBconnection() {

    try {
        await createConnection({
          type:"mssql",
          host: "localhost",
        //   port : 1344 ,
          username: "sa",
          password: "edisonjp00254",
          database: "crud_exam",
          entities: [
              path.join(__dirname, '../Entities/*.ts')
          ],
          synchronize: true
        });

        console.log('Database is Connected')
        
    } catch (error) {
        console.log(error);        

        return error ;
    };
}