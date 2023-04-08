//👉 Write your tests below here:
import { test, expect } from '@jest/globals';
import { findMessage } from './main.js';
describe('findMessage', () => {
	test('finds encypted text 1', () => {
		expect(
			findMessage([0, 11, 22, 0, 24, 18, '!', 1, 4, '?', 2, 14, 3, 8, 13, 6])
		).toBe('always be coding');
	});
	test('finds encypted text 2', () => {
		expect(
			findMessage([0, 17, 22, 2, 24, 18, '!', 1, 4, '?', 2, 14, 3, 8, 13, 6])
		).toBe('arwcys be coding');
	});
	test('finds encypted text 3', () => {
		expect(
			findMessage([0, 11, 22, 0, 25, 18, '!', 5, 3, 0, 2, 14, 3, 8, 13, 6])
		).toBe('alwazs fdacoding');
	});
	test('finds encypted text 4', () => {
		expect(
			findMessage([0, 11, 22, 0, 24, 18, 9, 1, 4, '?', 2, 1, 13, 10, 13, 6])
		).toBe('alwaysjbe cbnkng');
	});
	test('finds encypted text 5', () => {
		expect(
			findMessage(['!', '/', 22, 0, 25, 25, '!', 1, 3, '?', 5, 14, 3, 8, 13, 6])
		).toBe('  wazz bd foding');
	});
	test('finds encypted text 6', () => {
		expect(
			findMessage(['!', '/', 22, 0, 25, 22, '!', 22, 24, 1, 4, '?', 3, 2, 3, 9])
		).toBe('  wazw wybe dcdj');
	});
	test('finds encypted text 7', () => {
		expect(
			findMessage(['!', '/', 22, 0, 5, 22, '!', 2, 24, 2, 4, '?', 3, '?', 4, 7])
		).toBe('  wafw cyce d eh');
	});
	test('finds encypted text 8', () => {
		expect(
			findMessage([4, '/', 5, '?', 6, 2, '!', 7, 24, 2, 4, '?', 3, '?', 4, 7])
		).toBe('e f gc hyce d eh');
	});
	test('finds encypted text 9', () => {
		expect(
			findMessage([4, '/', 5, 1, 4, 4, '!', 7, 4, '?', 4, '?', 2, '?', 2, 1])
		).toBe('e fbee he e c cb');
	});
	test('finds encypted text 10', () => {
		expect(
			findMessage([4, '/', 5, '?', 6, 4, 1, '/', 2, '/', 6, '?', 6, '?', 0, 0])
		).toBe('e f geb c g g aa');
	});
});
