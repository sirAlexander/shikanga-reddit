import { Resolver, Query, Ctx } from "type-graphql";
import { MyContext } from "../types";
import { Post } from "../entities/Post";


@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() { em }: MyContext): Promise<Post[]> {
        return em.find(Post, {});
    }
}