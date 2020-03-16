import { Template } from "./template";

export interface CharacterSheet {
    id: string;
    name: string;
    templateId: string;
    template?: Template;
}