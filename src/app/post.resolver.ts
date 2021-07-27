import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post, PostsService } from "./posts.service";

@Injectable({providedIn: "root"})
export class PostResolver implements Resolve<Post> {

    constructor(private postsServise:PostsService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | Observable<Post> | Promise<Post> {
        return this.postsServise.getById(+route.params['id'])!
    }
    
}