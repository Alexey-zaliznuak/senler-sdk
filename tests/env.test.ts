import dotenv from 'dotenv';

dotenv.config({ override: true });

describe('Environment Variables Check', () => {
  it('should have all required environment variables', () => {
    const requiredEnvVars = ['SENLER_ACCESS_TOKEN', 'VK_GROUP_ID'];

    requiredEnvVars.forEach(envVar => {
      expect(process.env[envVar]).toBeDefined();
      expect(process.env[envVar]).not.toBe('');
    });
  });
});
