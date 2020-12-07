import { MongoClient } from "mongodb";

export class MongoDBService {
  private readonly DB = "vita-via";
  private readonly URL = "mongodb+srv://Rob:rob@starter.u6lw5.mongodb.net/test";
  private mongoClient: MongoClient = new MongoClient(this.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  /**
   * Finds first instance of a document based on collection and query passed in
   * @param collection
   * @param query
   */
  protected async findDocument<T>(
    collection: string,
    query: Partial<T>
  ): Promise<T> {
    try {
      await this.mongoClient.connect();
      const database = this.mongoClient.db(this.DB);
      return await database.collection(collection).findOne(query);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Finds any instance of a document based on collection and query passed in
   * @param collection
   * @param query
   */
  protected async findAllDocuments<T>(
    collection: string,
    query: Partial<T>
  ): Promise<T[]> {
    try {
      await this.mongoClient.connect();
      const database = this.mongoClient.db(this.DB);
      return await database.collection(collection).find(query).toArray();
    } catch (e) {
      console.error(e);
    }
  }
}
