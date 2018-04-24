import chai, { expect, should } from 'chai';
import { Death, Player } from '../../server/database/models';

describe('Database', () => {
	const killerName = "MARIADOGAME";
	let death;
	let killer;

	after(async () => {
		// death.destroy();
		killer.destroy();
	})

	it('Should register Players', async () => {
		killer = await Player.create({ name: killerName });
		expect(killer.id).to.greaterThan(0);
		expect(killer).to.not.eq(undefined);
		expect(killer).to.not.eq(null);
	})

	it('Should register Deaths', async () => {
		console.log("FOREIGN>:", killer.id);
		
		death = await Death.create({ killer: killer.id, killerId: killer.id });
		// const queriedDeath = await Death.findOne({ where: { killer }, include: ['killer'] });
		// console.log(queriedDeath);
		// expect(queriedDeath).to.not.eq(undefined);
		// expect(queriedDeath).to.not.eq(null);
	})
})