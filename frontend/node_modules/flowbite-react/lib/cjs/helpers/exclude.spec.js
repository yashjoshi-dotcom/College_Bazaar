"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const exclude_1 = __importDefault(require("./exclude"));
vitest_1.describe.concurrent('Helpers / Exclude (delete key from object)', () => {
    vitest_1.describe.concurrent('Given object that contains targeted key', () => {
        (0, vitest_1.it)('should return input object without that key', () => {
            const input = {
                a: 1,
                b: 2,
                c: 3,
            };
            const output = (0, exclude_1.default)({ key: 'a', source: input });
            (0, vitest_1.expect)(output).toEqual({
                b: 2,
                c: 3,
            });
        });
    });
    vitest_1.describe.concurrent('Given object that does not contain target key', () => {
        (0, vitest_1.it)('should return input object', () => {
            const input = {
                b: 2,
                c: 3,
            };
            const output = (0, exclude_1.default)({ key: 'a', source: input });
            (0, vitest_1.expect)(output).toEqual({
                b: 2,
                c: 3,
            });
        });
    });
});
