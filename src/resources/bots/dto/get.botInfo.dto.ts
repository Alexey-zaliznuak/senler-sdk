export interface BotInfo {
  bot_id: string;

  /** Bot name */
  title: string;

  /** Date and time of bot creation */
  date: string;

  /**
   * Bot status
   *
   * `'0'` Stopped
   *
   * `'1'` Started
   */
  active: '1' | '0';

  /**
   * Bot publication status
   *
   * `'0'` There are unpublished changes
   *
   * `'1'` Published
   */
  published: '1' | '0';
}
