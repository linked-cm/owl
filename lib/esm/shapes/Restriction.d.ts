import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
import { Shape } from '@_linked/core/shapes/Shape';
import { Property, Resource } from 'lincd-rdfs/shapes';
export declare class Restriction extends Shape {
    static targetClass: NodeReferenceValue;
    get onProperty(): Property;
    get hasValue(): NodeReferenceValue;
    restrictPropertyHasValue(_property: NodeReferenceValue, _value: Resource): void;
}
