import app from './app.js'
import { authenticated, synCup } from './config/database/database.js';
import { initModel } from './config/database/initMode.js'
import { envs } from './config/enviroments/enviroments.js';


async function main(){
    try{
        await authenticated()
        initModel()
        await synCup()

    }catch (error){
        console.error(error);
    }
}

main()

app.listen(envs.PORT, () => {
    console.log(`Server running on port: ${envs.PORT}`);
})