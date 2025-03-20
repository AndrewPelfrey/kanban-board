import { Ticket } from '../models/ticket.js';

export const seedTickets = async () => {
  try {
    const count = await Ticket.count(); // Check if tickets exist
    if (count === 0) {
      await Ticket.bulkCreate([
        {
          name: 'Design landing page',
          status: 'In Progress',
          description: 'Create wireframes and mockups for the landing page.',
          assignedUserId: 1,
        },
        {
          name: 'Set up project repository',
          status: 'Done',
          description: 'Create a new repository on GitHub and initialize it with a README file.',
          assignedUserId: 2,
        },
        {
          name: 'Implement authentication',
          status: 'Todo',
          description: 'Set up user authentication using JWT tokens.',
          assignedUserId: 1,
        },
        {
          name: 'Test the API',
          status: 'Todo',
          description: 'Test the API using Insomnia.',
          assignedUserId: 1,
        },
        {
          name: 'Deploy to production',
          status: 'Todo',
          description: 'Deploy the application to Render.',
          assignedUserId: 2,
        },
      ]);
      console.log('Tickets seeded successfully.');
    } else {
      console.log('Tickets already exist, skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding tickets:', error);
  }
};
