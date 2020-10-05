import { Deserializable } from '../interfaces/deserializable';

export class Project implements Deserializable{
    id: number;
    location: string;
    inversores: number;
    dineroContribuido: number;
    dineroObjetivo: number;
    potencia: number;
    rentabilidad: number;
    plazo: number;
    closed: boolean;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
