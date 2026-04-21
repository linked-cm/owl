"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owl = exports.unionOf = exports.oneOf = exports.onProperty = exports.minCardinality = exports.inverseOf = exports.hasValue = exports.equivalentProperty = exports.allValuesFrom = exports.TransitiveProperty = exports.SymmetricProperty = exports.Restriction = exports.OntologyProperty = exports.Ontology = exports.ObjectProperty = exports.FunctionalProperty = exports.DeprecatedProperty = exports.DeprecatedClass = exports.DatatypeProperty = exports.DataRange = exports.Class = exports.AnnotationProperty = exports._ontologyResource = exports.ns = exports.loadData = void 0;
const Prefix_1 = require("@_linked/core/utils/Prefix");
const NameSpace_1 = require("@_linked/core/utils/NameSpace");
const package_js_1 = require("../package.js");
const _this = __importStar(require("./owl.js"));
const dataFile = '../data/owl.json';
const loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve().then(() => __importStar(require('../data/owl.json')));
    }
    //@ts-ignore
    return Promise.resolve().then(() => __importStar(require('../data/owl.json'))).then((data) => data.default);
};
exports.loadData = loadData;
const base = 'http://www.w3.org/2002/07/owl#';
exports.ns = (0, NameSpace_1.createNameSpace)(base);
Prefix_1.Prefix.add('owl', base);
// The ontology resource itself is defined without the hash in the source ontology.
exports._ontologyResource = { id: 'http://www.w3.org/2002/07/owl' };
exports.AnnotationProperty = (0, exports.ns)('AnnotationProperty');
exports.Class = (0, exports.ns)('Class');
exports.DataRange = (0, exports.ns)('DataRange');
exports.DatatypeProperty = (0, exports.ns)('DatatypeProperty');
exports.DeprecatedClass = (0, exports.ns)('DeprecatedClass');
exports.DeprecatedProperty = (0, exports.ns)('DeprecatedProperty');
exports.FunctionalProperty = (0, exports.ns)('FunctionalProperty');
exports.ObjectProperty = (0, exports.ns)('ObjectProperty');
exports.Ontology = (0, exports.ns)('Ontology');
exports.OntologyProperty = (0, exports.ns)('OntologyProperty');
exports.Restriction = (0, exports.ns)('Restriction');
exports.SymmetricProperty = (0, exports.ns)('SymmetricProperty');
exports.TransitiveProperty = (0, exports.ns)('TransitiveProperty');
exports.allValuesFrom = (0, exports.ns)('allValuesFrom');
exports.equivalentProperty = (0, exports.ns)('equivalentProperty');
exports.hasValue = (0, exports.ns)('hasValue');
exports.inverseOf = (0, exports.ns)('inverseOf');
exports.minCardinality = (0, exports.ns)('minCardinality');
exports.onProperty = (0, exports.ns)('onProperty');
exports.oneOf = (0, exports.ns)('oneOf');
exports.unionOf = (0, exports.ns)('unionOf');
exports.owl = {
    _ontologyResource: exports._ontologyResource,
    AnnotationProperty: exports.AnnotationProperty,
    Class: exports.Class,
    Ontology: exports.Ontology,
    onProperty: exports.onProperty,
    hasValue: exports.hasValue,
    SymmetricProperty: exports.SymmetricProperty,
    TransitiveProperty: exports.TransitiveProperty,
    inverseOf: exports.inverseOf,
    allValuesFrom: exports.allValuesFrom,
    ObjectProperty: exports.ObjectProperty,
    DatatypeProperty: exports.DatatypeProperty,
    DeprecatedClass: exports.DeprecatedClass,
    DeprecatedProperty: exports.DeprecatedProperty,
    Restriction: exports.Restriction,
    minCardinality: exports.minCardinality,
    OntologyProperty: exports.OntologyProperty,
    FunctionalProperty: exports.FunctionalProperty,
    unionOf: exports.unionOf,
    oneOf: exports.oneOf,
    DataRange: exports.DataRange,
    equivalentProperty: exports.equivalentProperty,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'owl', exports.loadData, dataFile);
//# sourceMappingURL=owl.js.map