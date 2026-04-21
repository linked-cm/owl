var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { Prefix } from '@_linked/core/utils/Prefix';
import { Resource } from 'lincd-rdfs/shapes';
import { owl } from '../ontologies/owl.js';
import { linkedShape } from '../package.js';
import { shacl } from '@_linked/core/ontologies/shacl';
let Ontology = class Ontology extends Resource {
    get declare() {
        return null;
    }
    get declaredPrefix() {
        return '';
    }
    get prefix() {
        return Prefix.getPrefix(this.id) || undefined;
    }
};
Ontology.targetClass = owl.Ontology;
__decorate([
    objectProperty({
        path: shacl.declare,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Ontology.prototype, "declare", null);
__decorate([
    literalProperty({
        path: shacl.prefix,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Ontology.prototype, "declaredPrefix", null);
Ontology = __decorate([
    linkedShape
], Ontology);
export { Ontology };
//# sourceMappingURL=Ontology.js.map