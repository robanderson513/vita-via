import { MongoClient } from "mongodb";

export class MongoDBService {
  private readonly DB = "vita-via";
  private readonly URL = "mongodb+srv://Rob:rob@starter.u6lw5.mongodb.net/test";
  private mongoClient: MongoClient = new MongoClient(this.URL);

  /**
   * Finds first instance of object based on collection and query passed in
   * @param collection
   * @param query
   */
  protected async findObject<T>(collection: string, query: object): Promise<T> {
    try {
      this.mongoClient.connect();
      const database = this.mongoClient.db(this.DB);
      return database.collection(collection).findOne(query);
    } catch (e) {
      console.error(e);
    } finally {
      this.mongoClient.close();
    }
  }

  /**
   * Finds any instance of object based on collection and query passed in
   * @param collection
   * @param query
   */
  protected async findList<T>(collection: string, query: object): Promise<T[]> {
    try {
      this.mongoClient.connect();
      const database = this.mongoClient.db(this.DB);
      return database.collection(collection).find(query).toArray();
    } catch (e) {
      console.error(e);
    } finally {
      this.mongoClient.close();
    }
  }
}
