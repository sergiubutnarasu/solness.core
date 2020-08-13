import { KeyValue } from './key-value.type';

export type AppConfig = KeyValue & {
  DefaultLink: string;
  DatabaseHost: string;
  DatabaseName: string;
  DatabaseUser: string;
  DatabasePassword: string;
  DefaultEmail: string;
  DefaultEncryptionKey: string;
  DefaultUsername: string;
  DefaultUserPassword: string;
  Environment: string;
  SendgridKey: string;
};
