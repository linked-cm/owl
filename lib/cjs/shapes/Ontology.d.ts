import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
import { Resource } from 'lincd-rdfs/shapes';
export declare class Ontology extends Resource {
    static targetClass: NodeReferenceValue;
    get declare(): NodeReferenceValue;
    get declaredPrefix(): string;
    get prefix(): string | undefined;
}
