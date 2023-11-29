import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroments.js";

export const sequelize = new Sequelize(envs.DB_URI,{
    loqqing: false
})

export const authenticated = async() => {
    try {
        await sequelize.authenticate();
        console.log('connection ok!...😊');
    }catch (error) {
        console.error(error);
    }
}
export const synCup = async() => {
    try {
        await sequelize.sync();
        console.log('Synced ok!... 😊');
    } catch (error){
        console.error(error);
    }
}