import { getConnectionManager, createConnection, Connection } from 'typeorm';

export default class ConnectionManager {
  /**
   * https://www.jeremydaly.com/manage-rds-connections-aws-lambda/?utm_campaign=Serverless%2BDigest&utm_medium=email&utm_source=Serverless_Digest_30
   * https://github.com/jeremydaly/serverless-mysql
   * https://www.jeremydaly.com/manage-rds-connections-aws-lambda/
   */
  async getConnection(): Promise<Connection> {
    if (getConnectionManager().has('default')) {
      await getConnectionManager()
        .get()
        .close();
    }

    return await createConnection();
  }
}
