var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { Shape } from '@_linked/core/shapes/Shape';
import { Property } from 'lincd-rdfs/shapes';
import { owl } from '../ontologies/owl.js';
import { linkedShape } from '../package.js';
let Restriction = class Restriction extends Shape {
    get onProperty() {
        return null;
    }
    get hasValue() {
        return null;
    }
    restrictPropertyHasValue(_property, _value) {
        throw new Error('Restriction.restrictPropertyHasValue depends on legacy mutation and is not migrated');
    }
};
Restriction.targetClass = owl.Restriction;
__decorate([
    objectProperty({
        path: owl.onProperty,
        maxCount: 1,
        shape: Property,
    }),
    __metadata("design:type", Property),
    __metadata("design:paramtypes", [])
], Restriction.prototype, "onProperty", null);
__decorate([
    objectProperty({
        path: owl.hasValue,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Restriction.prototype, "hasValue", null);
Restriction = __decorate([
    linkedShape
], Restriction);
export { Restriction };
//# sourceMappingURL=Restriction.js.map