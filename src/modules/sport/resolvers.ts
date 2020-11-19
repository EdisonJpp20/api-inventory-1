import { getRepository } from "typeorm";
import { ResolverMap } from "../../types/resolver-type";
import { Sport } from "../../Entities/Sport";

export const resolvers: ResolverMap = {
    Query: {
        getSports: async () => {

                try {
                    const repository = await getRepository(Sport);
                     console.log("hola");
                     const data = await repository.findOne(1);
                            console.log(data)
                            console.log(repository);
                     
                        //  console.log(repository);
                     
                        //  return repository;
                        //  return data;
                    
                } catch (error) {
                    console.log(error)
                }
        }
    },
}