import { Injectable } from "@angular/core";

import { Ninja } from "./ninja.model";

const NINJAS = Object.freeze([
    {
        name: "Raphael",
        password: "sai",
        skills: 100,
        dateOfBirth: new Date(1984, 5),
        color: "red",
        avatar: "https://2.bp.blogspot.com/-XkBrT28u7Cc/U7xYYfjFDsI/AAAAAAABccY/GOheYhjPz9A/s1600/53.png",
    },
    {
        name: "Michelangelo",
        password: "nunchuks",
        skills: 50,
        dateOfBirth: new Date(1984, 5),
        color: "orange",
        avatar: "https://s-media-cache-ak0.pinimg.com/originals/a1/d5/24/a1d524750edcdf5b60d37c222f4dd8e9.jpg",
    },
    {
        name: "Tux",
        password: "lqlq",
        skills: 1,
        dateOfBirth: new Date(1991, 9, 17),
        avatar: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    },
    {
        name: "Kendo guy",
        password: "shinai",
        skills: 99,
        dateOfBirth: new Date(2000, 1),
        avatar: "http://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/kendoui-angular2/kendoka.png?sfvrsn=4",
    },
    {
        name: "Tux",
        password: "lqlq",
        skills: 1,
        dateOfBirth: new Date(1991, 9, 17),
        avatar: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    },
    {
        name: "Kendo guy",
        password: "shinai",
        skills: 99,
        dateOfBirth: new Date(2000, 1),
        avatar: "http://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/kendoui-angular2/kendoka.png?sfvrsn=4",
    },
    {
        name: "Tux",
        password: "lqlq",
        skills: 1,
        dateOfBirth: new Date(1991, 9, 17),
        avatar: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
    },
    {
        name: "Donatello",
        password: "bō",
        skills: 30,
        dateOfBirth: new Date(1984, 5),
        color: "purple",
        avatar: "https://s-media-cache-ak0.pinimg.com/originals/0f/63/63/0f63635cf44f075f4d2b3b760015547b.jpg",
    },
    {
        name: "Leonardo",
        password: "katanas",
        skills: 70,
        dateOfBirth: new Date(1984, 5),
        color: "blue",
        avatar: "http://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/teenage-mutant-ninja-turtles/characters/leonardo-character-web-desktop.png?height=0&width=480&matte=true&crop=false",
    },
]);

@Injectable()
export class NinjasService {
    getItems(): Ninja[] {
        return Array.from(Array(50)).reduce(res => [...res, ...NINJAS], []);
    }
}