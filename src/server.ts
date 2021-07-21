
import app from './app'; 

/* init any external data connection 
eg..
sequelizeInit()
mongoInit()
*/

const port = app.get('port'); 
const server = app.listen(port, () => {
    console.log(`app is listening on ${port}`); 
});

export default server; 