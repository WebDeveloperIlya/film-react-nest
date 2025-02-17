import { DevLogger } from './dev.logger';
import { JsonLogger } from './json.logger';
import { TskvLogger } from './tskv.logger';

describe('Loggers', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('DevLogger', () => {
    it('should log messages as is', () => {
      const logger = new DevLogger();
      logger.log('Test message');
      expect(consoleSpy).toHaveBeenCalledWith('Test message');
    });
  });

  describe('JsonLogger', () => {
    it('should log messages in JSON format', () => {
      const logger = new JsonLogger();
      logger.log('Test message', { key: 'value' });

      expect(consoleSpy).toHaveBeenCalledWith(
        JSON.stringify({
          level: 'log',
          message: 'Test message',
          optionalParams: [{ key: 'value' }],
        }),
      );
    });
  });

  describe('TskvLogger', () => {
    it('should log messages in TSKV format', () => {
      const logger = new TskvLogger();
      logger.log('Test message', 'extra info');

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringMatching(
          /^level=log\tmessage=Test message\textraParams=\["extra info"\]\n$/,
        ),
      );
    });
  });
});
