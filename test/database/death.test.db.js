import chai, { expect, should } from 'chai';
import { Death } from '../../server/database/models';

describe('Database', () => {
	const killerName = "MARIADOGAME";
	let death;

	before(async () => {
		death = await Death.create({ killerName });
	})

	after(async () => {
		death.destroy();
	})

	it('Should register deaths', async () => {
		const filtered = await Death.findOne({ where: { killerName } });
		await expect(filtered.killerName).to.equal(killerName);
	})
})