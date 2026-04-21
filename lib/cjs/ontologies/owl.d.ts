export declare const loadData: () => Promise<{
    "@context": {
        dc: string;
        grddl: string;
        owl: string;
        rdf: string;
        rdfs: string;
        xml: string;
        xsd: string;
    };
    "@graph": ({
        "@id": string;
        "@type": string;
        "dc:title": string;
        "rdfs:comment": string;
        "rdfs:isDefinedBy": {
            "@id": string;
        }[];
        "rdfs:seeAlso": {
            "@id": string;
        }[];
        "owl:imports": {
            "@id": string;
        };
        "owl:versionIRI": {
            "@id": string;
        };
        "owl:versionInfo": string;
        "grddl:namespaceTransformation": {
            "@id": string;
        };
        "rdfs:label"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:domain"?: undefined;
        "rdfs:range"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:label": string;
        "rdfs:comment": string;
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:subClassOf": {
            "@id": string;
        };
        "dc:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:imports"?: undefined;
        "owl:versionIRI"?: undefined;
        "owl:versionInfo"?: undefined;
        "grddl:namespaceTransformation"?: undefined;
        "rdfs:domain"?: undefined;
        "rdfs:range"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:label": string;
        "rdfs:comment": string;
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "dc:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:imports"?: undefined;
        "owl:versionIRI"?: undefined;
        "owl:versionInfo"?: undefined;
        "grddl:namespaceTransformation"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:domain"?: undefined;
        "rdfs:range"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:label": string;
        "rdfs:comment": string;
        "rdfs:domain": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:range": {
            "@id": string;
        };
        "dc:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:imports"?: undefined;
        "owl:versionIRI"?: undefined;
        "owl:versionInfo"?: undefined;
        "grddl:namespaceTransformation"?: undefined;
        "rdfs:subClassOf"?: undefined;
    } | {
        "@id": string;
        "@type": string[];
        "rdfs:label": string;
        "rdfs:comment": string;
        "rdfs:domain": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:range": {
            "@id": string;
        };
        "dc:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:imports"?: undefined;
        "owl:versionIRI"?: undefined;
        "owl:versionInfo"?: undefined;
        "grddl:namespaceTransformation"?: undefined;
        "rdfs:subClassOf"?: undefined;
    })[];
}>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: {
    id: string;
};
export declare const AnnotationProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Class: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DataRange: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DatatypeProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DeprecatedClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DeprecatedProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const FunctionalProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const ObjectProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Ontology: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const OntologyProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Restriction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const SymmetricProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const TransitiveProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const allValuesFrom: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const equivalentProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const inverseOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const minCardinality: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const onProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const oneOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const unionOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const owl: {
    _ontologyResource: {
        id: string;
    };
    AnnotationProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Class: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Ontology: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    onProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    SymmetricProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    TransitiveProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    inverseOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    allValuesFrom: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    ObjectProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DatatypeProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DeprecatedClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DeprecatedProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Restriction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    minCardinality: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    OntologyProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    FunctionalProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    unionOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    oneOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DataRange: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    equivalentProperty: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
