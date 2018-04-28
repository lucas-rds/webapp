import chai, { expect, should } from 'chai';
import { Death, Player } from '../../server/database/models';

describe('Database', function () {
	this.timeout(10000);
	const killerName = "MARIADOGAME";
	const victimName = "JOAODOGAME";
	let death;
	let killer;
	let victim;

	const savedModelExpectations = (model) => {
		expect(model.id).to.greaterThan(0);
		expect(model).to.not.eq(undefined);
		expect(model).to.not.eq(null);
	}

	after((done) => {
		killer.destroy()
			.then(() => victim.destroy())
			.then(() => death.destroy())
			.then(() => done());
	})

	it('Should register Players', async () => {
		killer = await Player.create({ name: killerName });
		victim = await Player.create({ name: victimName });
		savedModelExpectations(killer);
		savedModelExpectations(victim);
	})

	it('Should register Deaths', async () => {
		death = await Death.create({
			killerId: killer.id,
			victimId: victim.id
		});
		const queriedDeath = await Death.findOne({
			where: { id: death.id },
			include: ['killer', 'victim']
		});
		expect(queriedDeath).to.not.eq(undefined);
		expect(queriedDeath.killer.id).to.eq(killer.id);
		expect(queriedDeath.victim.id).to.eq(victim.id);
	})
})