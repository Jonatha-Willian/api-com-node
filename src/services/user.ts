import { User } from "../types/user"

export const findUserByEmailAndPassword = async (email: string, password: string) => {
    //cosulta ao banco de dados para encontrar o usuário
    if (email === "admin@hotmail.com" && password === "1234") {
        const user: User = {
            id: "2",
            name: "Teste da silva"
        }
        return user;
    }

    return null;
};

export const createUserToken = async (user: User) => {
    return "1234";
}

export const findUserByToken = async (token: string) => {
    //consultar BD para encontrar o usuário pelo token
    if (token === "1234") {
        const user: User = {
            id: "2",
            name: "Teste da silva"
        }
        return user;
    }

    return null;
};