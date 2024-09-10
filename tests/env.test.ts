import dotenv from 'dotenv';

dotenv.config();

describe('Environment Variables Check', () => {
  it('should have all required environment variables', () => {
    const requiredEnvVars = ['SENLER_TESTS_ACCESS_TOKEN', 'SENLER_TESTS_VK_GROUP_ID'];

    requiredEnvVars.forEach(envVar => {
      expect(process.env[envVar]).toBeDefined();
      expect(process.env[envVar]).not.toBe('');
    });
  });
});
