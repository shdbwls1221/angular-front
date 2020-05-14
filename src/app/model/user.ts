import { Group } from './group';

export class User {
    id: string;
    name: string;
    email: string;
    group: Group = new Group();
}