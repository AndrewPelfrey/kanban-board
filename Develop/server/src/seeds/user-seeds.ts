import { User } from '../models/user.js';

export const seedUsers = async () => {
  try {
    const count = await User.count(); // Check if users exist
    if (count === 0) {
      await User.bulkCreate(
        [
          { username: 'JollyGuru', password: 'password' },
          { username: 'SunnyScribe', password: 'password' },
          { username: 'RadiantComet', password: 'password' },
        ],
        { individualHooks: true }
      );
      console.log('Users seeded successfully.');
    } else {
      console.log('Users already exist, skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};
