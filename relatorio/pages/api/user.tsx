//importando fu
import { NextApiRequest, NextApiResponse } from 'next';
import connect from "../../utils/database";

interface ResponseType{
    menssage: string;
}
export default async(
    req: NextApiRequest, 
    res: NextApiResponse<ResponseType>
    ): Promise<void> => {
        const {db} = await connect();
        const response = await db.collection("users").insertOne({
            name: "luiz fernando",
            age: 22,
        })
    res.status(200).json(response.ops[0]);
}